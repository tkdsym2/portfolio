import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

import '../../stylesheets/navigation.scss';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navigation-bar">
                <nav>
                    <ul className="header-contents">
                        <li><Link to="/"><p>Works</p></Link></li>
                        <li><Link to="/research"><p>Research</p></Link></li>
                        <li><Link to="/profile"><p>Profile</p></Link></li>
                    </ul>
                </nav>
                <hr />
            </div>
        )
    }
}