import React, { Component } from 'react';
import './Posts.css';
import { IPost } from '../../../Interfaces';
import { PostList } from '../../Modules';

interface IProps {
    posts: IPost[];
}

class Posts extends Component<IProps> {
    render() {
        return (
            <div className="col-012 col-md-8">
                <h2 className="text-center">Posts</h2>
                <PostList posts={this.props.posts} />
            </div>
        );
    }
}

export default Posts;
