import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header, Navigation } from './Components/Common';
import { Posts, Post, NotFound, CreatePost, EditPost } from './Components/Pages';
import { IPost } from './Interfaces';
import { getPosts, deletePost, createPost, updatePost } from './Services/PostService';

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
                                        <CreatePost createUpdatePost={this.createUpdatePost} />
                                    );
                                }}
                            />
                            <Route
                                exact
                                path="/editar/:id"
                                render={(props) => {
                                    const postId = Number(props.match.params.id);
                                    const post = this.state.posts.find((item: IPost) => item.id === postId);
                                    if (post) {
                                        return (
                                            <EditPost post={post} postId={postId} createUpdatePost={this.createUpdatePost} />
                                        );
                                    } else {
                                        return null;
                                    }

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

    createUpdatePost = async (post: IPost): Promise<boolean> => {

        const postId = post.id ? await updatePost(post) : await createPost(post);

        return new Promise<boolean>((resolve, reject) => {
            if (postId) {
                resolve(true);
                const posts = [...this.state.posts] as IPost[];

                const index = posts.findIndex((item) => item.id === postId);
                if (index < 0) {
                    posts.unshift({ ...post, id: postId });
                } else {
                    posts[index] = post;
                }

                this.setState({ posts });

                // this.setState((prevState) => ({
                //     posts: [{ ...post, id: response }, ...prevState.posts]
                // }));

            } else {
                reject(false);
            }
        });

    }
}

export default Router;
