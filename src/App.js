import './App.css';
import React, { useState } from 'react';
import DashboardView from './views/DashboardView';
import AuthView from './views/AuthView';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

function App() {

    return (
        <div className="App"> 
            <Router>
                <Switch>
                    <Route exact path="/" component={AuthView} />
                    <Route path="/dashboard" component={DashboardView} />  
                </Switch>
            </Router>
        </div>
    );
    
}

export default App;
