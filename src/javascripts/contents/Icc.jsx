import React, { Component } from 'react';
import Slider from 'react-slick';
import Debug from 'debug';
import MediaQuery from 'react-responsive';

const debug = Debug('ProjectDetail:jsx:');

export default class Icc extends Component {
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
        const imgUrl2 = `./src/images/16_9/${projectName}/2.png`;
        const imgUrl3 = `./src/images/16_9/${projectName}/3.png`;
        const imgUrl4 = `./src/images/16_9/${projectName}/4.png`;

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
                                    <img src={ imgUrl2 }/>
                                    <img src={ imgUrl3 }/>
                                    <img src={ imgUrl4 }/>
                                </Slider>
                            </div>
                            <div className="project-description-middle">
                                <p>
                                    このシステムは撮影者だけではなく，写真に写っている人もその写真を持つことができるシステムである．撮影者が写真を撮ると，被写値（ある被写体が写り込んでいる可能性）を算出する．被写値に基づいて被写体に撮影されたことを通知し，その写真を共有する．写真に写っているのは自分であるのに，持っているのは撮影者（他人）であるという写真の帰属の矛盾を解決するためのシステム．
                                </p>
                                <p>
                                    ICCで展示していた被写値のモデルは，アクリル板に文字や図を彫刻し，アクリル絵具で着色をした．
                                </p>
                            </div>
                            <div className="movie">
                            </div>
                            <div className="relations-middle">
                                <p><b>関連リンク</b></p>
                                <ul>
                                    <li><a href="http://www.ntticc.or.jp/ja/archive/works/snappednotification/" target="_blank">ICC: Snapped Notification</a></li>
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
                                    このシステムは撮影者だけではなく，写真に写っている人もその写真を持つことができるシステムである．撮影者が写真を撮ると，被写値（ある被写体が写り込んでいる可能性）を算出する．被写値に基づいて被写体に撮影されたことを通知し，その写真を共有する．写真に写っているのは自分であるのに，持っているのは撮影者（他人）であるという写真の帰属の矛盾を解決するためのシステム．
                                </p>
                                <p>
                                    ICCで展示していた被写値のモデルは，アクリル板に文字や図を彫刻し，アクリル絵具で着色をした．
                                </p>
                            </div>
                            <div className="movie">
                            </div>
                            <div className="relations">
                                <p><b>関連リンク</b></p>
                                <ul>
                                    <li><a href="http://www.ntticc.or.jp/ja/archive/works/snappednotification/" target="_blank">ICC: Snapped Notification</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}