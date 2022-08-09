import React, { Component } from 'react'

export default class CommentBox extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    };

    addComment = () => {
        this.props.addComment(this.inputRef.current.value);
        this.inputRef.current.value = '';
    }

    render() {
        return (
            <div className='commentbox'>
                <input ref = {this.inputRef} className='input'/>
                <button onClick={this.addComment} className='button'>Post</button>
            </div>
        )
    }
}
