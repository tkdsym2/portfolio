import React, { Component } from 'react';

export default class Publications extends Component {
    render() {
        return (
            <div className="research-page">
                <h3>Publications</h3>

                {/* <hr /> */}

                <div className="bachelor-container">
                    <div className="bachelor">
                        <h3 className="title">Bachelor 4</h3>
                        <p>
                            Coming Soon......
                        </p>
                    </div>

                    {/* <hr className="splitLine"/> */}

                    <div className="bachelor">
                        <h3 className="title">Bachelor 3</h3>
                        <p>
                            Coming Soon......
                        </p>
                    </div>

                    {/* <hr className="splitLine"/> */}

                    <div className="bachelor">
                        <h3 className="title">Bachelor 2</h3>
                        <div className="contents">
                            <a href="https://www.wiss.org/WISS2016/Demo.html">
                                髙田一真, 渡邊恵太. 被写通知：アドホックネットワークを利用した被写検知による写真共有. 第24回インタラクティブシステムとソフトウェアに関するワークショップ(WISS2016), 2016.
                            </a>
                        </div>
                        <div className="contents">
                            <a href="http://www.ipsj.or.jp/kenkyukai/event/hci169.html">
                                髙田一真, 渡邊恵太. Sharetter: Bluetooth電波と顔認識を利用した被写検知に基づく写真共有. 第169回ヒューマンコンピュータインタラクション研究発表会(HCI169), 2016.
                            </a>
                        </div>
                    </div>

                    {/* <hr className="splitLine"/> */}

                    <div className="bachelor">
                        <h3 className="title">Bachelor 1</h3>
                        <div className="contents">
                            <a href="http://www.interaction-ipsj.org/2016/program/interactivel">
                                髙田一真, 渡邊恵太. Sharetter : Bluetooth電波を利用した被写検知の検討と試作. 第20回一般社団法人情報処理学会シンポジウム(インタラクション2016), 2016.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}