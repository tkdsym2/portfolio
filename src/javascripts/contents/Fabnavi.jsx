import React, { Component } from 'react';
import Debug from 'debug';

const debug = Debug('ProjectDetail:jsx:');

export default class Favbnavi extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const projectName = this.props.match.path.split('/')[2];
        const imgUrl = `./src/images/16_9/${projectName}.png`;

        return (
            <div className="detail-page">
                <div className="project-header">
                    <h3>fabnavi in SFC</h3>
                    <h5>Support system to assemble physical objects using visual instructions</h5>
                </div>
                <div className="prooject-contents">
                    <img src={ imgUrl }/>
                    <div className="project-description">
                        <p>
                            fabnaviをSFCにて設置しました
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}