import React, { Component } from 'react';

// Twitter, facebook. github

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <hr />
                <p>k222.tkd.fms [at] gmail.com</p>
                <ul className="footer-list">
                    <li className="list-item"><a href="https://www.facebook.com/kazuma.takada.90" target="_blank"><img src="./src/images/icon/facebook.png" style={{borderTopLeftRadius: '2px', borderTopRightRadius: '2px', borderBottomLeftRadius: '2px', borderBottomRightRadius: '2px'}}/></a></li>
                    <li className="list-item"><a href="https://github.com/fmsuvM" target="_blank"><img src="./src/images/icon/github.png"/></a></li>
                    <li className="list-item"><a href="https://twitter.com/fmsuvM" target="_blank"><img src="./src/images/icon/twitter.png" style={{width: '30px', height: '30px', marginLeft: '-5px', marginRight: '-5px', marginTop: '-5px'}} /></a></li>
                </ul>
                <p className="copyright"><span className="copyright-mark">&copy;</span><span className="author"> 2017 Kazuma Takada</span></p>
            </div>
        )
    }
}
