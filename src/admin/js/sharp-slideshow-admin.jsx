import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


import TabsExampleSimple from 'tabsExampleSimple';
import SlideShowPreview from 'slideShowPreview';

import 'fontsStyles';
import 'appStyles';

var slideShowID = 6766767;

const styles = {
	block: {
		maxWidth: 250,
	},
	radioButton: {
		marginBottom: 16,
	},
};

const MyComponent = ()=>{
	return (
		<MuiThemeProvider>
		<div id="sss-main-container" className="clearfix">
			<h1>Sharp Slideshow</h1>
			<div>
				<RaisedButton label="Add New" /> 
				<SelectField className="select-ui" hintText="Slideshow" value={2} >
					<MenuItem value={1} primaryText="My SS 1" />
					<MenuItem value={2} primaryText="My SS 2" />
					<MenuItem value={3} primaryText="My SS 3" />
				</SelectField> 
				<RaisedButton label="Delete" />
			</div>

			<div className="right-side"><div className="right-side-inner">
				<h2>Preview</h2>
				<SlideShowPreview slideShowID={slideShowID} />
			</div></div>
			<div className="left-side"><div className="left-side-inner">
				<RadioButtonGroup name="shipSpeed" defaultSelected="automatic">
					<RadioButton value="automatic" label="Automatic selection" style={styles.radioButton} />
					<RadioButton value="manual" label="Manual selection" style={styles.radioButton} />
				</RadioButtonGroup>
				<TabsExampleSimple slideShowID={slideShowID} />
			</div></div>
		</div>
		</MuiThemeProvider>
	)
};

ReactDOM.render(
	<MyComponent></MyComponent>,
	document.getElementById('sharp-slideshow-admin')
);