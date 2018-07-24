import React, {Component} from 'react';

import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Login from './pages/login/Login';
import Buttons from './pages/ui/buttons';
import NoMatch from './pages/noMatch/index';
import Home from './pages/home/index';

export default class IRouter extends Component{
    render(){
        return(
            <HashRouter>
                <App>
                    
                        <Route path="/login" component={Login}/>
                        <Route path="/admin" render={()=>
                            <Admin>
                                <Switch>
                                    <Route exact path="/admin" component={Home} />
                                    <Route path="/admin/home" component={Home} />
                                    <Route path="/admin/ui/buttons" component={Buttons} />
                                    <Route component={NoMatch} />
                                </Switch>
                            </Admin>
                        }/>
                        <Route path="/order/detail" component={Login}/>
                </App>

            </HashRouter>
        )
    }
}




