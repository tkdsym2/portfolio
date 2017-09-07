import React, { Component } from 'react';
import Slider from 'react-slick';
import Debug from 'debug';
import { Helmet } from 'react-helmet';
import MediaQuery from 'react-responsive';

const debug = Debug('ProjectDetail:jsx:');

export default class BookRoof extends Component {
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
                                    Book Roofは本を伏せて置く専用のブックスタンドである．途中まで読んでいたページは伏せて置くことで保持され，Book Roofの上に置くことで「屋根」となり，見た目を損なわない．
                                    また，Book Roofは読書灯の役割もある．読書を中断するとライトは消え，読書を再開すると周囲の暗さに応じてライトが点灯する．「本を伏せて置く」という無意識の行為に着目している．
                                </p>
                                <p>
                                    Book Roofはレーザーカッターで切り出されたアクリル板で作られている．レーザーカッターを使うことで，Book Roofは様々な本の大きさ（文庫本，新書など）に対応するブックスタンドになる．また，一部が壊れても全て買い直す必要はなく，壊れた部分のみをレーザーカッターで切り出し，再度組み立てればいい設計となっている．
                                    学部3年次の講義: インタラクションデザインでの課題制作物．
                                </p>
                            </div>
                            <div className="movie-middle">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/QmCKWIE7J-o" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="relations-middle">
                                {/* <p><b>関連リンク</b></p> */}
                                    {/* <ul>
                                        <li><a href="#" target="_blank"></a></li>
                                        <li><a href="#" target="_blank"></a></li>
                                        <li><a href="#" target="_blank"></a></li>
                                        <li><a href="#" target="_blank"></a></li>
                                        <li><a href="#" target="_blank"></a></li>
                                    </ul> */}
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
                                    Book Roofは本を伏せて置く専用のブックスタンドである．途中まで読んでいたページは伏せて置くことで保持され，Book Roofの上に置くことで「屋根」となり，見た目を損なわない．
                                    また，Book Roofは読書灯の役割もある．読書を中断するとライトは消え，読書を再開すると周囲の暗さに応じてライトが点灯する．「本を伏せて置く」という無意識の行為に着目している．
                                </p>
                                <p>
                                    Book Roofはレーザーカッターで切り出されたアクリル板で作られている．レーザーカッターを使うことで，Book Roofは様々な本の大きさ（文庫本，新書など）に対応するブックスタンドになる．また，一部が壊れても全て買い直す必要はなく，壊れた部分のみをレーザーカッターで切り出し，再度組み立てればいい設計となっている．
                                    学部3年次の講義: インタラクションデザインでの課題制作物．
                                </p>
                            </div>
                            <div className="movie">
                                <iframe width="640" height="360" src="https://www.youtube.com/embed/QmCKWIE7J-o" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="relations">
                                {/* <p><b>関連リンク</b></p> */}
                                {/* <ul>
                                    <li><a href="" target="_blank"></a></li>
                                    <li><a href="" target="_blank"></a></li>
                                    <li><a href="" target="_blank"></a></li>
                                    <li><a href="" target="_blank"></a></li>
                                    <li><a href="" target="_blank"></a></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}