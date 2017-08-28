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
                    <h3>Shogg</h3>
                    <h5>講義:インタラクションデザインにて製作</h5>
                </div>
                <div className="prooject-contents">
                    <img src={ imgUrl }/>
                    <div className="project-description">
                        <p>
                            shogg
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}