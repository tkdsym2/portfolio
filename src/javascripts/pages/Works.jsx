import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

import ProjectCard from '../components/ProjectCard';

export default class Works extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
