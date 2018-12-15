import React from 'react';
import './Post.css';
import { IPost } from '../../../Interfaces';

interface IProps {
    post: IPost;
}

const Post = (props: IProps) => {
    return (
        <div>
            post
        </div>
    );
};

export default Post;
