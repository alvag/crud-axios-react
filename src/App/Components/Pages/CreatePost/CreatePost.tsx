import React, { Component } from 'react';
import './CreatePost.css';

class CreatePost extends Component {
    render() {
        return (
            <form className="col-8">
                <legend className="text-center">Crear Nuevo Post</legend>
                <div className="form-group">
                    <label htmlFor="title">Título:</label>
                    <input type="text" id="title" className="form-control" placeholder="Título" />
                </div>

                <div className="form-group">
                    <label htmlFor="body">Contenido:</label>
                    <textarea id="body" className="form-control" placeholder="Contenido" />
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        );
    }
}

export default CreatePost;
