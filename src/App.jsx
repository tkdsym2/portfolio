import React, {Component} from 'react';
import Radium from 'radium';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Match,
    Switch,
    IndexRoute
} from 'react-router-dom';

import Works from './javascripts/pages/Works.jsx';
import About from './javascripts/pages/About.jsx';
import Header from './javascripts/pages/Header.jsx';
import Footer from './javascripts/pages/Footer.jsx';

import './stylesheets/index.scss';

class App extends Component {
    render() {
        return (
            <div>
                <style jsx>{`
                    .hoge {
                        color: #FF0000;
                    }
                `}</style>
                <Router>
                    <div className="container">
                        <header className="globalHeader" style={[styles.base]}>
                            <nav className="navi">
                                <ul>
                                    <li style={[styles.title]}>
                                        <h1>This is Header</h1>
                                    </li>
                                    <li key={'li1'}>
                                        <Link to="/">
                                            <p className="hoge">Works</p>
                                        </Link>
                                    </li>
                                    <li key={'li2'} style={[styles.navicontent]}>
                                        <Link to="/about">
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </header>

                        <hr />

                        <Route exact path="/" component={Works}/>
                        <Route path="/works" component={Works} />
                        <Route path="/about" component={About}/>

                        <Footer/>

                    </div>
                </Router>
            </div>
        )
    }
}

export default Radium(App);

const styles = {
    base: {
        backgroundColor: '#fff',
        height: '120px',
        outline: 'none',
        // boxShadow: '0 1px 0 rgba(0,0,0,0.2)'
    },
    title: {
        color: '#333',
        fontSize: 40,
        fontFamily: 'Capella Bold',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '150px'
    },
    navicontent: {
        color: '#333',
        fontSize: 20,
        fontFamily: 'Capella Bold',
        letterSpacing: '0.1em',
        marginTop: '40px',
        marginLeft: '30px',
        ':hover': {
            // borderBottom: '1px solid #ec652b'
        }
    }
};