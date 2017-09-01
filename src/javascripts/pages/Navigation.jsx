import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import MediaQuery from 'react-responsive';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MediaQuery maxWidth={1049}>
                    <div className="navigation-header-middle">
                        <div className="header-contents-middle">
                            <p>Kazuma Takada</p>
                            <div className="navigation-list-middle">
                                <Link to="/" className="item-middle">Works</Link>
                                <Link to="/publications" className="item-middle">Publications</Link>
                                <Link to="/profile" className="item-middle">Profile</Link>
                            </div>
                            <hr />
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={1050}>
                    <div className="navigation-component">
                        <div className="navigation-bar area">
                            <p className="myname">Kazuma Takada</p>
                            <nav className="navigation-list">
                                <Link to="/" className="item">Works</Link>
                                <Link to="/publications" className="item">Publications</Link>
                                <Link to="/profile" className="item">Profile</Link>
                            </nav>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}