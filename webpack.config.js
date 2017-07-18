var webpack  = require('webpack');
var path = require('path');

module.exports = {
	stats: {
		errorDetails: true
	},
	entry: [
		'./src/admin/jsx/sharp-slideshow-admin.js',
	],
	output: {
		path: path.resolve('E:/Dropbox/DESARROLLO/joannecrowther.com/wordpress/wp-content/plugins/sharp-slideshow/admin/js/'),
		filename: 'sharp-slideshow-admin.js'
	},
	resolve: {
		alias: {
			appStyles: '../scss/sharp-slideshow-admin.scss',
		},
		extensions: ['.js']
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ["style-loader","css-loader?sourceMap"]
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader","css-loader?sourceMap","sass-loader?sourceMap"]
			},
		],
	},
	devtool:'cheap-module-eval-source-map'
};
