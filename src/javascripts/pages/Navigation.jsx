import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
        )
    }
}