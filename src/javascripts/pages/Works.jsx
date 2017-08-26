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
                {/* コンテンツは以下に追記して行く */}
                {/* <div className="work-contents"> */}
                    <ProjectCard className="project-card" projectName="fabnavi" />
                    {/* <ProjectCard className="project-card" projectName="fabspace"/>
                    <ProjectCard className="project-card"/>
                    <ProjectCard className="project-card"/>
                    <ProjectCard className="project-card"/>
                    <ProjectCard className="project-card"/>
                    <ProjectCard className="project-card"/> */}
                {/* </div> */}
            </div>
        )
    }
}
