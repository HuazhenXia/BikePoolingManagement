import React, {Component} from 'react';

import {Card, Button, Spin, Icon, Alert} from 'antd';
import './ui.less';

export default class Loadings extends Component{
    render(){
        const icon = <Icon type="loading" style={{fontSize:22}}/>
        return (
            <div>
                <Card title="Spin" className="card-wrap">
                    <Spin size="small" />
                    <Spin style ={{margin:'0 10px'}}/>
                    <Spin size="large" />
                    <Spin indicator={icon} style={{marginLeft:10}}/>
                </Card>
                <Card title="Content Mask" className="card-wrap">
                    <Alert 
                        message="React"
                        description="Welcome to see my React project"
                        type="info"
                    />
                    <Spin>
                        <Alert 
                            message="React"
                            description="Welcome to see my React project"
                            type="warning"
                        />
                    </Spin>
                    <Spin tip="Loading...">
                        <Alert 
                            message="React"
                            description="Welcome to see my React project"
                            type="warning"
                        />
                    </Spin>
                    <Spin indicator={icon}>
                        <Alert 
                            message="React"
                            description="Welcome to see my React project"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}


