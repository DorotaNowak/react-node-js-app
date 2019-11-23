import React, {Component} from 'react';
import './App.css';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Stuff from "./Stuff";
import Bitcoin from "./Bitcoin";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Bitcoin</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink exact to="/stuff">Stuff</NavLink></li>
                        <li><NavLink exact to="/contact">Contact</NavLink></li>
                        <li><NavLink exact to="/bitcoin">Bitcoin</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/stuff" component={Stuff}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/bitcoin" component={Bitcoin}/>
                    </div>
                </div>
            </HashRouter>);
    }
}

export default App;
