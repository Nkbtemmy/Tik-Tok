import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Game from '../components/Game'
import First from '../components/First'

export default class Routers extends Component {
    render() {
        return (
            <div>
                 <Router>
                     <Switch>
                        <Route path="/" exact component={First } />
                        <Route path="/game" exact component={Game} />      
                     </Switch>
                 </Router>                
            </div>
        )
    }
}

