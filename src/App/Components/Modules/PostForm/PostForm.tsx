import React, { Component, FormEvent } from 'react';
import { IPost } from '../../../Interfaces';

interface IProps {
    sendData: (data: any) => Promise<boolean>;
    post: IPost;
}

class PostForm extends Component<IProps> {

    title = React.createRef<HTMLInputElement>();
    body = React.createRef<HTMLTextAreaElement>();
    post = this.props.post;

    sendData = (e: FormEvent) => {

        e.preventDefault();
        const data = {
            body: this.body.current!.value,
            title: this.title.current!.value
        };
        this.props.sendData(data)
            .then((response) => {
                if (!this.post.id) {
                    this.body.current!.value = '';
                    this.title.current!.value = '';
                }
            }).catch((error) => console.log(error));
    }

    render() {
        const title = this.post.id ? 'Actualizar Post' : 'Crear Nuevo Post';
        const buttonText = this.post.id ? 'Actualizar' : 'Crear';
        return (
            <form onSubmit={this.sendData}>
                <legend className="text-center">{title}</legend>
                <div className="form-group">
                    <label htmlFor="title">Título:</label>
                    <input defaultValue={this.post.title} ref={this.title} type="text" id="title" className="form-control" placeholder="Título" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="body">Contenido:</label>
                    <textarea defaultValue={this.post.body} ref={this.body} id="body" className="form-control" placeholder="Contenido" required />
                </div>
                <button type="submit" className="btn btn-primary">{buttonText}</button>
            </form>
        );
    }
}

export default PostForm;
