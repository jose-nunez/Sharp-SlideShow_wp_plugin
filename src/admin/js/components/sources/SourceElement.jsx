import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import ConfirmDialog from 'confirmDialog';

let dialogProps = {
	title:'Confirm remove slide',
	msg:'Arre you sure you want to remove this beautiful slide?'
}

export default class SourceElement extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			expanded:false,
			openRemoveDialog:false,
			settings: {
				display:'fill',
				excerpt:true,
				new_page:false,
			},
		}
	}

	setSettings({display,excerpt,new_page}){
		this.setState({settings:{
			display:display!==undefined?display:this.state.settings.display,
			excerpt:excerpt!==undefined?excerpt:this.state.settings.excerpt,
			new_page:new_page!==undefined?new_page:this.state.settings.new_page,
		}});
	}

	componentDidMount = ()=>{
		this.setSettings(this.props.source.settings);
	}

	handleExpandChange = (expanded)=>{this.setState({expanded: expanded});}
	handleExcerptCheck = (event,isChecked)=>{this.setSettings({excerpt: isChecked});}
	handleNewTabCheck = (event,isChecked)=>{this.setSettings({new_page: isChecked});}
	handleDisplayChange = (event, index, value)=>{this.setSettings({display: value});}

	prepareSlide(){
		let resp = {
			source_type:this.props.source.source_type,
			source_id:this.props.source.source_id,
			settings:this.state.settings,
		}
		if(this.props.source.id) resp.id = this.props.source.id;
		return resp;
	}

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
							value={this.state.settings.display}
							onChange={this.handleDisplayChange}
							>
							<MenuItem value={'fill'} primaryText="Fill" />
							<MenuItem value={'fit'} primaryText="Fit" />
							<MenuItem value={'stretch'} primaryText="Stretch" />
							<MenuItem value={'tile'} primaryText="Tile" />
							<MenuItem value={'center'} primaryText="Center" />
						</SelectField>
						<Checkbox label="Include excerpt" checked={this.state.settings.excerpt} onCheck={this.handleExcerptCheck} />
						<Checkbox label="Link opens on new page" checked={this.state.settings.new_page}  onCheck={this.handleNewTabCheck}  />
						
						{(this.props.type!='slide'? 
							<RaisedButton label="Add" onTouchTap={evt=>this.props.addSlide(this.prepareSlide())}	className="btn-add" /> : 
							<div>
								<RaisedButton label="Update" onTouchTap={evt=>this.props.updateSlide(this.prepareSlide())}	className="btn-add" />
								<RaisedButton label="Remove" onTouchTap={evt=>this.setState({openRemoveDialog:true})} className="btn-delete" buttonStyle={{backgroundColor:'#dc4040'}} />
								<ConfirmDialog 
									open={this.state.openRemoveDialog}
									title={dialogProps.title}
									msg={dialogProps.msg}
									handleConfirm={()=>this.props.removeSlide(source.id)}
									handleClose={()=>this.setState({openRemoveDialog:false})}
								/>
							</div>
						)}
					</CardText>
				</Card>
			);
	}

}
