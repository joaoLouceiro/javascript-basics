class Message extends React.Component {
	render() {
		return (
			<div className={'border plain-message ' + this.props.cssClass}>{this.props.message}</div>
		);
	}
}

class SuccessMessage extends React.Component {
	render() {
		return <Message {...this.props} cssClass='success-message' />;
	}
}

class ErrorMessage extends React.Component {
	render() {
		return (
			<div>
				<Message {...this.props} cssClass='error-message' />
			</div>
		);
	}
}

class Dialog extends React.Component {
	render() {
		return (
			<div>
				<Message message='A plain message' />
				<SuccessMessage message='A success message' />
				<ErrorMessage message='An error message' />
			</div>
		);
	}
}

ReactDOM.render(<Dialog />, document.getElementById('root'));
