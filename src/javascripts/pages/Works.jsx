import React, { Component } from 'react';

import ProjectCard from '../components/ProjectCard';

export default class Works extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="work-list">
                {/* コンテンツは以下に追記して行く */}
                <ProjectCard />
                <ProjectCard />
            </div>
        )
    }
}
