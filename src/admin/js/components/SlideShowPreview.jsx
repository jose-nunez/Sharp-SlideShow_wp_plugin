import React from 'react';
import DOMPurify from 'dompurify';

import RaisedButton from 'material-ui/RaisedButton';

import SharpSlideShow_API from 'sharpSlideShowAPI';

export default class SlideShowPreview extends React.Component{
	constructor(props) {
		super(props);
		
		this.sharpslideshow_api = new SharpSlideShow_API();
		this.state = {markup:''};
	}
	
	componentDidMount = ()=>{
		this.retreiveData();
	}
	
	retreiveData = ()=>{
		this.retreiveSlideShow().then(
			markup=>{
				this.setState({markup:markup});
				intialice_sharpSlideShow(jQuery); //CALLS THE EXTERNAL FUNCTION TO INITIALICE THE SLIDES
			},
			err=>{throw err}
		)
	}


	retreiveSlideShow = ()=>{
		return this.sharpslideshow_api.getSlideShow().then(
			resp=>(resp.data),
			err=>{throw err;}
		);
	}

	refresh = ()=>{
		this.setState({markup:''});
		this.retreiveData();
	}
	

	render = ()=>{
		return (
			<div>
				<RaisedButton label="Refresh" onTouchTap={this.refresh} />
				<p dangerouslySetInnerHTML={{__html: this.state.markup }}></p>
			</div>
			// <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.markup)}}></p>
		);
	}
}