import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

export default class SourceElement extends React.Component{
	constructor(props){
		super(props);
		this.state = {expanded:false,excerpt:true,newtab:false,display:1};
	}

	handleExpandChange = (expanded)=>{this.setState({expanded: expanded});}
	handleExcerptCheck = (event,isChecked)=>{this.setState({excerpt: isChecked});}
	handleNewTabCheck = (event,isChecked)=>{this.setState({newtab: isChecked});}
	handleDisplayChange = (event, index, value)=>{this.setState({display: value});}


	render(){
			let source = this.props.source;

			return (
				<Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} className="postsListElement">
					<CardHeader
					  title={source.title}
					  avatar={source.img_url}
					  actAsExpander={true}
					  showExpandableButton={false}
					  className = "postsListElement-header"
					/>
					<CardText expandable={true}>
						<SelectField
							floatingLabelText="Display image"
							value={this.state.display}
							onChange={this.handleDisplayChange}
							>
							<MenuItem value={1} primaryText="Fill" />
							<MenuItem value={2} primaryText="Fit" />
							<MenuItem value={3} primaryText="Stretch" />
							<MenuItem value={4} primaryText="Tile" />
							<MenuItem value={5} primaryText="Center" />
						</SelectField>
						<Checkbox label="Include excerpt" checked={this.state.excerpt} onCheck={this.handleExcerptCheck} />
						<Checkbox label="Link opens on new page" checked={this.state.newtab}  onCheck={this.handleNewTabCheck}  />
						<RaisedButton className="btn-add" label="Add" />
					</CardText>
				</Card>

			);
	}
}
