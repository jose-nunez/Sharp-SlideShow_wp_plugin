import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TabsExampleSimple from 'tabsExampleSimple';
import SlideShowPreview from 'slideShowPreview';

import 'fontsStyles';
import 'appStyles';

const MyComponent = ()=>{
	return (
		<div id="sss-main-container" className="clearfix">
			<h1>Sharp Slideshow</h1>
			{/*
				<RaisedButton label="Default" />
			*/}
			<div className="right-side">
				<div className="right-side-inner">
					<MuiThemeProvider>
						<SlideShowPreview />
					</MuiThemeProvider>
				</div>
			</div>
			<div className="left-side">
				<div className="left-side-inner">
					<MuiThemeProvider>
						<TabsExampleSimple></TabsExampleSimple>
					</MuiThemeProvider>
				</div>
			</div>
		</div>
	)
};

ReactDOM.render(
	<MyComponent></MyComponent>,
	document.getElementById('sharp-slideshow-admin')
);