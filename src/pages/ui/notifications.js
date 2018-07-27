import React, {Component} from 'react';

import {Card, Button, notification} from 'antd';
import './ui.less';

export default class Notifications extends Component{

    openNotification = (type, direction) => {
        if(direction){
            notification.config({
                placement: direction
            })
        }

        notification[type]({
            message: 'You have a new message',
            description: 'You have seen the notification'
        })
    }

    render(){
        return (
            <div>
                <Card title="Notifications" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotification('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.openNotification('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.openNotification('error')}>Error</Button>
                </Card>
                <Card title="Notifications from four positions" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotification('success', 'topLeft')}>Success</Button>
                    <Button type="primary" onClick={() => this.openNotification('info', 'topRight')}>Info</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning', 'bottomLeft')}>Warning</Button>
                    <Button type="primary" onClick={() => this.openNotification('error', 'bottomRight')}>Error</Button>
                </Card>
            </div>
        )
    }
}
