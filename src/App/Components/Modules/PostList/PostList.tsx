import React, { Component } from 'react';
import './PostList.css';
import { IPost } from '../../../Interfaces';
import { Post } from '../';

interface IProps {
    posts: IPost[];
}

class PostList extends Component<IProps> {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Título</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderPosts()}
                </tbody>
            </table>
        );
    }

    renderPosts = () => {
        const posts = this.props.posts;
        if (posts.length === 0) {
            return;
        } else {
            return (
                <React.Fragment>
                    {posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </React.Fragment>
            );
        }
    }
}

export default PostList;
