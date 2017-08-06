import React from 'react';
// import DOMPurify from 'dompurify';

import RaisedButton from 'material-ui/RaisedButton';

import SharpSlideShow_API from 'sharpSlideShowAPI';
import SlideShowController from 'slideShowController';

export default class SlideShowPreview extends React.Component{
	constructor(props) {
		super(props);
		this.sharpslideshow_api = new SharpSlideShow_API(this.props.api_url);
		this.state = {markup:''};
	}
	
	componentWillUnmount = ()=>{
		SlideShowController.removeRefreshCallback(this.refresh);
	}
	componentDidMount = ()=>{
		SlideShowController.addRefreshCallback(this.refresh); // In case the slideshow was updated
		this.refresh();
	}
	componentWillReceiveProps = ({slideShowID})=>{
		if(slideShowID!=this.props.slideShowID) this.refresh(slideShowID);
	}
	refresh = (slideShowID)=>{
		if(slideShowID || this.props.slideShowID) this.retreiveSlideShow(slideShowID || this.props.slideShowID);

	}
	refreshButton = ()=>{
		this.refresh();
	}
	
	retreiveSlideShow = (slideShowID)=>{
		this.setState({isLoading:true});
		return this.sharpslideshow_api.getSlideShow(slideShowID).then(
			({data})=>{
				this.setState({markup:data,isLoading:false});
				intialice_sharpSlideShow(slideShowID); //CALLS THE GLOBAL FUNCTION TO INITIALICE THE SLIDES
			},
			err=>{throw err}
		);
	}

	
	renderList(){
		if(this.state.isLoading){
			return <span className="spinner block is-active"></span>;
		}
		else{
			return (
				<div>
					<RaisedButton label="Refresh" onTouchTap={this.refreshButton} />
					<p dangerouslySetInnerHTML={{__html: this.state.markup }}></p>
				</div>
				// <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.markup)}}></p>
			);
		}
	}

	render = ()=>this.renderList();
}