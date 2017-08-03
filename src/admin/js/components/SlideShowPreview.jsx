import React from 'react';
// import DOMPurify from 'dompurify';

import RaisedButton from 'material-ui/RaisedButton';

import SharpSlideShow_API from 'sharpSlideShowAPI';

export default class SlideShowPreview extends React.Component{
	constructor(props) {
		super(props);
		
		this.sharpslideshow_api = new SharpSlideShow_API();
		this.state = {markup:''};
	}
	
	componentDidMount = ()=>{
		this.retreiveSlideShow(this.props.slideShowID);
	}
	componentWillReceiveProps = ({slideShowID})=>{
		if(slideShowID!=this.props.slideShowID) this.retreiveSlideShow(slideShowID);
	}
	
	retreiveSlideShow = (slideShowID)=>{
		this.setState({isLoading:true});
		return this.sharpslideshow_api.getSlideShow(slideShowID).then(
			({data})=>{
				this.setState({markup:data,isLoading:false});
				intialice_sharpSlideShow(slideShowID); //CALLS THE EXTERNAL FUNCTION TO INITIALICE THE SLIDES
			},
			err=>{throw err}
		);
	}

	refresh = ()=>{
		this.retreiveSlideShow(this.props.slideShowID);
	}
	
	renderList(){
		if(this.state.isLoading){
			return <span className="spinner block is-active"></span>;
		}
		else{
			return (
				<div>
					<RaisedButton label="Refresh" onTouchTap={this.refresh} />
					<p dangerouslySetInnerHTML={{__html: this.state.markup }}></p>
				</div>
				// <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.markup)}}></p>
			);
		}
	}

	render = ()=>this.renderList();
}