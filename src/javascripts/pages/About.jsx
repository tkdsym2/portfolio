import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class About extends Component {
    constructor(props){
        super();
        console.log('hello');
        console.log(props);
    }
    
    render(){
        return (
            <div>
                Hello About Page
            </div>
        )
    }
}

export default About;