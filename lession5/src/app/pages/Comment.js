import React, { Component } from 'react';
import axios from 'axios';
import CommentView from '../components/Comment';

class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: null
        }
    }

    render() {
        if (!this.state.comment) return null;

        return (
            <div>
                <CommentView {...this.state.comment}/>
            </div>
        );
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`)
        .then(response => {
            this.setState({comment: response.data});
        });
    }
}

export default Comment;
