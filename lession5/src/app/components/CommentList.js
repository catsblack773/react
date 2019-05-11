import React, { Component } from 'react';
import axios from 'axios';
import Comment from './Comment';

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
    }

    render() {
        if (!this.state.comments.length) return null;

        const comments = this.state.comments.map(comment => {
            return <Comment key={comment.id} {...comment}/>
        });

        return (
            <div>
                {comments}
            </div>
        );
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            this.setState({comments: response.data})
        })
    }
}

export default CommentList;
