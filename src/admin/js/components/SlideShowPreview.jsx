import React from 'react';
import DOMPurify from 'dompurify';

import RaisedButton from 'material-ui/RaisedButton';

import SharpSlideShow_API from 'sharpSlideShowAPI';

export default class SlideShowPreview extends React.Component{
	constructor(props) {
		super(props);Object.keys(this).forEach(index=>{if(React.Component[index]==undefined && this[index] instanceof Function){this[index] = this[index].bind(this);}});
		
		this.sharpslideshow_api = new SharpSlideShow_API();
		this.state = {markup:''};
	}
	
	retreiveData(){
		this.retreiveSlideShow().then(
			markup=>{
				this.setState({markup:markup});
				intialice(jQuery); //CALLS THE EXTERNAL FUNCTION TO INITIALICE THE SLIDES
			},
			err=>{throw err}
		)
	}

	componentDidMount(){
		this.retreiveData();
	}

	retreiveSlideShow(){
		return this.sharpslideshow_api.getSlideShow().then(
			resp=>(resp.data),
			err=>{throw err;}
		);
	}

	render(){
		return (
			// <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.markup)}}></p>
			<p dangerouslySetInnerHTML={{__html: this.state.markup }}></p>
		);
	}
}