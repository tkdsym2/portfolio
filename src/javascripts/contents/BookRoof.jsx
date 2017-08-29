import React, { Component } from 'react';
import Slider from 'react-slick';
import Debug from 'debug';

const debug = Debug('ProjectDetail:jsx:');

export default class BookRoof extends Component {
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
                    <h4> Book Roof </h4>
                    <p> 本が屋根になるブックスタンド </p>
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
                            Coming Soon ...
                        </p>
                    </div>
                    <div className="movie">
                    <iframe width="640" height="360" src="https://www.youtube.com/embed/QmCKWIE7J-o" frameborder="0" allowfullscreen></iframe>
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
        )
    }
}