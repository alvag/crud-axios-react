import React from 'react';
import './Post.css';
import { IPost } from '../../../Interfaces';

interface IProps {
    post: IPost;
}

const Post = (props: IProps) => {
    console.log(props.post);
    return (
        <div>Post</div>
    );
};

export default Post;
