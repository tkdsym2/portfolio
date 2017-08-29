import React, { Component } from 'react';
import Debug from 'debug';

import ProjectCard from '../components/ProjectCard';

const debug = Debug('Works:jsx:');

export default class Works extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // debug(fabnavi);
        return (
            <div className="work-list">
                <ProjectCard className="project-card" projectName="fabnavi" />
                <ProjectCard className="project-card" projectName="shogg" />
            </div>
        )
    }
}
