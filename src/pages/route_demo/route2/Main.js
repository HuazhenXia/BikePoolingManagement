import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class Main extends Component{
    render(){
        return (
           <div>
               This is Home page
               <Link to='/main/test-id'>Route in Route</Link>
               <hr/>
               {this.props.children}
           </div>
        );
    }
}

export default Main;
