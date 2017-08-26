import React, { Component } from 'react';
import Radium from 'radium';
import {
    HashRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';

import Works from './javascripts/pages/Works.jsx';
import Profile from './javascripts/pages/Profile.jsx';
import Research from './javascripts/pages/Research';
import Manager from './javascripts/pages/Manager';
import ProjectDetail from './javascripts/components/ProjectDetail';

const history = createHashHistory();

class App extends Component {
    render() {
        return (
            <div>
                <style jsx>{`
                    body {
                        margin: 0;
                    }
                    hr{
                        width: 100%;
                        border: 0;
                        border-bottom: 1px dashed #ccc;
                        background: #fff;
                    }
                `}</style>
                <Router history={history}>
                    <Manager>
                        <Switch>
                            <Route component={Works} path="/" exact />
                            <Route component={Profile} path="/profile" />
                            <Route component={Research} path="/research" />
                            <Route component={ProjectDetail} path="/detail/:projectName"/>
                        </Switch>
                    </Manager>
                </Router>
            </div>
        )
    }
}

export default Radium(App);

const styles = {
    base: {
        backgroundColor: '#fff',
        height: '120px',
        outline: 'none',
        // boxShadow: '0 1px 0 rgba(0,0,0,0.2)'
    },
    title: {
        color: '#333',
        fontSize: 40,
        fontFamily: 'Capella Bold',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '150px'
    },
    navicontent: {
        color: '#333',
        fontSize: 20,
        fontFamily: 'Capella Bold',
        letterSpacing: '0.1em',
        marginTop: '40px',
        marginLeft: '30px',
        ':hover': {
            // borderBottom: '1px solid #ec652b'
        }
    }
};