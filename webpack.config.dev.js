const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/dev-server',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('[name].css', {
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		}),
		new StyleLintPlugin({
			configFile: '.stylelintrc',
			context: 'src',
			files: '**/*.css',
			failOnError: false,
			quiet: false
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader?presets[]=es2015'
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
			},
			{
				test: /\.json$/, loader: 'json'
			},
			{
			     test: /\.svg$/,
			     loader: 'svg-inline-loader'
			 }
		]
	},
	devServer: {
		contentBase: './build',
		hot: true,
		colors: true,
		inline: true
	}
}
