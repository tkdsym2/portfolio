import React, { Component } from 'react';
import Slider from 'react-slick';
import Debug from 'debug';
import MediaQuery from 'react-responsive';

const debug = Debug('ProjectDetail:jsx:');

export default class ShoukaiOcreilly extends Component {
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
                                    モバイルアプリケーションのクロスプラットフォーム開発方法はいくつかあるが，著者は大きく2つあると考えている．それは，Xamarinでの開発とReact Nativeでの開発である．前者はMicrosoftを中心に頻繁に活動が行われているようだ．しかし，未だにXamarinで作られている有名なアプリはない気がする．一方，React NativeはFacebookやInstagramといったようなアプリに使われている（Nintendo Switch OnlineがXamarin製らしい）．また，Reactを開発したことがあれば，書き方やデータの扱い方はReact Nativeでも同じなので比較的開発しやすい環境だ．まとめると，著者は圧倒的にReact Nativeを推している．
                                    さて，2017年3月13日 〜 3月14日にかけて，アメリカのカルフォルニア州にあるサンタクララにてReact Conference 2017（以下React Conf）が開催された．著者はお金も時間もないので残念ながら現地には行けず，日本でLive Streamingを見ていた．React ConfではReactとReact Nativeに関する新しい情報が満載だった．今回はその中で著者がもっとも注目した新しいCLI，Create React Native App について，従来のCLIと比較しながら紹介する．
                                </p>
                            </div>
                            <div className="movie">
                            </div>
                            <div className="relations-middle">
                                <p><b>関連リンク</b></p>
                                <ul>
                                    <li><a href="https://ocreilly.meiji-ncc.tech/TBF02/" target="_blank"> 詳解 お蔵入り</a></li>
                                    <li><a href="https://facebook.github.io/react-native/" target="_blank">React Native</a></li>
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
                                    モバイルアプリケーションのクロスプラットフォーム開発方法はいくつかあるが，著者は大きく2つあると考えている．それは，Xamarinでの開発とReact Nativeでの開発である．前者はMicrosoftを中心に頻繁に活動が行われているようだ．しかし，未だにXamarinで作られている有名なアプリはない気がする．一方，React NativeはFacebookやInstagramといったようなアプリに使われている（Nintendo Switch OnlineがXamarin製らしい）．また，Reactを開発したことがあれば，書き方やデータの扱い方はReact Nativeでも同じなので比較的開発しやすい環境だ．まとめると，著者は圧倒的にReact Nativeを推している．
                                    さて，2017年3月13日 〜 3月14日にかけて，アメリカのカルフォルニア州にあるサンタクララにてReact Conference 2017（以下React Conf）が開催された．著者はお金も時間もないので残念ながら現地には行けず，日本でLive Streamingを見ていた．React ConfではReactとReact Nativeに関する新しい情報が満載だった．今回はその中で著者がもっとも注目した新しいCLI，Create React Native App について，従来のCLIと比較しながら紹介する．
                                </p>
                            </div>
                            <div className="movie">
                            </div>
                            <div className="relations">
                                <p><b>関連リンク</b></p>
                                <ul>
                                    <li><a href="https://ocreilly.meiji-ncc.tech/TBF02/" target="_blank"> 詳解 お蔵入り</a></li>
                                    <li><a href="https://facebook.github.io/react-native/" target="_blank">React Native</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}