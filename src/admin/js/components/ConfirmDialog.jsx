import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


export default class ConfirmDialog extends React.Component {
	state = {
		open: false,
	};

	componentDidMount = ()=>{
		this.setState({open:this.props.open});
	}
	componentWillReceiveProps = (nextProps)=>{
		this.setState({open:nextProps.open});
	}

	handleClose = (confirm) => {
		this.props.handleClose();
		if(confirm) this.props.handleConfirm();
	};

	render() {
		const actions = [
			<FlatButton label="Cancel" primary={true} onTouchTap={()=>this.handleClose(false)} />,
			<FlatButton label="Submit" primary={true} keyboardFocused={true} onTouchTap={()=>this.handleClose(true)} />,
		];

		return (
			<Dialog
				title={this.props.title}
				actions={actions}
				modal={this.props.modal}
				open={this.state.open}
				onRequestClose={this.handleClose}
			>
				{this.props.msg}
			</Dialog>
		);
	}
}