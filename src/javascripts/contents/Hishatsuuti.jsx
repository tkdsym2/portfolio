import React, { Component } from 'react';
import Slider from 'react-slick';
import Debug from 'debug';
import MediaQuery from 'react-responsive';

const debug = Debug('ProjectDetail:jsx:');

export default class Hishatsuuti extends Component {
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
                                </Slider>
                            </div>
                            <div className="project-description-middle">
                                <p>
                                    写真は撮る人−撮られる人(物)の関係で成り立っている．写真を撮られると，自分が写った写真は，撮影した人の所有するカメラの中に保存される．
                                    そのため，被写体となった人は自分が写っている写真であるのにも関わらず，撮影者からその写真を提供してもらわない限り，その写真を持つことはできない．
                                    つまり，写真に写っているのは自分だが，持っているのは他人であるという所有と肖像の帰属の矛盾が生じる．
                                    そこで本研究では，写真を撮影したら，写った人に自動的に撮影イベントを通知／写真を共有するシステムSharetterを提案する．
                                    Sharetterでは顔画像認識とBluetoothの電波強度による距離情報を組み合わせ，被写体の写り込んでいる可能性を算出し，それを被写値として定義する．
                                    その被写値に基づき通知し，写真の共有を行う．
                                    <br />
                                    WISS2016の3日目にてデモ発表．
                                </p>
                            </div>
                            
                            <div className="relations-middle">
                                <p><b>関連リンク</b></p>
                                <ul>
                                    <li><a href="https://www.wiss.org/WISS2016/Demo.html" target="_blank">WISS2016</a></li>
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
                                    写真は撮る人−撮られる人(物)の関係で成り立っている．写真を撮られると，自分が写った写真は，撮影した人の所有するカメラの中に保存される．
                                    そのため，被写体となった人は自分が写っている写真であるのにも関わらず，撮影者からその写真を提供してもらわない限り，その写真を持つことはできない．
                                    つまり，写真に写っているのは自分だが，持っているのは他人であるという所有と肖像の帰属の矛盾が生じる．
                                    そこで本研究では，写真を撮影したら，写った人に自動的に撮影イベントを通知／写真を共有するシステムSharetterを提案する．
                                    Sharetterでは顔画像認識とBluetoothの電波強度による距離情報を組み合わせ，被写体の写り込んでいる可能性を算出し，それを被写値として定義する．
                                    その被写値に基づき通知し，写真の共有を行う．
                                    <br />
                                    WISS2016の3日目にてデモ発表．
                                </p>
                            </div>
                            
                            <div className="relations">
                                <p><b>関連リンク</b></p>
                                <ul>
                                <li><a href="https://www.wiss.org/WISS2016/Demo.html" target="_blank">WISS2016</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}