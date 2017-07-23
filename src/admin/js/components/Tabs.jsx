import React from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';

import PostsList from 'postsList';

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
		super(props);Object.keys(this).forEach(index=>{if(React.Component[index]==undefined && this[index] instanceof Function){this[index] = this[index].bind(this);}});
		this.state = {};
	}

	componentDidMount(){
	}

	render(){
		return (
			<Tabs>
				<Tab label="Item One" >
					<div>
						<h2 style={styles.headline}>Tab One</h2>
						<PostsList />
					</div>
				</Tab>
				<Tab label="Item Two" >
					<div>
						<h2 style={styles.headline}>Tab Two</h2>
						<p>holas</p>
					</div>
				</Tab>
				<Tab
					label="onActive"
					data-route="/home"
					onActive={handleActive}
				>
					<div>
						<h2 style={styles.headline}>Tab Three</h2>
						<p>
							This is a third example tab.
						</p>
					</div>
				</Tab>
			</Tabs>
		);	
	}
}