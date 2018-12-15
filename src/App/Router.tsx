import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header, Navigation } from './Components/Common';
import { Posts } from './Components/Pages';
import { IPost } from './Interfaces';
import { getPosts } from './Services/PostService';

interface IProps {
    posts: IPost[];
}

class Router extends Component<{}, IProps> {

    state = {
        posts: []
    };

    async componentDidMount() {
        this.setState({ posts: await getPosts() });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row justify-content-center">
                        <Header />
                        <Navigation />
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => {
                                    return (
                                        <Posts posts={this.state.posts} />
                                    )
                                }}
                            />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;
