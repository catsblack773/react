import React, { Component } from 'react';

import Post from './Post'

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts
        }
    }
    
    render() {
        let postRenderHtml = this.state.posts.map((post) => {
            return <div className="blog-post" key={post.id}>
                <Post title={post.title} txt={post.postBody}/>
            </div>
        });
        
        return (
            <div className="blog">
                {postRenderHtml}
            </div>
        );
    }
}

export default Blog;