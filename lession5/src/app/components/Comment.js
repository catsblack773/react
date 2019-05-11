import React, { Component } from 'react';
import {Link} from 'react-router';

class Comment extends Component {
    render() {
        return (
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <Link to={`/comments/${this.props.id}`}>
                        {this.props.name} / <b>{this.props.email}</b>
                    </Link>
                </div>
                <p>{this.props.body}</p>
            </div>
        );
    }
}

export default Comment;
