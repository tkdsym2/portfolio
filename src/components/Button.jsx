import React, { Component } from 'react';
import { Button, Col, Row, Grid, DropdownButton, MenuItem, Clearfix, ButtonToolbar, Jumbotron, Nav, NavItem } from 'react-bootstrap';
import Radium from 'radium';
import color from 'color';

const handleSelect = (selectedKey) => {
    alert('selected ' + selectedKey);
}

class BootButton extends Component {
    constructor(props){
        super(props);
    };

    componentDidMount () {
        console.log('componentDidMount');
    }

    render(){
        return (
            <button
            style={[
                styles.base,
            ]}></button>
        )
    }
}

const styles = {
    base: {
        color: '#fff',

        // Adding interactive state couldn't be easier! Add a special key to your
        // style object (:hover, :focus, :active, or @media) with the additional rules.
        ':hover': {
            background: color('#0074d9').lighten(0.2).hexString()
        }
    }
}

export default Radium(BootButton);