import React, {Component} from 'react';
import Radium from 'radium';
import {Flex, Box} from 'reflexbox';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Grid, Row, Col, Button} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Router>
                <header className="globalHeader header_wrap" style={[styles.base]}>
                    <nav className="navi">
                        <ul className="navicontents">
                            <li>
                                <h1>This is Header</h1>
                            </li>
                            <li>
                                <Link to="/">
                                    Works
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </Router>
        )
    }
}

export default Radium(Header);

const styles = {
    base: {
        backgroundColor: '#fff',
        height: '200px',
        outline: 'none',
        paddingTop: '25px',
        paddingLeft: '20px',
        boxShadow: '0 3px 0 rgba(0,0,0,0.2)'
    },
    title: {
        color: '#333',
        fontSize: 40,
        fontFamily: 'Capella Bold',
        marginLeft: '10px'
    },
    works: {
        fontSize: 20,
        fontFamily: 'Capella Bold',
        marginLeft: '50px',
        ':hover': {
            backgroundColor: '#FF0000'
        }
    },
    about: {
        fontSize: 20,
        fontFamily: 'Capella Bold',
        marginLeft: '20px'
    },
    mainnav: {
        marginTop: '30px',
        textDecoration: 'none',
        color: '#333',
        letterSpacing: '0',
        fontWeight: '400',
        paddingTop: '150px',
        paddingBottom: '54px'
    }
};