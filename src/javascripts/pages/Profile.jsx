import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="profile-page">
                <MetaTags>
                    <title>fmsuvM Profile</title>
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@fmsuvM" />
                    <meta name="twitter:creator" content="@fmsuvM" />
                    <meta name="twitter:title" content="Kazuma Takada Profile" />
                    <meta name="twitter:domain" content="fmsuvM.github.io" />
                </MetaTags>
                <h3>Profile</h3>

                <div className="profile-about">
                    <img src="https://i.gyazo.com/0fff108b825bd60ddb349430b2fe131d.jpg" />
                    <div className="status">
                        <ul>
                            <li className="name">髙田 一真<small>Kazuma Takada</small></li>
                            <li className="info"><p><img src="./src/images/icon/school.png"/><span className="infotext"><a href="http://www.meiji.ac.jp/ims/subject/fms/" target="_blank" className="jump-link">明治大学 総合数理学部 先端メディアサイエンス学科</a> <a href="http://keita-lab.jp/" target="_blank" className="jump-link">渡邊研究室</a>所属 学部3年</span></p></li>
                            <li className="info"><p><img src="./src/images/icon/mail.png"/><span className="infotext">k222.tkd.fms [at] gmail.com</span></p></li>
                            <li className="info"><p><img src="./src/images/icon/facebook.png" style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px'}}/><span className="infotext"><a href="https://www.facebook.com/kazuma.takada.90" target="_blank" className="jump-link">高田 一真</a></span></p></li>
                            <li className="info"><p><img src="./src/images/icon/github.png"/><span className="infotext"><a href="https://github.com/fmsuvM" target="_blank">@fmsuvM</a></span></p></li>
                            <li className="info"><p><img src="./src/images/icon/twitter.png" style={{width: '30px', height: '30px', marginLeft: '-5px', marginRight: '-5px'}} /><span className="infotext"><a href="https://twitter.com/fmsuvM" target="_blank" className="jump-link">@fmsuvM</a></span></p></li>
                            <li className="info"><p><img src="./src/images/icon/instagram.png"/><span className="infotext"><a href="https://www.instagram.com/kazuma__tkd/" target="_blank" className="jump-link">@kazuma__tkd</a></span></p></li>
                            <li className="info"><p><img src="./src/images/icon/medium.png" style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px'}}/><span className="infotext"><a href="https://medium.com/@fmsuvM" target="_blank" className="jump-link">@fmsuvM</a></span></p></li>
                        </ul>
                    </div>
                </div>

                <div className="bio">
                    <div className="interests">
                        <h5>Interests</h5>
                        <p>Interaction Design, Digital Fabrication and etc...</p>
                    </div>

                    <div className="background">
                        <h5>Background</h5>
                        <div className="background-contents">
                            <div className="background-year">
                                <ul>
                                    <li>1997年 2月</li>
                                    <li>2009年 4月</li>
                                    <li>2015年 3月</li>
                                    <li>2015年 4月</li>
                                    <li>2019年 3月</li>
                                </ul>
                            </div>
                            <div className="background-year-info">
                                <ul>
                                    <li>神奈川県 鎌倉市 生まれ</li>
                                    <li>私立湘南学園中学高等学校　入学</li>
                                    <li>私立湘南学園中学高等学校　卒業</li>
                                    <li>明治大学 総合数理学部 先端メディアサイエンス学科　入学</li>
                                    <li>明治大学 総合数理学部 先端メディアサイエンス学科　卒業予定</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default About;