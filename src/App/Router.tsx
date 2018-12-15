import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import { Header, Navigation } from './Components/Common';
import { IPost } from './Interfaces';
import { Constants } from './Constants';

interface IProps {
    posts: IPost[];
}

class Router extends Component<{}, IProps> {

    state = {
        posts: []
    };

    componentDidMount() {
        this.getPosts();
    }
    getPosts = () => {
        axios.get(Constants.API_URL)
            .then((response) => {
                this.setState({ posts: response.data });
            }).catch((error) => console.log(error));
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row justify-content-center">
                        <Header />
                        <Navigation />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;
