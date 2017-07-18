import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';

import 'fontsStyles';
import 'appStyles';

const MyComponent = ()=>{
	return (
		<div className="holi">
			REact is working
			<MuiThemeProvider>
				<RaisedButton label="Default" />
			</MuiThemeProvider>
		</div>
	)
};

ReactDOM.render(
	<MyComponent></MyComponent>,
	document.getElementById('sharp-slideshow-admin')
);