import React, { Component } from 'react';
import { Button, Col, Row, Grid, DropdownButton, MenuItem, Clearfix, ButtonToolbar, Jumbotron, Nav, NavItem } from 'react-bootstrap';
import { Card, CardImage, Heading, Text } from 'rebass';
import Radium from 'radium';
import color from 'color';

class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Card rounded width={256}>
                    <CardImage src="https://i.gyazo.com/9641aa5b538a4cd64fdcfb95d44b37d2.png" />
                    <Heading level={2} size={3}>
                        まだ作っていない．勘弁
                    </Heading>
                    <Text>
                        pushしてないんや
                    </Text>
                </Card>
            </div>
        )
    }
}

export default Radium(Home);