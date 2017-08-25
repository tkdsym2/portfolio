import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';

import Navigation from './Navigation';
import Footer from '../components/Footer';

const debug = Debug('Manager:jsx:');

export default class Manager extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <style jsx>{`

                `}</style>
                <div className="body">
                    <div className="header">
                        <Navigation />
                    </div>
                    {this.props.children}
                    <Footer />
                </div>
            </div>
        )
    }
}

Manager.PropTypes = {
    children: PropTypes.element
}