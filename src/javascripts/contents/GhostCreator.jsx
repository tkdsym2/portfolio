import React, { Component } from 'react';
import Slider from 'react-slick';
import Debug from 'debug';
import { Helmet } from 'react-helmet';
import MediaQuery from 'react-responsive';

const debug = Debug('ProjectDetail:jsx:');

export default class FlexibleInterface extends Component {
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
                                        折り紙は，折る対象が複雑であるほど折る動作や開く動作を繰り返す．しかし，テキストの多い説明書では，自分がどの工程にいるかわからなくなる．そこで，HoloLensを装着し，他者の主観視点での折る動作を再生する．その再生される動作に自分の手を重ねて，同じ動きで紙を折る．
                                    </p>
                                    <p>
                                        Ghost CreatorではHoloLensとMyoを使う．HoloLensは手元の録画と再生時に使われる．Myoは紙を折っているユーザが現在どの工程にいるか（折っているか）を計測するために使われる．
                                    </p>
                                </div>
                                <div className="movie">
                                </div>
                                <div className="relations-middle">
                                    <p><b>関連リンク</b></p>
                                    <ul>
                                        <li><a href="https://www.microsoft.com/ja-jp/store/d/microsoft-hololens-development-edition/8xf18pqz17ts" target="_blank">Microsoft HoloLens</a></li>
                                        <li><a href="https://jp.myo.com/" target="_blank">Myo</a></li>
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
                                </Slider>
                            </div>
                            <div className="project-description">
                                <p>
                                    折り紙は，折る対象が複雑であるほど折る動作や開く動作を繰り返す．しかし，テキストの多い説明書では，自分がどの工程にいるかわからなくなる．そこで，HoloLensを装着し，他者の主観視点での折る動作を再生する．その再生される動作に自分の手を重ねて，同じ動きで紙を折る．
                                </p>
                                <p>
                                    Ghost CreatorではHoloLensとMyoを使う．HoloLensは手元の録画と再生時に使われる．Myoは紙を折っているユーザが現在どの工程にいるか（折っているか）を計測するために使われる．
                                </p>
                            </div>
                            <div className="movie">
                            </div>
                            <div className="relations">
                                <p><b>関連リンク</b></p>
                                <ul>
                                    <li><a href="https://www.microsoft.com/ja-jp/store/d/microsoft-hololens-development-edition/8xf18pqz17ts" target="_blank">Microsoft HoloLens</a></li>
                                    <li><a href="https://jp.myo.com/" target="_blank">Myo</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}