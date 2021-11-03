import React, { Component } from 'react';
import './App.css';
import CommentList from './CommentList';
import CommentBox from './CommentBox';

class App extends Component {
	state = {
		messages: [
			"I'm a message!",
			"I'm another message",
			"I'm yet another message",
			"I'm one more message",
		],
	};

	addComment = (message) => {
		this.setState((prevState) => {
			var messages = prevState.messages.concat();
      messages.push(message);
			return {
				messages: messages,
			};
		});
	};
  
  deleteComment = (index) => {
    this.setState((prevState) => {
      var messages = prevState.messages.concat();
      messages.splice(index, 1);
      return {
        messages: messages,
      };
    });
  };

	render() {
		return (
			<div className='container'>
				<CommentBox addComment={this.addComment} />
				<CommentList deleteComment={this.deleteComment} messages={this.state.messages} />
			</div>
		);
	}
}

export default App;
