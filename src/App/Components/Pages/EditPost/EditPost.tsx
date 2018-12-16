import React, { Component } from 'react';

import { IPost } from '../../../Interfaces';
import { PostForm } from '../../Modules';

interface IProps {
    createUpdatePost: (post: IPost) => Promise<boolean>;
    post: IPost;
    postId: number;
}

class EditPost extends Component<IProps> {

    sendData = (data: any): Promise<boolean> => {
        const post: IPost = {
            ...this.props.post,
            ...data
        };
        return this.props.createUpdatePost(post);
    }

    render() {
        return (
            <div className="col-8">
                <PostForm post={this.props.post} sendData={this.sendData} />
            </div>

        );
    }
}

export default EditPost;
