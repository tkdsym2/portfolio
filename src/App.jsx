import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';

import Works from './javascripts/pages/Works.jsx';
import Profile from './javascripts/pages/Profile.jsx';
import Publications from './javascripts/pages/Publications';
import Manager from './javascripts/pages/Manager';
import Fabnavi from './javascripts/contents/Fabnavi';
import Shogg from './javascripts/contents/Shogg';

const history = createHashHistory();

export default class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Manager>
                        <Switch>
                            <Route component={Works} path="/" exact />
                            <Route component={Profile} path="/profile" />
                            <Route component={Publications} path="/publications" />
                            <Route component={Fabnavi} path="/detail/fabnavi"/>
                            <Route component={Shogg} path="/detail/shogg"/>
                        </Switch>
                    </Manager>
                </Router>
            </div>
        )
    }
}