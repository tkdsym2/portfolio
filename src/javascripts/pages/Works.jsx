import React, { Component } from 'react';
import Debug from 'debug';
import MediaQuery from 'react-responsive';

import ProjectCard from '../components/ProjectCard';

const debug = Debug('Works:jsx:');

export default class Works extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // debug(fabnavi);
        return (
            <div>
                <MediaQuery maxWidth={1049}>
                    <div className="work-list-middle">
                        <ProjectCard className="project-card" projectName="fabnavi" />
                        <ProjectCard className="project-card" projectName="shogg" />
                        <ProjectCard className="project-card" projectName="bookroof" />
                        <ProjectCard className="project-card" projectName="unpresence" />
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={1050}>
                    <div className="work-list">
                        <ProjectCard className="project-card" projectName="fabnavi" />
                        <ProjectCard className="project-card" projectName="shogg" />
                        <ProjectCard className="project-card" projectName="bookroof" />
                        <ProjectCard className="project-card" projectName="unpresence" />
                    </div>
                </MediaQuery>
            </div>
        )
    }
}
