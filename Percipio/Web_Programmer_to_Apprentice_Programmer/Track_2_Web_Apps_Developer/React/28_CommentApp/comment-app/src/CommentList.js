import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component {

   /*  deleteComment = (index) => {
        this.props.deleteComment(index);
    } */
    
    render() {

        var message_list = this.props.messages.map((msg, index) => 
            <Comment key={index} message={msg} index={index} {...this.props}/>
        );

        return (
            <div className='commentlist'>
                <div>
                    {message_list}
                </div>
            </div>
        )
    }
}