/******************************************
Treehouse Techdegree:
FSJS project 7 - React Gallery App
Name: Brandon White
Date of Last Modification: 22/11/2019
******************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/more_styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/search/:params" component={App} />
            <Route component={App} />
        </Switch>
    </Router>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
