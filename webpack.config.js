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
		'./src/admin/js/sharp-slideshow-admin.jsx',
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
			
			/* COMPONENTS ____________________________________________________________________________________ */
			slideShowPreview:	p_resolve('js/components/SlideShowPreview.jsx'),
			selectSlideShow:	p_resolve('js/components/SelectSlideShow.jsx'),
			tabsExampleSimple:	p_resolve('js/components/Tabs.jsx'),
			confirmDialog:	p_resolve('js/components/ConfirmDialog.jsx'),
			sourcesView:			p_resolve('js/components/SourcesView.jsx'),
				sourceList:			p_resolve('js/components/sources/SourceList.jsx'),
				sourceElement:	p_resolve('js/components/sources/SourceElement.jsx'),
				sourcesLoader:		p_resolve('js/components/sources/SourcesLoader.js'),
				sourceStyles:		p_resolve('js/components/sources/SourceStyles.scss'),
				
			slidesView:	p_resolve('js/components/SlidesView.jsx'),
				removeSlideElement:	p_resolve('js/components/removeSlides/RemoveSlideElement.jsx'),
			
			/* CONTROLLERS ____________________________________________________________________________________ */
			slideShowController:	p_resolve('js/controllers/SlideShowController.js'),
			
			/* UTIL ____________________________________________________________________________________ */
			wordpressAPI:		p_resolve('js/util/WordpressAPI.js'),
			sharpSlideShowAPI:	p_resolve('js/util/SharpSlideShowAPI.js'),
			util:				p_resolve('js/util/util.js'),
			appSettings:				p_resolve('js/util/AppSettings.js'),
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
