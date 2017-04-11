import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './javascripts/pages/Home.jsx';

class App extends Component {
    
    render(){
        return (
            <div>
                <Home />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);