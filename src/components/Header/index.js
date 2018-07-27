import React, {Component} from 'react';

import {Row, Col} from 'antd';

import './index.less'
import Util from '../../utils/utils';
import axios from '../../axios/index';


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
        this.getWeatherAPIData()
    }

    getWeatherAPIData(){
        let city = '北京';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+ encodeURIComponent(city) +'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2',
        }).then(res => {
            let data = res.results[0].weather_data[0];
            this.setState({
                dayPictureUrl: data.dayPictureUrl,
                weather: data.weather
            })
        }) 
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
                        Content
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt=""/>
                        </span>
                        {/* <span className="weather-detail">{this.state.weather}</span> */}
                    </Col>
                </Row>
            </div>
        )
    }
}