import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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