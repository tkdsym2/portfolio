import React, { Component } from 'react';
import Slider from 'react-slick';
import Debug from 'debug';
import { Helmet } from 'react-helmet';
import MediaQuery from 'react-responsive';

const debug = Debug('ProjectDetail:jsx:');

export default class Favbnavi extends Component {
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
                                    SFCのメディアセンターに3月末から設置されているfabnaviの大幅アップデートをした．fabnaviのプロジェクタを支える台は，より安定させるためにアクリル板で再設計されている．また，上部のミスミアルミフレームに取り付けられているiPhoneの固定具も動かしやすいように再設計されている．この２つは公立はこだて未来大学の方による設計である．
                                </p>
                                <p>
                                    fabnaviのアプリケーションでは，機能の復旧やレイアウトの変更を行った．Player Modeやユーザが作ったプロジェクト閲覧機能，プロジェクトの編集機能などを実装．このフロントエンド開発は公立はこだて未来大学の方2人と，自分，そして外部のエンジニアの方1人で行なっている．GitHubのfabnavi-appリポジトリにて随時アップデート中．
                                </p>
                            </div>
                            <div className="movie-middle">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/fq0-6UXIzjU" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="relations-middle">
                                <p><b>関連リンク</b></p>
                                <ul>
                                    <li><a href="https://github.com/fabnavi" target="_blank">fabnavi - GitHub</a></li>
                                    <li><a href="http://fabnavi.tumblr.com/" target="_blank">fabnavi - Tumbler</a></li>
                                    <li><a href="http://mobiquitous.com/fabnavi-e.html" target="_blank">About fabnavi</a></li>
                                    <li><a href="https://www.fun.ac.jp/" target="_blank">公立はこだて未来大学</a></li>
                                    <li><a href="http://www.sfc.keio.ac.jp/" target="_blank">慶應義塾大学 湘南藤沢キャンパス</a></li>
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
                                    SFCのメディアセンターに3月末から設置されているfabnaviの大幅アップデートをした．fabnaviのプロジェクタを支える台は，より安定させるためにアクリル板で再設計されている．また，上部のミスミアルミフレームに取り付けられているiPhoneの固定具も動かしやすいように再設計されている．この２つは公立はこだて未来大学の方による設計である．
                                </p>
                                <p>
                                    fabnaviのアプリケーションでは，機能の復旧やレイアウトの変更を行った．Player Modeやユーザが作ったプロジェクト閲覧機能，プロジェクトの編集機能などを実装．このフロントエンド開発は公立はこだて未来大学の方2人と，自分，そして外部のエンジニアの方1人で行なっている．GitHubのfabnavi-appリポジトリにて随時アップデート中．
                                </p>
                            </div>
                            <div className="movie">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/fq0-6UXIzjU" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="relations">
                                <p><b>関連リンク</b></p>
                                <ul>
                                    <li><a href="https://github.com/fabnavi" target="_blank">fabnavi - GitHub</a></li>
                                    <li><a href="http://fabnavi.tumblr.com/" target="_blank">fabnavi - Tumbler</a></li>
                                    <li><a href="http://mobiquitous.com/fabnavi-e.html" target="_blank">About fabnavi</a></li>
                                    <li><a href="https://www.fun.ac.jp/" target="_blank">公立はこだて未来大学</a></li>
                                    <li><a href="http://www.sfc.keio.ac.jp/" target="_blank">慶應義塾大学 湘南藤沢キャンパス</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}