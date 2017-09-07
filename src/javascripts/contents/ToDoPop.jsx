import React, { Component } from 'react';
import Slider from 'react-slick';
import Debug from 'debug';
import MediaQuery from 'react-responsive';

const debug = Debug('ProjectDetail:jsx:');

/*
    * 各プロジェクトのDetailのtemplate
    * 追加要素があれば，ProjectDetail.scssか新しくfileをつくってclass名が混ざらないように管理
    * ProjectCardのため，jsonファイルも作るのを忘れない
*/

export default class ProjectDetailTemplate extends Component {
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
                                    予定を管理するために，手帳やスケジュール管理システムを利用する人は多い.しかし， それらは常に表示されているものではないため，定期的に予定を確認する必要があり，かつ期限が近づいていることを自分で把握する必要がある．
                                    <br />
                                    また，スマートフォンやパソコンでスケジュール管理アプリやウェブサービスを利用する場合，リマインダー機能のように，期限が近くなると自分が指定した時間に通知を受け取るように設定できる．しかし，指定した時間に通知に気付ける状態でなければ意味がない．また，数分前・数時間前などに気がついても間に合わないような予定であった場合， 通知を設定する時間がわからないことが多くある.では，常に予定が視界に入ってくるようなシステム・サービスがあればいいのではないかと考えた.
                                    <br />
                                    そこで，私たちは ToDoPoP:予定の優先度を視覚的に表示するインテリア用スケジュール管理アプリケーションを提案する．ToDoPoPは，スケジュールを図形の大きさで表示することで，ユーザにイベントが近づいていることを知らせるインテリア用アプリケーションである．このシステムはiPadやその他タブレットPCに常に表示させておき，インテリアとして部屋に設置するのを想定している．学部2年次の講義: コンテンツメディアプログラミング実習IIにて制作．プレゼンテーション最優秀賞．
                                </p>
                            </div>
                            <div className="movie">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ypdfsInxk-s" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="relations-middle">
                                <p><b>関連リンク</b></p>
                                <ul>
                                    <li><a href="http://www.persistent.org/memorium.html" target="_blank">Memorium: 眺めるインタフェースの提案とその試作</a></li>
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
                                    予定を管理するために，手帳やスケジュール管理システムを利用する人は多い.しかし， それらは常に表示されているものではないため，定期的に予定を確認する必要があり，かつ期限が近づいていることを自分で把握する必要がある．
                                    <br />
                                    また，スマートフォンやパソコンでスケジュール管理アプリやウェブサービスを利用する場合，リマインダー機能のように，期限が近くなると自分が指定した時間に通知を受け取るように設定できる．しかし，指定した時間に通知に気付ける状態でなければ意味がない．また，数分前・数時間前などに気がついても間に合わないような予定であった場合， 通知を設定する時間がわからないことが多くある.では，常に予定が視界に入ってくるようなシステム・サービスがあればいいのではないかと考えた.
                                    <br />
                                    そこで，私たちは ToDoPoP:予定の優先度を視覚的に表示するインテリア用スケジュール管理アプリケーションを提案する．ToDoPoPは，スケジュールを図形の大きさで表示することで，ユーザにイベントが近づいていることを知らせるインテリア用アプリケーションである．このシステムはiPadやその他タブレットPCに常に表示させておき，インテリアとして部屋に設置するのを想定している．学部2年次の講義: コンテンツメディアプログラミング実習IIにて制作．プレゼンテーション最優秀賞．
                                </p>
                            </div>
                            <div className="movie">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ypdfsInxk-s" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="relations">
                                <p><b>関連リンク</b></p>
                                <ul>
                                    <li><a href="http://www.persistent.org/memorium.html" target="_blank">Memorium: 眺めるインタフェースの提案とその試作</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}