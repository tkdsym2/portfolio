import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Radium from 'radium';
import color from 'color';

import ProjectCard from '../components/ProjectCard';

class Works extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="work-list">
                <Row>
                    <Col><ProjectCard /></Col>
                    <Col><ProjectCard /></Col>
                    <Col><ProjectCard /></Col>
                    <Col><ProjectCard /></Col>
                    <Col><ProjectCard /></Col>
                </Row>
            </div>
        )
    }
}

export default Works;