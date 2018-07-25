import React, {Component} from 'react';

import {Card, Button, Modal} from 'antd';
import './ui.less'

class Modals extends Component{
    state={
        showOpen : false,
        showCustom : false,
        showMargin : false,
        showCenter : false
    }

    openHandler = (type) => {
        this.setState({[type]: true})
        
    }

    infoHandler = (type) => {
        Modal[type]({
            title: 'Confirm?',
            content: 'Have you see this Modal?',
            onOk(){
                console.log("ok")
            },
            onCancel(){
                console.log("cancel")
            }
        })
    }

    render(){
        return (
            <div>
                <Card title="Basic Modal" className="card-wrap">
                    <Button type="primary" onClick={() => this.openHandler("showOpen")}>Open</Button>
                    <Button type="primary" onClick={() => this.openHandler("showCustom")}>Custom</Button>
                    <Button type="primary" onClick={() => this.openHandler("showMargin")}>MarginTop20</Button>
                    <Button type="primary" onClick={() => this.openHandler("showCenter")}>Center</Button>
                </Card>
                <Card title="Informatica Confirmation" className="card-wrap">
                    <Button type="primary" onClick={() => this.infoHandler("confirm")}>Confirm</Button>
                    <Button type="primary" onClick={() => this.infoHandler("info")}>Info</Button>
                    <Button type="primary" onClick={() => this.infoHandler("success")}>Success</Button>
                    <Button type="primary" onClick={() => this.infoHandler("warning")}>Warning</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showOpen}
                    onCancel={() =>{this.setState({showOpen: false})}}
                    onOk={() =>{this.setState({showOpen: false})}}
                >
                    <p>Welcome to my project!</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showCustom}
                    okText = "Next"
                    cancelText = "Close"
                    onCancel={() =>{this.setState({showCustom: false})}}
                    onOk={() =>{this.setState({showCustom: false})}}
                >
                    <p>Welcome to my project!</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showMargin}
                    style = {{top:20}}
                    onCancel={() =>{this.setState({showMargin: false})}}
                    onOk={() =>{this.setState({showMargin: false})}}
                >
                    <p>Welcome to my project!</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showCenter}
                    wrapClassName="vertical-center-modal"
                    onCancel={() =>{this.setState({showCenter: false})}}
                    onOk={() =>{this.setState({showCenter: false})}}
                >
                    <p>Welcome to my project!</p>
                </Modal>

            </div>
        )
    }
}

export default Modals

