import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header, Navigation } from './Components/Common';
import { Posts, Post, NotFound, CreatePost } from './Components/Pages';
import { IPost } from './Interfaces';
import { getPosts, deletePost } from './Services/PostService';

interface IAppState {
    posts: IPost[];
}

class Router extends Component<{}, IAppState> {

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
                                        <Posts
                                            posts={this.state.posts}
                                            deletePost={this.deletePost}
                                        />
                                    );
                                }}
                            />
                            <Route
                                exact
                                path="/post/:id"
                                render={(props) => {
                                    const postId = Number(props.match.params.id);
                                    const post = this.state.posts.find((item: IPost) => item.id === postId);
                                    if (post) {
                                        return (<Post post={post} />);
                                    } else {
                                        return (<NotFound />);
                                    }
                                }}
                            />

                            <Route
                                exact
                                path="/crear"
                                render={() => {
                                    return (
                                        <CreatePost createPost={this.createPost} />
                                    );
                                }}
                            />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }

    deletePost = async (id: number) => {
        if (await deletePost(id)) {
            const posts = this.state.posts.filter((post: IPost) => post.id !== id);
            this.setState({ posts });
        }
    }

    createPost = (post: IPost) => {
        console.log(post);
    }
}

export default Router;
