import React from 'react';
import Navbar from "../navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './app.css'

import {HomePage, ProductsPage, ReportsPage} from '../pages';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/reports" component={ReportsPage}/>
                    <Route path="/products" component={ProductsPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;