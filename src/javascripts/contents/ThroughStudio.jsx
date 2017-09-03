import React, { Component } from 'react';
import Slider from 'react-slick';
import Debug from 'debug';
import { Helmet } from 'react-helmet';
import MediaQuery from 'react-responsive';

const debug = Debug('ProjectDetail:jsx:');

export default class ThroughStudio extends Component {
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
                <Helmet>
                    <title>Kazuma Takada Works-Through Studio</title>
                    <meta property="og:title" content="Kazuma Takada Portfolio | Through Studio" />
                    <meta property="og:type" content="article" />
                    <meta property="og:url" content="http://fmsuvm.github.io/#/detail/throughstudio" />
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
                                日常生活において，ガラスやアクリルなどの光を透過する物質は様々な用途で使われる．例えば，外を見るための窓や鑑賞用の水槽などがある．透明度は製造段階で決まるため，ガラスやアクリル単体で後から透明度を変えることは出来ない．窓やレンズを通して見える物体や像を見えないようにするには，カーテンや蓋など光を透過しない素材で表面を覆う必要がある．しかし、表面を覆う際の制御はほとんどの場合で縦か横のどちらか一方向にしか行えないので遮光しても望まない結果になることがある。そこで，透明度を制御することで実現したインタラクティブなディスプレイThroughlyを提案する．透明度の制御には吸水性ポリマーを用いる．この物質は，水中では光を透過して，ガラスやアクリルのような振る舞いをするが，空気中にある場合は光を透過しても乱反射によって像が見えないようになる．
                            </p>
                            </div>
                            <div className="movie">
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
                                日常生活において，ガラスやアクリルなどの光を透過する物質は様々な用途で使われる．例えば，外を見るための窓や鑑賞用の水槽などがある．透明度は製造段階で決まるため，ガラスやアクリル単体で後から透明度を変えることは出来ない．窓やレンズを通して見える物体や像を見えないようにするには，カーテンや蓋など光を透過しない素材で表面を覆う必要がある．しかし、表面を覆う際の制御はほとんどの場合で縦か横のどちらか一方向にしか行えないので遮光しても望まない結果になることがある。そこで，透明度を制御することで実現したインタラクティブなディスプレイThroughlyを提案する．透明度の制御には吸水性ポリマーを用いる．この物質は，水中では光を透過して，ガラスやアクリルのような振る舞いをするが，空気中にある場合は光を透過しても乱反射によって像が見えないようになる．
                            </p>
                            </div>
                            <div className="movie">
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