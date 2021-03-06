import React, { Component } from 'react';

import './CreatePost.css';
import { IPost } from '../../../Interfaces';
import { PostForm } from '../../Modules';

interface IProps {
    createUpdatePost: (post: IPost) => Promise<boolean>;
}

class CreatePost extends Component<IProps> {

    post: IPost = { title: '', body: '', userId: 1 };

    sendData = (data: any): Promise<boolean> => {
        const post: IPost = {
            ...this.post,
            ...data
        };
        return this.props.createUpdatePost(post);
    }

    render() {
        return (
            <div className="col-8">
                <PostForm post={this.post} sendData={this.sendData} />
            </div>

        );
    }
}

export default CreatePost;
