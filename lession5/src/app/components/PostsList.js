import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';

class PostsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    render() {
        if (!this.state.posts.length) return null;

        const posts = this.state.posts.map((post) => {
            return <Post key={post.id} {...post}/>
        });

        return (
            <div>
                {posts}
            </div>
        );
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({posts: response.data})
        })
    }
}

export default PostsList;
