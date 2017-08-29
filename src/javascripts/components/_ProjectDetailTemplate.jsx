import React, { Component } from 'react';
import Slider from 'react-slick';
import Debug from 'debug';

const debug = Debug('ProjectDetail:jsx:');

/*
    * 各プロジェクトのDetailのtemplate
    * 追加要素があれば，ProjectDetail.scssか新しくfileをつくってclass名が混ざらないように管理
    * ProjectCardのため，jsonファイルも作るのを忘れない
*/

class ProjectDetailTemplate extends Component {
    constructor(props) {
        super(props);
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
            <div className="detail-page">
                <div className="project-header">
                    <h4> title </h4>
                    <p> subtitle </p>
                </div>
                <div className="prooject-contents">
                    <div className="project-images">
                        <Slider {...settings}>
                            <img src={ imgUrl1 }/>
                            <img src={ imgUrl2 }/>
                            <img src={ imgUrl3 }/>
                        </Slider>
                    </div>
                    <div className="project-description">
                        <p>
                            本文
                        </p>
                    </div>
                    <div className="movie">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/fq0-6UXIzjU" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="relations">
                        <p><b>関連リンク</b></p>
                        <ul>
                            <li><a href="" target="_blank"></a></li>
                            <li><a href="" target="_blank"></a></li>
                            <li><a href="" target="_blank"></a></li>
                            <li><a href="" target="_blank"></a></li>
                            <li><a href="" target="_blank"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}