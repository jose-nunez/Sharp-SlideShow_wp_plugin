import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import SharpSlideShow_API from 'sharpSlideShowAPI';

export default class SelectSlideShow extends React.Component{
	constructor(props) {
		super(props);
		
		this.sharpslideshow_api = new SharpSlideShow_API();
		this.state = {selected:null,slideshows:[]};
	}
	
	componentDidMount = ()=>{
		this.retreiveData();
	}
	
	retreiveData = ()=>{
		this.retreiveSlideShowsIDs().then(
			slideshows=>{
				this.setState({slideshows:slideshows,selected:slideshows[0].ID});
			},
			err=>{throw err}
		)
	}

	retreiveSlideShowsIDs = ()=>{
		return this.sharpslideshow_api.getSlideShowsIDs(this.props.slideShowID).then(
			resp=>(resp.data),
			err=>{throw err;}
		);
	}

	handleChange = (event, index, value) => {
		this.setState({selected:value});
	};

	render = ()=>{
		return (
			<SelectField className="select-ui" hintText="Slideshow" value={this.state.selected} onChange={this.handleChange}>
				{this.state.slideshows.map((slideshow,index)=>{
					return (
						<MenuItem key={index} value={slideshow.ID} primaryText={slideshow.name} />
					);
				})}
			</SelectField> 
		);
	}
}