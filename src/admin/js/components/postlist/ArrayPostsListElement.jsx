import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import Checkbox from 'material-ui/Checkbox';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

export default class ArrayPostsListElement extends React.Component{
	constructor(props){
		super(props);
		this.state = {expanded:false,excerpt:true,newtab:false};
	}

	handleExpandChange = (expanded)=>{this.setState({expanded: expanded});}
	handleExcerptCheck = (event,isChecked)=>{this.setState({excerpt: isChecked});}
	handleNewTabCheck = (event,isChecked)=>{this.setState({newtab: isChecked});}

	render(){
			let post = this.props.post;

			return (
				<Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} className="postsListElement">
					<CardHeader
					  title={post.title}
					  avatar={post.img}
					  actAsExpander={true}
					  showExpandableButton={false}
					  className = "postsListElement-header"
					/>
					<CardText expandable={true}>
						<Checkbox label="Include excerpt" checked={this.state.excerpt} onCheck={this.handleExcerptCheck} />
						<Checkbox label="Link opens on new page" checked={this.state.newtab}  onCheck={this.handleNewTabCheck}  />
						<RaisedButton className="btn-add" label="Add" />
					</CardText>
				</Card>

			);
	}
}
