var webpack  = require('webpack');

var build_dir_base = 'E:/Dropbox/DESARROLLO/joannecrowther.com/wordpress/wp-content/plugins/';
// var build_dir_base = './';
var build_dir = build_dir_base + "sharp-slideshow/";

var script_src  = './src/admin/jsx/';

module.exports = {
	stats: {
		errorDetails: true
	},
	entry: [
		// 'script-loader!jquery/dist/jquery.min.js',
		// 'script-loader!foundation-sites/dist/js/foundation.min.js',
		// script_src + 'sharp-slideshow-admin.jsx',
		'./src/admin/jsx/sharp-slideshow-admin.jsx',
	],
	/*externals:{
		'jquery': 'jQuery',
	},
	plugins:[
		new webpack.ProvidePlugin({
			'$':'jquery',
			'jQuery':'jquery',
		}),
	],
	*/
	output: {
		path: __dirname,
		filename: build_dir +'sharp-slideshow-admin.js'
	},
	resolve: {
		alias: {
			/*
			ErrorModal: './ErrorModal.jsx',
			openWeatherMap: './api/openWeatherMap.jsx',
			appStyles: '../styles/app.scss',
			*/
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
