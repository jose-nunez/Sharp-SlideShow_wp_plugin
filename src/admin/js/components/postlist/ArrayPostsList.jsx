import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';

import ArrayPostsListElement from 'arrayPostsListElement';
import 'postsListStyles';

export default class ArrayPostsList extends React.Component{
	constructor(props){
		super(props);
	}

	extractPostParams = (post)=>{
		let title = post.title.rendered;
		let img = null;
		let imgobj,img_sizes;
		if(post.featured_media && (imgobj = this.props.images[post.featured_media]) ){ 
			if(img_sizes = imgobj.media_details.sizes){
				img = img_sizes.thumbnail.source_url;
			}
			else if(imgobj.source_url){
				img = imgobj.source_url;
			}
		}
		return {title:title,img:img};
	}

	render(){
		return (
			<List className="post-list">
				{this.props.posts.map((post,index)=>{
					return (
						<ArrayPostsListElement key={index} post={this.extractPostParams(post)} />
					);
				})}
			</List>
		);
	}
}
