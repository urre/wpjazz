# WordPress Jazz

Visut [wpjazz.now.sh](https://wpjazz.now.sh/)

> "WordPress core developers share a love of jazz music, and since WordPress 1.0 all major releases are named in honor of jazz musicians they admire.""

![](https://res.cloudinary.com/urre/image/upload/v1496566335/ttmqspgiek4wfqkcvlzj.png)

### What?

The Music Behind The Releases. The major WordPress releases are named in honor of jazz musicians.

### Tools

+ React
+ Webpack
+ Babel ES2015 and stage-0 preset
+ Scraper using Cheerio, Request. Wikipedia API for downloading images.
+ Postcss
+ Having fun with css blend modes
+ Stylelint
+ React Icons
+ Prettier

### Get in to it

Develop

	npm start

Run scraper to get releases

	npm run scrape

Saves data as ``./src/data/data.json`` and images in ``./src/data/images``

#### Changelog
- 1.0.1 Moved site to Now
- 1.0.0 New repo. New sraper, Build the website in React.
- 0.2.0: Switched Google image search for Wikipedia
- 0.1.4: Renamed repo to WP Jazz Releases
- 0.1.3: Fixed a typo in image file names in json file
- 0.1.2: Minor
- 0.1.1: Change image file names. Added license
- 0.1.0: Only download images if the don't exist in path
