import React from 'react';

import ContentSend from 'material-ui/svg-icons/content/send';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default class RemoveSlideElement extends React.Component{
	constructor(props){
		super(props);
	}

	handleRemove = ()=>{alert(this.props.title)}

	render(){
			return (
				<ListItem leftAvatar={<Avatar src={this.props.img_url} />} primaryText={this.props.title} leftIcon={<ContentSend />} />
			);
	}
}
