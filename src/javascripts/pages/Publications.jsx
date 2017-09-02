import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import MediaQuery from 'react-responsive';

export default class Publications extends Component {
    render() {
        return (
            <div>
                <Helmet>
                        <title>Kazuma Takada Profile</title>
                        <meta property="og:title" content="Kazuma Takada Portfolio | Publications" />
                        <meta property="og:type" content="article" />
                        <meta property="og:url" content="http://fmsuvm.github.io/#/publications" />
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
                    <div className="research-page-middle">
                        <h3>Publications</h3>
                        <div className="bachelor-container-middle">
                            <div className="bachelor">
                                <h3 className="title">Bachelor 4</h3>
                                <p>
                                    Coming Soon......
                                </p>
                            </div>
                            <div className="bachelor">
                                <h3 className="title">Bachelor 3</h3>
                                <p>
                                    Coming Soon......
                                </p>
                            </div>
                            <div className="bachelor">
                                <h3 className="title">Bachelor 2</h3>
                                <div className="contents">
                                    <p>
                                        髙田一真, 渡邊恵太. 被写通知：アドホックネットワークを利用した被写検知による写真共有. 第24回インタラクティブシステムとソフトウェアに関するワークショップ(WISS2016), 2016.
                                        <a href="http://www.wiss.org/WISS2016Proceedings/demo/3-A18.pdf" target="_blank"> {'<PDF>'} </a>
                                        <a href="https://www.wiss.org/WISS2016/Demo.html" target="_blank"> {'<Web>'} </a>
                                    </p>
                                </div>
                                <div className="contents">
                                    <p>
                                        髙田一真, 渡邊恵太. Sharetter: Bluetooth電波と顔認識を利用した被写検知に基づく写真共有. 第169回ヒューマンコンピュータインタラクション研究発表会(HCI169), 2016.
                                        <a href="http://www.ipsj.or.jp/kenkyukai/event/hci169.html" target="_blank"> {'<Web>'} </a>
                                    </p>
                                </div>
                            </div>
                            <div className="bachelor">
                                <h3 className="title">Bachelor 1</h3>
                                <div className="contents">
                                    <p>
                                        髙田一真, 渡邊恵太. Sharetter : Bluetooth電波を利用した被写検知の検討と試作. 第20回一般社団法人情報処理学会シンポジウム(インタラクション2016), 2016.
                                        <a href="http://www.interaction-ipsj.org/proceedings/2016/data/pdf/2C47.pdf" target="_blank"> {'<PDF>'} </a>
                                        <a href="http://www.interaction-ipsj.org/2016/program/interactive" target="_blank"> {'<Web>'} </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={1050}>
                    <div className="research-page">
                        <h3>Publications</h3>
                        <div className="bachelor-container">
                            <div className="bachelor">
                                <h3 className="title">Bachelor 4</h3>
                                <p>
                                    Coming Soon......
                                </p>
                            </div>
                            <div className="bachelor">
                                <h3 className="title">Bachelor 3</h3>
                                <p>
                                    Coming Soon......
                                </p>
                            </div>
                            <div className="bachelor">
                                <h3 className="title">Bachelor 2</h3>
                                <div className="contents">
                                    <p>
                                        髙田一真, 渡邊恵太. 被写通知：アドホックネットワークを利用した被写検知による写真共有. 第24回インタラクティブシステムとソフトウェアに関するワークショップ(WISS2016), 2016.
                                        <a href="http://www.wiss.org/WISS2016Proceedings/demo/3-A18.pdf" target="_blank"> {'<PDF>'} </a>
                                        <a href="https://www.wiss.org/WISS2016/Demo.html" target="_blank"> {'<Web>'} </a>
                                    </p>
                                </div>
                                <div className="contents">
                                    <p>
                                        髙田一真, 渡邊恵太. Sharetter: Bluetooth電波と顔認識を利用した被写検知に基づく写真共有. 第169回ヒューマンコンピュータインタラクション研究発表会(HCI169), 2016.
                                        <a href="http://www.ipsj.or.jp/kenkyukai/event/hci169.html" target="_blank"> {'<Web>'} </a>
                                    </p>
                                </div>
                            </div>
                            <div className="bachelor">
                                <h3 className="title">Bachelor 1</h3>
                                <div className="contents">
                                    <p>
                                        髙田一真, 渡邊恵太. Sharetter : Bluetooth電波を利用した被写検知の検討と試作. 第20回一般社団法人情報処理学会シンポジウム(インタラクション2016), 2016.
                                        <a href="http://www.interaction-ipsj.org/proceedings/2016/data/pdf/2C47.pdf" target="_blank"> {'<PDF>'} </a>
                                        <a href="http://www.interaction-ipsj.org/2016/program/interactive" target="_blank"> {'<Web>'} </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}