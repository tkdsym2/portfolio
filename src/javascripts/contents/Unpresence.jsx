import React, { Component } from 'react';
import Slider from 'react-slick';
import Debug from 'debug';
import { Helmet } from 'react-helmet';
import MediaQuery from 'react-responsive';

const debug = Debug('ProjectDetail:jsx:');

export default class Unpresence extends Component {
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
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            pauseOnHover: true
        }

        return (
            <div>
                <Helmet>
                    <title>Kazuma Takada Works-(Un) Presence</title>
                    <meta property="og:title" content="Kazuma Takada Portfolio | (Un) Presence" />
                    <meta property="og:type" content="article" />
                    <meta property="og:url" content="http://fmsuvm.github.io/#/detail/unpresence" />
                    <meta property="og:site_name" content="Kazuma Takada Portfolio" />
                    <meta property="og:description" content="Please visit my portfolio !" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@fmsuvM" />
                    <meta name="twitter:creator" content="@fmsuvM" />
                    <meta name="twitter:domain" content="fmsuvM.github.io" />
                    <meta name="twitter:title" content="Kazuma Takada Profile" />
                    <meta name="twitter:description" content="Please visit my portfolio !" />
                    <meta name="twitter:image" content="https://i.gyazo.com/123efba36bfa12ae7f415b59c2dae32a.png" />
                </Helmet>
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
                                    この作品では「現実で透明感を利用すること」を目的としている．水の中で透明感を出すために，吸水ポリマー（消臭ビーズ）を使うことにした．吸水ポリマーが水を吸うと，その時間が長いほどサイズが大きくなる．時間差で大きさが変わることを利用して，様々な時間で水を吸わせてランダムなサイズの吸水ポリマーを生成した．吸水ポリマーは水とほぼ同じ屈折率になるので，水の中ではほぼ見えなくなる．しかし，光の反射で輪郭が光ったりして少し見えるが，これは視聴者に何かあると思わせる表現でもある．
                                    この微妙な塩梅の透明感とランダムなサイズを利用して，透明になった瞬間に見えなかったモノが見えるようになり，見えないモノにぶつかってランダムな方向に進んでいく，という表現をしている．
                                </p>
                            </div>
                            <div className="movie">
                            <iframe width="640" height="360" src="https://www.youtube.com/embed/DZiIGaBSnP4" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="relations-middle">
                                <p><b>関連リンク</b></p>
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
                                    この作品では「現実で透明感を利用すること」を目的としている．水の中で透明感を出すために，吸水ポリマー（消臭ビーズ）を使うことにした．吸水ポリマーが水を吸うと，その時間が長いほどサイズが大きくなる．時間差で大きさが変わることを利用して，様々な時間で水を吸わせてランダムなサイズの吸水ポリマーを生成した．吸水ポリマーは水とほぼ同じ屈折率になるので，水の中ではほぼ見えなくなる．しかし，光の反射で輪郭が光ったりして少し見えるが，これは視聴者に何かあると思わせる表現でもある．
                                    この微妙な塩梅の透明感とランダムなサイズを利用して，透明になった瞬間に見えなかったモノが見えるようになり，見えないモノにぶつかってランダムな方向に進んでいく，という表現をしている．
                                </p>
                            </div>
                            <div className="movie">
                            <iframe width="640" height="360" src="https://www.youtube.com/embed/DZiIGaBSnP4" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="relations">
                                <p><b>関連リンク</b></p>
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