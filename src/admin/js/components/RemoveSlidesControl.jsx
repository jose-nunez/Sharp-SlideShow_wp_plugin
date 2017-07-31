import React from 'react';

import {List} from 'material-ui/List';

import SharpSlideShow_API from 'sharpSlideShowAPI';
import RemoveSlideElement from 'removeSlideElement';


export default class RemoveSlidesControl extends React.Component{
	constructor(props) {
		super(props);
		
		this.sharpslideshow_api = new SharpSlideShow_API();
		this.state = {slides:[]};
	}
	
	componentDidMount = ()=>{
		this.retreiveSlides();
	}
	
	retreiveSlides = ()=>{
		return this.sharpslideshow_api.getSlides().then(
			({data})=>{
				this.setState({slides:data});
			}
			,err=>{throw err;}
		);
	}

	render(){
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

	deleteSlide = ()=>{
		console.log(arguments);
		alert('holi');
	}
	handleTouchTap = ()=>{
		console.log(arguments);
		alert('tocado!');
	}
}