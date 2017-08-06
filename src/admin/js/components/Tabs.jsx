import React from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';

import PostsList from 'postsList';
import RemoveSlidesControl from 'removeSlidesControl';

import DOMPurify from 'dompurify';

const styles = {
	headline: {
		fontSize: 24,
		paddingTop: 16,
		marginBottom: 12,
		fontWeight: 400,
	},
};

function handleActive(tab) {
	// alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

export default class TabsExampleSimple extends React.Component{
	constructor(props) {
		super(props);
		this.state = {};
	}


	displayRemoveSlides = ()=>{
		if(this.props.slideShowID)
			return <RemoveSlidesControl slideShowID={this.props.slideShowID} api_url={this.props.api_url} />;
		else return 'Holi';
	}


	render(){
		return (
			<Tabs>
				<Tab label="Add Posts" >
					<PostsList wp_api_url={this.props.wp_api_url} />
				</Tab>
				<Tab label="Add Pages" >
				</Tab>
				<Tab label="Add Media" >
				</Tab>
				<Tab label="Current" >
					{this.displayRemoveSlides()}
				</Tab>
			</Tabs>
		);	
	}
}