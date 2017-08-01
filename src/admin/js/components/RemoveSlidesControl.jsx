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
	
	// componentDidMount = ()=>{
	componentWillReceiveProps = ({slideShowID})=>{
		this.retreiveSlides(slideShowID);
	}
	
	retreiveSlides = (slideShowID)=>{
		return this.sharpslideshow_api.getSlides(slideShowID).then(
			({data})=>{
				this.setState({slides:data});
			}
			,err=>{throw err;}
		);
	}

	render(){
		console.log('Este es: ',this.props.slideShowID);
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