import React, {Component} from 'react';

class Info extends Component{
    render(){
        return (
           <div>
                Test dynamic route. {this.props.match.params.testId}
           </div>
        );
    }
}

export default Info;
