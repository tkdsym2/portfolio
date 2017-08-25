import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';

const debug = Debug('ProjectCard:jsx:');

import '../../stylesheets/ProjectCard.scss';

export default class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // クリックして，渡されたpropsのdetail pageに飛ぶ
        console.log('hogehoge');
    }

    render() {
        return (
            <div className="project-card" onClick={this.handleClick}>
                <div className="card-image">
                    <img src="./src/images/fabnavi_.png" />
                </div>
                <div className="card-contents">
                    <div className="project-title">
                        <h5>Fabnavi in SFC</h5>
                    </div>
                    <div className="project-subtitle">
                        <p>
                            Support system to assemble physical objects using visual instructions
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

ProjectCard.PropTypes = {
    img: PropTypes.string,
    abst: PropTypes.string
}