import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import BootButton from './javascripts/components/Button.jsx';

class App extends Component {
    
    render(){
        return (
            <div>
                まだpushしてない
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);