import React, {Component} from 'react';

import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Login from './pages/login/Login';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notifications from './pages/ui/notifications';
import Messages from './pages/ui/messages';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carousel';
import NoMatch from './pages/noMatch/index';
import Home from './pages/home/index';
import FormLogin from './pages/form/login';
import FormRegister from './pages/form/register';
import TableBasic from './pages/table/basicTable';
import TableAdvanced from './pages/table/AdvancedTable';
import City from './pages/city';
import Order from './pages/order';
import Common from './Common';

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
                                    <Route path="/admin/ui/modals" component={Modals} />
                                    <Route path="/admin/ui/loadings" component={Loadings} />
                                    <Route path="/admin/ui/notification" component={Notifications} />
                                    <Route path="/admin/ui/messages" component={Messages} />
                                    <Route path="/admin/ui/tabs" component={Tabs} />
                                    <Route path="/admin/ui/gallery" component={Gallery} />
                                    <Route path="/admin/ui/carousel" component={Carousel} />
                                    <Route path="/admin/form/login" component={FormLogin} />
                                    <Route path="/admin/form/register" component={FormRegister} />
                                    <Route path="/admin/table/basic" component={TableBasic} />
                                    <Route path="/admin/table/advanced" component={TableAdvanced} />
                                    <Route path="/admin/city" component={City} />
                                    <Route path="/admin/order" component={Order} />
                                    <Route component={NoMatch} />
                                </Switch>
                            </Admin>
                        }/>
                        <Route path="/common" 
                            render = {() => 
                                <Common>
                                    <Route path="/common/order/detail/:orderId" component={Login} />
                                </Common>
                            }
                        />

                        {/* <Route path="/order/detail" component={Login}/> */}
                </App>

            </HashRouter>
        )
    }
}




