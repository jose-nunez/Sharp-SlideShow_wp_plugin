var webpack  = require('webpack');
var path = require('path');

function p_resolve(dirname){
	return path.resolve(__dirname,'src/admin/'+dirname);
}

module.exports = {
	stats: {
		errorDetails: true
	},
	entry: [
		'./src/admin/jsx/sharp-slideshow-admin.jsx',
	],
	output: {
		// path: path.resolve(__dirname,'sharp-slideshow/'),
		path: path.resolve('E:/Dropbox/DESARROLLO/joannecrowther.com/wordpress/wp-content/plugins/sharp-slideshow/admin/js/'),
		filename: 'sharp-slideshow-admin.js'
	},
	resolve: {
		alias: {
			/* STYLES ____________________________________________________________________________________________ */
			fontsStyles: 	p_resolve('scss/fontStyles.css'),
			appStyles: 		p_resolve('scss/sharp-slideshow-admin.scss'),
			/* JSX COMPONENTS ____________________________________________________________________________________ */
			tabsExampleSimple:		p_resolve('jsx/components/Tabs.jsx'),
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
