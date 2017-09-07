import React, { Component } from 'react';
import Slider from 'react-slick';
import Debug from 'debug';
import MediaQuery from 'react-responsive';

const debug = Debug('ProjectDetail:jsx:');

export default class JitsuyouOcreily extends Component {
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
                                    スマートフォンのアプリケーションは，AndroidではJava・Kotlin，iOSではObjective-C・Swiftとそれぞれ別言語で開発するものであった．しかし，Xamarin（C#）や今回紹介するReact Native（JavaScript・JSX）などのクロスプラットフォームでの開発が近年流行り始めた．
                                    著者は研究でAndroidを使うため，Javaと論文を泣きながら書いていた．そんな中，「研究のシステムをReact Nativeに移植するぞ！」という謎の気持ちが湧き上がってしまった．React Naticeは未だに日本語の資料が少なく，ブログ記事もさほどない．そこで今回は移植途中でハマった部分や，使用した便利なライブラリを紹介する．
                                </p>
                            </div>
                            <div className="movie">
                            </div>
                            <div className="relations-middle">
                                <p><b>関連リンク</b></p>
                                <ul>
                                    <li><a href="https://ocreilly.meiji-ncc.tech/C91/" target="_blank"> 実用 お蔵入り</a></li>
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
                                    スマートフォンのアプリケーションは，AndroidではJava・Kotlin，iOSではObjective-C・Swiftとそれぞれ別言語で開発するものであった．しかし，Xamarin（C#）や今回紹介するReact Native（JavaScript・JSX）などのクロスプラットフォームでの開発が近年流行り始めた．
                                    著者は研究でAndroidを使うため，Javaと論文を泣きながら書いていた．そんな中，「研究のシステムをReact Nativeに移植するぞ！」という謎の気持ちが湧き上がってしまった．React Naticeは未だに日本語の資料が少なく，ブログ記事もさほどない．そこで今回は移植途中でハマった部分や，使用した便利なライブラリを紹介する．
                                </p>
                            </div>
                            <div className="movie">
                            </div>
                            <div className="relations">
                                <p><b>関連リンク</b></p>
                                <ul>
                                    <li><a href="https://ocreilly.meiji-ncc.tech/C91/" target="_blank"> 実用 お蔵入り</a></li>
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