import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './PostList.css';
import { IPost } from '../../../Interfaces';

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
                        <tr key={index}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>
                                <Link to={`/post/${post.id}`} className="btn btn-primary">Ver</Link>
                                <button className="btn btn-danger">Borrar</button>
                            </td>
                        </tr>
                    ))}
                </React.Fragment>
            );
        }
    }
}

export default PostList;
