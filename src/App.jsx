import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';

import Works from './javascripts/pages/Works.jsx';
import Profile from './javascripts/pages/Profile.jsx';
import Publications from './javascripts/pages/Publications';
import Manager from './javascripts/pages/Manager';

import Fabnavi from './javascripts/contents/Fabnavi';
import Shogg from './javascripts/contents/Shogg';
import BookRoof from './javascripts/contents/BookRoof';
import Unpresence from './javascripts/contents/Unpresence';
import ThroughStudio from './javascripts/contents/ThroughStudio';
import FlexibleInterface from './javascripts/contents/FlexibleInterface';
import GhostCreator from './javascripts/contents/GhostCreator';
import FabDesk from './javascripts/contents/FabDesk';
import FabnaviHakodate from './javascripts/contents/FabnaviHakodate';
import FabnaviSpace from './javascripts/contents/FabSpace';
import Hishatsuuti from './javascripts/contents/Hishatsuuti';
import Icc from './javascripts/contents/Icc';
import JissenOcreilly from './javascripts/contents/JissenOcreilly';
import JitsuyouOcreilly from './javascripts/contents/JitsuyouOcreilly';
import SharetterHci from './javascripts/contents/SharetterHci';
import ShoukaiOcreilly from './javascripts/contents/ShoukaiOcreilly';
import ToDoPop from './javascripts/contents/ToDoPop';


import './stylesheets/footer.scss';
import './stylesheets/index.scss';
import './stylesheets/navigation.scss';
import './stylesheets/profile.scss';
import './stylesheets/ProjectCard.scss';
import './stylesheets/ProjectDetail.scss';
import './stylesheets/publications.scss';
import './stylesheets/works.scss';

const history = createHashHistory();

export default class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Manager>
                        <Switch>
                            <Route component={Works} path="/" exact />
                            <Route component={Profile} path="/profile" />
                            <Route component={Publications} path="/publications" />
                            <Route component={Fabnavi} path="/detail/fabnavi"/>
                            <Route component={Shogg} path="/detail/shogg"/>
                            <Route component={BookRoof} path="/detail/bookroof"/>
                            <Route component={Unpresence} path="/detail/unpresence"/>
                            <Route component={ThroughStudio} path="/detail/throughstudio"/>
                            <Route component={FlexibleInterface} path="/detail/flexibleinterface"/>
                            <Route component={GhostCreator} path="/detail/ghostcreator"/>
                            <Route component={FabDesk} path="/detail/fabdesk"/>
                            <Route component={FabnaviHakodate} path="/detail/fabnavihakodate"/>
                            <Route component={FabnaviSpace} path="/detail/fabspace"/>
                            <Route component={Hishatsuuti} path="/detail/hishatsuuti"/>
                            <Route component={Icc} path="/detail/icc"/>
                            <Route component={JissenOcreilly} path="/detail/jissenocreilly"/>
                            <Route component={JitsuyouOcreilly} path="/detail/jitsuyouocreilly"/>
                            <Route component={SharetterHci} path="/detail/sharetterhci"/>
                            <Route component={ShoukaiOcreilly} path="/detail/shoukaiocreilly"/>
                            <Route component={ToDoPop} path="/detail/todopop"/>
                        </Switch>
                    </Manager>
                </Router>
            </div>
        )
    }
}