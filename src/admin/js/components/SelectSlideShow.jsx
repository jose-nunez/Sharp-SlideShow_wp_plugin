import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import SharpSlideShow_API from 'sharpSlideShowAPI';

export default class SelectSlideShow extends React.Component{
	constructor(props) {
		super(props);
		this.state = {selected:null,slideshows:[]};
	}
	
	componentDidMount = ()=>{
		this.retreiveData().then(()=>{
			this.props.onChangeSelected(this.state.selected);
		});
	}
	
	retreiveData = ()=>{
		return SharpSlideShow_API.getSlideShowsIDs().then(
			({data})=>{
				this.setState({slideshows:data,selected:data[0].ID});
			},
			err=>{throw err}
		)
	}

	handleChange = (event, index, slideShowID) => {
		this.setState({selected:slideShowID});
		this.props.onChangeSelected(slideShowID);
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