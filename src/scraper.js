import fs from 'fs'
import request from 'request'
import cheerio from 'cheerio'
import slugify from 'slugify'
import series from 'async-series'

const url = 'https://codex.wordpress.org/WordPress_Versions'
const jazzgreats = []

const getFirstImage = json => {
	let data
	for (var property in json) {
		if (json.hasOwnProperty(property)) {
			data = json[property]
			break
		}
	}

	if (data.hasOwnProperty('thumbnail')) return data.thumbnail.source
}

request(url, (error, response, html) => {
	if (!error) {
		const $ = cheerio.load(html)

		$('.widefat tr').each(function() {
			const release = $(this)

			// Collect data
			const info = {
				version: release.find('td').eq(0).children('b').text(),
				link:
					'https://codex.wordpress.org' +
						release.find('td').find('a').attr('href'),
				date: release
					.find('td')
					.eq(1)
					.text()
					.replace(/(\r\n|\n|\r)/gm, '')
					.trim(),
				musician: release
					.find('td')
					.eq(2)
					.text()
					.replace(/(\r\n|\n|\r)/gm, '')
					.trim(),
				changelog:
					'https://codex.wordpress.org' +
						release.find('td').eq(3).children('a').attr('href'),
				blog: release.find('td').eq(4).children('a').attr('href'),
				spotify:
					'spotify:search:' +
						slugify(
							release
								.find('td')
								.eq(2)
								.text()
								.replace(/(\r\n|\n|\r)/gm, '')
								.trim()
						).toLowerCase(),
				image: ''
			}

			// Download image
			const download = (uri, filename, callback) => {
				request.head(uri, (err, res, body) => {
					request(uri)
						.pipe(fs.createWriteStream('./src/images/' + filename))
						.on('close', callback)
				})
			}

			// Ronan Boren is the only one in the WP release history who is not a Jazz musician.
			// "We’re breaking the tradition of naming releases after jazz musicians to congratulate Ryan Boren on his new son (and first WP baby) Ronan."
			// Source: 2.0.5: https://wordpress.org/news/2006/10/205-ronan/
			if (info.musician && info.version && info.musician !== 'Ronan Boren') {
				// Search Wikipedia for images
				request(
					{
						url: `https://en.wikipedia.org/w/api.php?action=query&titles=${info.musician.replace(
							/ /g,
							'+'
						)}&prop=pageimages&format=json&pithumbsize=600`,
						json: true
					},
					(error, response, body) => {
						if (!error && response.statusCode === 200) {
							var imgUrl = getFirstImage(body.query.pages)

							fs.exists(
								'./src/images/' + info.musician.replace(/ /g, '-') + '.jpg',
								exists => {
									if (!exists) {
										if (imgUrl) {
											download(
												imgUrl,
												info.musician.replace(/ /g, '-') + '.jpg',
												() => {}
											)
										}
									}
								}
							)
						}
					}
				)
				// Add image name to info object
				info.image = info.musician.replace(/ /g, '-') + '.jpg'

				// Push to Jazzgreats
				jazzgreats.push(info)
			}
		})
	}

	fs.writeFile(
		'./src/data/data.json',
		JSON.stringify(jazzgreats, null, 4),
		function(err) {}
	)
})
