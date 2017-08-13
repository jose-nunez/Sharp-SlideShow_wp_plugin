import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';

import SourceElement from 'sourceElement';
import 'sourceStyles';

export default class SourceList extends React.Component{
	constructor(props){
		super(props);
	}

	extractParams ={
		post: post=>{
			let title = post.title.rendered;
			let img = null;
			let imgobj,img_sizes;
			if(post.featured_media && (imgobj = this.props.sources.images[post.featured_media]) ){ 
				if(img_sizes = imgobj.media_details.sizes){
					img = img_sizes.thumbnail.source_url;
				}
				else if(imgobj.source_url){
					img = imgobj.source_url;
				}
			}
			return {title:title,img_url:img};
		},
		slide:slide=>slide,
	}

	render(){
		return (
			<List className="source-list">
				{this.props.sources[this.props.type].map((source,index)=>{
					return (
						<SourceElement key={index} source={this.extractParams[this.props.type](source)} />
					);
				})}
			</List>
		);
	}
}
