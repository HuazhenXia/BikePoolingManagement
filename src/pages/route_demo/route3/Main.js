import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class Main extends Component{
    render(){
        return (
           <div>
               This is Home page <br/>
               <Link to='/main/test-id'>Route in Route1</Link> <br/>
               <Link to='/main/456'>Route in Route2</Link>
               <hr/>
               {this.props.children}
           </div>
        );
    }
}

export default Main;
