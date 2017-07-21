import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';

import TabsExampleSimple from 'tabsExampleSimple';

import 'fontsStyles';
import 'appStyles';

const MyComponent = ()=>{
	return (
		<div className="holi">
			<h1>Sharp Slideshow</h1>
			<MuiThemeProvider>
			{/*
				<RaisedButton label="Default" />
			*/}
				<TabsExampleSimple></TabsExampleSimple>
			</MuiThemeProvider>
		</div>
	)
};

ReactDOM.render(
	<MyComponent></MyComponent>,
	document.getElementById('sharp-slideshow-admin')
);