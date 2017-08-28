import React, { Component } from 'react';
import Debug from 'debug';

const debug = Debug('ProjectDetail:jsx:');

/*
    * 各プロジェクトのDetailのtemplate
    * 追加要素があれば，ProjectDetail.scssか新しくfileをつくってclass名が混ざらないように管理
    * ProjectCardのため，jsonファイルも作るのを忘れない
*/

class ProjectDetailTemplate extends Component {
    constructor(props) {
        super(props);
        debug(props);
    }

    componentWillMount() {
        const projectName = this.props.match.params.projectName;
        const data = require(`../../contents/${projectName}.json`);
        debug('json', data);
        this.setState({
            title: data.project.title,
            subtitle: data.project.subTitle,
            description: data.project.description
        });
    }

    render() {
        const projectName = this.props.match.params.projectName;
        const imgUrl = `./src/images/16_9/${projectName}.png`;

        return (
            <div className="detail-page">
                <div className="project-header">
                    <h3>{ this.state.title }</h3>
                    <h5>{ this.state.subtitle }</h5>
                </div>
                <div className="prooject-contents">
                    <img src={ imgUrl }/>
                    <div className="project-description">
                        <p>
                            { this.state.description }
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}