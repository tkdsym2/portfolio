import React, {Component} from 'react';

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

class App extends Component {
    render() {
        return (
            <Router>
                <div className="grid-container">

                    <Header />

                    <Route exact path="/" component={Works}/>
                    <Route path="/works" component={Works} />
                    <Route path="/about" component={About}/>

                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default App;
