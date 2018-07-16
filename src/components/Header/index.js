import React, {Component} from 'react';

import {Row, Col} from 'antd';

import './index.less'
import Util from '../../utils/utils';


export default class Header extends Component{
    componentWillMount(){
        this.setState({
            username: 'Aaron'
        })

        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)
    }


    render(){
        return (
            <div className="header">
                <Row className="header-top">
                    <span>Welcome, {this.state.username}! </span>
                    <a href="">LOG OUT</a>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="bread-crumb-title">
                        Home
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail"> Sunny</span>
                    </Col>
                </Row>
            </div>
        )
    }
}