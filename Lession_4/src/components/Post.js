import React, { Component } from 'react';

class Blog extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <>
                <h3 className="blog-post-title">{this.props.title}</h3>
                <p className="blog-post-text">{this.props.txt}</p>
            </>
        );
    }
}

export default Blog;