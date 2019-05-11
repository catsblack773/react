import React, { Component } from 'react';
import axios from 'axios';
import PostView from '../components/Post';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null
        }
    }

    render() {
        if (!this.state.post) return null;

        return (
            <div>
                <PostView {...this.state.post}/>
            </div>
        );
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
        .then(response => {
            this.setState({post: response.data})
        })
    }
}

export default Post;
