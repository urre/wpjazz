const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')
const postcssUrl = require('postcss-url')
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
	entry: ['./src/index'],
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].[chunkhash].js',
		publicPath: '/',
	},
	plugins: [
	new webpack.DefinePlugin({
	  'process.env.NODE_ENV': JSON.stringify('production')
	}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		new ExtractTextPlugin('[name].[contenthash].css', {
		  allChunks: true
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		}),
		new WebpackPwaManifest({
		    name: 'WordPress Jazz',
		    short_name: 'WPJazz',
		    description: 'The Music Behind The Releases. In honor of the jazz musicians.',
		    background_color: '#7221AE',
		    icons: [
		        {
		            src: path.resolve('src/assets/icon.png'),
		            sizes: [96, 128, 192, 256, 384, 512]
		        },
		        {
		            src: path.resolve('src/assets/icon.png'),
		            size: '1024x1024'
		        }
		    ]
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loaders: ['babel-loader']
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
					'!css-loader?sourceMap&importLoaders=1!postcss-loader'
				)
			},
			{
				test: /\.html$/,
				loader: 'raw-loader'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				exclude: /(node_modules)/,
				loader: 'url-loader?limit=8192'
			}
		]
	}
}
