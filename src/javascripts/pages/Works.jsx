import React, { Component } from 'react';
import Debug from 'debug';
import { Helmet } from 'react-helmet';
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
                <Helmet>
                        <title>Kazuma Takada Works</title>
                        <meta property="og:title" content="Kazuma Takada Portfolio | Works" />
                        <meta property="og:type" content="article" />
                        <meta property="og:url" content="http://fmsuvm.github.io/#/works" />
                        <meta property="og:site_name" content="Kazuma Takada Portfolio" />
                        <meta property="og:description" content="Please visit my portfolio !" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:site" content="@fmsuvM" />
                        <meta name="twitter:creator" content="@fmsuvM" />
                        <meta name="twitter:domain" content="fmsuvM.github.io" />
                        <meta name="twitter:title" content="Kazuma Takada Profile" />
                        <meta name="twitter:description" content="Please visit my portfolio !" />
                        <meta name="twitter:image" content="https://i.gyazo.com/123efba36bfa12ae7f415b59c2dae32a.png" />
                </Helmet>
                <MediaQuery maxWidth={1049}>
                    <div className="work-list-middle">
                        <ProjectCard className="project-card" projectName="fabnavi" />
                        <ProjectCard className="project-card" projectName="shogg" />
                        <ProjectCard className="project-card" projectName="bookroof" />
                        <ProjectCard className="project-card" projectName="unpresence" />
                        <ProjectCard className="project-card" projectName="ghostcreator" />
                        <ProjectCard className="project-card" projectName="throughstudio" />
                        <ProjectCard className="project-card" projectName="flexibleinterface" />
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={1050}>
                    <div className="work-list">
                        <ProjectCard className="project-card" projectName="fabnavi" />
                        <ProjectCard className="project-card" projectName="shogg" />
                        <ProjectCard className="project-card" projectName="bookroof" />
                        <ProjectCard className="project-card" projectName="unpresence" />
                        <ProjectCard className="project-card" projectName="ghostcreator" />
                        <ProjectCard className="project-card" projectName="throughstudio" />
                        <ProjectCard className="project-card" projectName="flexibleinterface" />
                    </div>
                </MediaQuery>
            </div>
        )
    }
}
