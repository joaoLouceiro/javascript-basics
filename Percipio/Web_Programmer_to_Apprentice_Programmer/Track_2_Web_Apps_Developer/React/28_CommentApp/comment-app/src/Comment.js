import React, { Component } from 'react';
import message from './message.png';
import trash from './trash.png'

export default class Comment extends Component {

    deleteComment = () => {
        this.props.deleteComment(this.props.index);
    }

    render() {
        return (
            <div>
                <table className='comment'>
                    <tbody>
                        <tr>
                            <td className='photo'>
                                <img src={message} alt="Message"></img>
                            </td>
                            <td className='message'>
                                {this.props.message}
                            </td>
                            <td className='delete'>
                                <img src={trash} alt='Trash' onClick={this.deleteComment}></img>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
