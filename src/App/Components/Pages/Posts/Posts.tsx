import React, { Component } from 'react';
import './Posts.css';
import { IPost } from '../../../Interfaces';

interface IProps {
    posts: IPost[];
}

class Posts extends Component<IProps> {
    render() {
        return (
            <div>
                <h1>Posts</h1>
            </div>
        );
    }
}

export default Posts;
