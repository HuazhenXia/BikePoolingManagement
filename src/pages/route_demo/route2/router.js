import React, {Component} from 'react';

import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Main from '../route1/Main';
import About from '../route1/About';
import Topics from '../route1/Topics';
import Home from './Home';


export default class IRouter extends Component{
    render(){
        return (
            <Router>
                <Home>
                    <Route path='/' exact component={Main}/>
                    <Route path='/about' component={About}/>
                    <Route path='/topics' component={Topics}/>
                </Home>
            </Router>
        )
    }
}
