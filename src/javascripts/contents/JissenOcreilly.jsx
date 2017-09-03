import React, { Component } from 'react';
import Slider from 'react-slick';
import Debug from 'debug';
import MediaQuery from 'react-responsive';

const debug = Debug('ProjectDetail:jsx:');

export default class JissenOcreilly extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            abstraction: ''
        };
    }

    componentWillMount() {
        const projectName = this.props.match.path.split('/')[2];
        const data = require(`../../contents/${projectName}.json`);
        this.setState({
            title: data.project.title,
            abstraction: data.project.abstraction
        });
    }

    render() {
        const projectName = this.props.match.path.split('/')[2];
        const imgUrl1 = `./src/images/16_9/${projectName}/1.png`;

        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            pauseOnHover: true
        }

        return (
            <div>
                <MediaQuery maxWidth={1049}>
                    <div className="detail-page-middle">
                        <div className="project-header-middle">
                            <h4>{ this.state.title }</h4>
                            <p>{ this.state.abstraction }</p>
                        </div>
                        <div className="project-contents-middle">
                            <div className="project-images-middle">
                                <Slider {...settings}>
                                    <img src={ imgUrl1 }/>
                                </Slider>
                            </div>
                            <div className="project-description-middle">
                                <p>
                                    本文
                                </p>
                            </div>
                            <div className="movie">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/fq0-6UXIzjU" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="relations-middle">
                                <p><b>関連リンク</b></p>
                                <ul>
                                    <li><a href="" target="_blank"></a></li>
                                    <li><a href="" target="_blank"></a></li>
                                    <li><a href="" target="_blank"></a></li>
                                    <li><a href="" target="_blank"></a></li>
                                    <li><a href="" target="_blank"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={1050}>
                    <div className="detail-page">
                        <div className="project-header">
                            <h4>{ this.state.title }</h4>
                            <p>{ this.state.abstraction }</p>
                        </div>
                        <div className="project-contents">
                            <div className="project-images">
                                <Slider {...settings}>
                                    <img src={ imgUrl1 }/>
                                    <img src={ imgUrl2 }/>
                                    <img src={ imgUrl3 }/>
                                </Slider>
                            </div>
                            <div className="project-description">
                                <p>
                                    本文
                                </p>
                            </div>
                            <div className="movie">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/fq0-6UXIzjU" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="relations">
                                <p><b>関連リンク</b></p>
                                <ul>
                                    <li><a href="" target="_blank"></a></li>
                                    <li><a href="" target="_blank"></a></li>
                                    <li><a href="" target="_blank"></a></li>
                                    <li><a href="" target="_blank"></a></li>
                                    <li><a href="" target="_blank"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}