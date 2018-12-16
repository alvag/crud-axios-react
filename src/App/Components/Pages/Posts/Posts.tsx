import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Posts.css';
import { IPost } from '../../../Interfaces';

interface IProps {
    posts: IPost[];
    deletePost: (id: number) => void;
}

class Posts extends Component<IProps> {
    render() {
        return (
            <div className="col-012 col-md-8">
                <h2 className="text-center">Posts</h2>
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
            </div>
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
                                <Link to={`/editar/${post.id}`} className="btn btn-warning">Editar</Link>
                                <button className="btn btn-danger" onClick={() => this.props.deletePost(post.id!)}>Borrar</button>
                            </td>
                        </tr>
                    ))}
                </React.Fragment>
            );
        }
    }
}

export default Posts;
