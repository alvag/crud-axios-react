import React from 'react';
import './Post.css';
import { IPost } from '../../../Interfaces';

interface IProps {
    post: IPost;
}

const Post = (props: IProps) => {
    return (
        <div className="col-12 col-md-8">
            <h1>{props.post.title}</h1>
            <p>Autor: {props.post.userId}</p>
            {props.post.body}
        </div>
    );
};

export default Post;
