import React, {Component} from 'react';

import {Card, Button, Radio} from 'antd';
import './ui.less'

export default class Buttons extends Component{
    state = {
        loading: true,
        size: 'default'
    }

    handleCloseLoading = () => {
        this.setState({
            loading: false
        })
    }

    handleChangeSize = (e) => {
        this.setState({
            size: e.target.value
        })
    }

    render(){
        return (
           <div>
                <Card title="Basic Buttons" className="card-wrap">
                    <Button type="primary">Button</Button>
                    <Button>Button </Button>
                    <Button type="dashed">Button</Button>
                    <Button type="danger">Button</Button>
                    <Button disabled>Button</Button>
                </Card>
                <Card title="Image Buttons" className="card-wrap">
                    <Button icon="plus">Add</Button>
                    <Button icon="edit">Edit</Button>
                    <Button icon="delete">Delete</Button>
                    <Button icon="search"></Button>
                    <Button type="primary" icon="search">Search</Button>
                    <Button type="primary" icon="download">Download</Button>
                </Card>

                <Card title="Loading Buttons" className="card-wrap"> 
                    <Button type="primary" loading={this.state.loading}>Confirm</Button>
                    <Button type="primary" loading={this.state.loading} shape="circle"></Button>
                    <Button loading={this.state.loading}>Click to Load</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>Quit</Button>
                </Card>

               <Card title="Button Group" style={{marginBottom:'10px'}}>
                    <Button.Group>
                        <Button type="primary" icon="left">Prev</Button>
                        <Button type="primary" icon="right">Next</Button>
                    </Button.Group>
               </Card>

                <Card title="Adjust Size" className="card-wrap">
                    <Radio.Group size={this.state.size}  onChange={this.handleChangeSize}>
                        <Radio value="small">Small</Radio>
                        <Radio value="middle">Middle</Radio>
                        <Radio value="large">Large</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>Button</Button>
                    <Button size={this.state.size}>Button </Button>
                    <Button type="dashed" size={this.state.size}>Button</Button>
                    <Button type="danger" size={this.state.size}>Button</Button>
                    <Button disabled size={this.state.size}>Button</Button>
                </Card>

           </div>
        );
    }
}
