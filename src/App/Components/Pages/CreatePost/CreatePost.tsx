import React, { Component, FormEvent } from 'react';
import './CreatePost.css';
import { IPost } from '../../../Interfaces';

interface IProps {
    createPost: (post: IPost) => void;
}

class CreatePost extends Component<IProps> {

    title = React.createRef<HTMLInputElement>();
    content = React.createRef<HTMLTextAreaElement>();

    createPost = (e: FormEvent) => {
        e.preventDefault();
        const post: IPost = {
            body: this.content.current!.value,
            title: this.title.current!.value,
            userId: 1,
            id: 1
        };

        this.props.createPost(post);
    }

    render() {
        return (
            <form className="col-8" onSubmit={this.createPost}>
                <legend className="text-center">Crear Nuevo Post</legend>
                <div className="form-group">
                    <label htmlFor="title">Título:</label>
                    <input ref={this.title} type="text" id="title" className="form-control" placeholder="Título" />
                </div>

                <div className="form-group">
                    <label htmlFor="content">Contenido:</label>
                    <textarea ref={this.content} id="content" className="form-control" placeholder="Contenido" />
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        );
    }
}

export default CreatePost;
