import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import BootButton from './components/Button.jsx';

class App extends Component {
    
    render(){
        return (
            <div>
                hello
                <BootButton />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);