import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


import TabsExampleSimple from 'tabsExampleSimple';
import SlideShowPreview from 'slideShowPreview';
import SelectSlideShow from 'selectSlideShow';

import 'fontsStyles';
import 'appStyles';

const styles = {
	block: {
		maxWidth: 250,
	},
	radioButton: {
		marginBottom: 16,
	},
};

class MyComponent extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			slideShowID:null,
			api_url:sharp_slideshow_api_url,	//External variable!
			wp_api_url:sss_wp_api_url, 			//External variable!
		};
	}

	loadSlideShow = (slideShowID)=>{console.log('mostrando ',slideShowID);this.setState({slideShowID:slideShowID})}

	render = ()=>{
		return (
			<MuiThemeProvider>
			<div id="sss-main-container" className="clearfix">
				<h1>Sharp Slideshow</h1>
				<div>
					<RaisedButton label="Add New" /> 
					<SelectSlideShow onChangeSelected={this.loadSlideShow} api_url={this.state.api_url} />
					<RaisedButton label="Delete" />
				</div>

				<div className="right-side"><div className="right-side-inner">
					<h2>Preview</h2>
					<SlideShowPreview slideShowID={this.state.slideShowID} api_url={this.state.api_url}/>
				</div></div>
				<div className="left-side"><div className="left-side-inner">
					<h1>Settings</h1>
					<h2>Slides</h2>
					{/*
					<RadioButtonGroup name="shipSpeed" defaultSelected="automatic">
						<RadioButton value="automatic" label="Automatic selection" style={styles.radioButton} />
						<RadioButton value="manual" label="Manual selection" style={styles.radioButton} />
					</RadioButtonGroup>
					*/}
					<TabsExampleSimple slideShowID={this.state.slideShowID} api_url={this.state.api_url} wp_api_url={this.state.wp_api_url} />
				</div></div>
			</div>
			</MuiThemeProvider>
		)
	};

}

ReactDOM.render(
	<MyComponent></MyComponent>,
	document.getElementById('sharp-slideshow-admin')
);