var webpack  = require('webpack');
var path = require('path');

module.exports = {
	stats: {
		errorDetails: true
	},
	entry: [
		'./src/admin/jsx/sharp-slideshow-admin.jsx',
	],
	output: {
		// path: __dirname,
		// filename: './sharp-slideshow/admin/js/sharp-slideshow-admin.js'
		path: path.resolve('E:/Dropbox/DESARROLLO/joannecrowther.com/wordpress/wp-content/plugins/sharp-slideshow/admin/js/'),
		filename: 'sharp-slideshow-admin.js'
	},
	resolve: {
		alias: {
			fontsStyles: '../scss/fontStyles.css',
			appStyles: '../scss/sharp-slideshow-admin.scss',
			tabsExampleSimple: './components/Tabs.jsx'
		},
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015','stage-0']
				},
				exclude: /(node_modules|bower_components)/
			},
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
