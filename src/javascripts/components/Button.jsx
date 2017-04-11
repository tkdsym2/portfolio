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
    }

    componentDidMount () {
        console.log('componentDidMount');
    }

    render(){
        return (
            <button
            style={[
                styles.base,
            ]}> yeah </button>
        )
    }
}

const styles = {
    base: {
        color: '#fff',
        background: '#0074d9'
        }
}

export default Radium(BootButton);