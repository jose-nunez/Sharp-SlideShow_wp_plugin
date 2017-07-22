import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';

import 'postsListStyles';

export default class ArrayPostsList extends React.Component{
	constructor(props){
		super(props);Object.keys(this).forEach(index=>{if(React.Component[index]==undefined && this[index] instanceof Function){this[index] = this[index].bind(this);}});
	}

	render(){

		return (
			<List className="post-list">
				{ <Subheader>Mis postitos</Subheader> }
				{this.props.posts.map((post,index)=>{

					return (
						<ListItem 
							key={index} 
							className="post-list-element"
							primaryText={post.title.rendered}
							// leftCheckbox={<Checkbox className="post-list-checkbox" />} 
							leftAvatar={post.featured_media? <Avatar src={this.props.images[post.featured_media].media_details.sizes.thumbnail.source_url} /> : null}
							
						/>
					);
				})}
			</List>
		);
	}
}
