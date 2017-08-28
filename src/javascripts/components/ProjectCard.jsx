import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    withRouter
} from 'react-router-dom';
import Debug from 'debug';

const debug = Debug('ProjectCard:jsx:');

// import '../../stylesheets/ProjectCard.scss';

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            title: '',
            abstraction: ''
        };
    }

    componentWillMount() {
        debug('props', this.props);
        const projectName = this.props.projectName;
        const data = require(`../../contents/${projectName}.json`);
        debug('data', data);
        this.setState({
            title: data.project.title,
            abstraction: data.project.abstraction
        });
    }

    handleClick() {
        this.props.history.push(`/detail/${this.props.projectName}`);
    }

    render() {
        const projectName = this.props.projectName;
        const imgUrl = `./src/images/4_3/${projectName}.png`;

        return (
            <div className="project-card" onClick={this.handleClick}>
                <div className="card-image">
                    <img src={ imgUrl } />
                </div>
                <div className="card-contents">
                    <div className="project-title">
                        <h5>{this.state.title}</h5>
                    </div>
                    <hr />
                    <div className="project-subtitle">
                        <p>
                            { this.state.abstraction }
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

ProjectCard.PropTypes = {
    projectName: PropTypes.string,
}

export default withRouter(ProjectCard);