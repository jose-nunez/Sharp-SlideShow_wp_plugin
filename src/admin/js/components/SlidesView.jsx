import React from 'react';

import {List} from 'material-ui/List';

import SlideShowController from 'slideShowController';
import SourcesView from 'sourcesView';

export default class SlidesView extends React.Component{
	constructor(props) {
		super(props);
	}
	
	componentWillUnmount = ()=>{
		SlideShowController.removeRefreshCallback(this.refresh);
	}
	componentDidMount = ()=>{
		SlideShowController.addRefreshCallback(this.refresh); // In case the slideshow was updated
		// this.refresh();
	}

	shouldComponentUpdate = (nextProps,nextState)=>{
		console.log('aer si actualizamos ',nextProps,(nextProps.slideShowID!==this.props.slideShowID));
		return (nextProps.slideShowID!==this.props.slideShowID);
	}

	/*componentWillReceiveProps = ({slideShowID})=>{
		if(slideShowID!=this.props.slideShowID) this.refresh(slideShowID);
	}
	refresh = (slideShowID)=>{
		if(slideShowID || this.props.slideShowID) this.retreiveSlides(slideShowID || this.props.slideShowID);
	}*/
	
	render(){
		console.log('redibujando! ctm',this.props.slideShowID);
		
		if(this.props.slideShowID) return <SourcesView type="slide" slideShowID={this.props.slideShowID} />
		else return <span>{'Nothing here yet'}</span>;
	}
}