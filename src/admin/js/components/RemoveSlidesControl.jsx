import React from 'react';

import {List} from 'material-ui/List';

import SharpSlideShow_API from 'sharpSlideShowAPI';
import RemoveSlideElement from 'removeSlideElement';


export default class RemoveSlidesControl extends React.Component{
	constructor(props) {
		super(props);
		
		this.sharpslideshow_api = new SharpSlideShow_API();
		this.state = {slides:[],isLoading:false};
	}
	
	componentDidMount = ()=>{
		this.retreiveSlides(this.props.slideShowID);
	}
	componentWillReceiveProps = ({slideShowID})=>{
		if(slideShowID!=this.props.slideShowID) this.retreiveSlides(slideShowID);
	}
	
	retreiveSlides = (slideShowID)=>{
		this.setState({isLoading:true});
		return this.sharpslideshow_api.getSlides(slideShowID).then(
			({data})=>{
				this.setState({slides:data,isLoading:false});
			}
			,err=>{throw err;}
		);
	}

	renderList(){
		if(this.state.isLoading){
			return <span className="spinner block is-active"></span>;
		}
		else{
			return (
				<List className="post-list">
					{this.state.slides.map((slide,index)=>{
						return (
							<RemoveSlideElement key={index} title={slide.title} img_url={slide.img_url} />
						);
					})}
				</List>
			);
		}
	}

	render(){
		return (
			<div className="posts-list">
				{this.renderList()}
			</div>
		);
	}

	deleteSlide = ()=>{
		console.log(arguments);
		alert('holi');
	}
	handleTouchTap = ()=>{
		console.log(arguments);
		alert('tocado!');
	}
}