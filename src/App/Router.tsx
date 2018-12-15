import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header, Navigation } from './Components/Common';

class Router extends Component {
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
