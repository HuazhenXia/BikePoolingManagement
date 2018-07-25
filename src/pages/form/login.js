import React, {Component} from 'react';

import {Card, Form, Button, Input} from 'antd';

const FormItem = Form.Item;

export default class FormLogin extends Component{
    render(){
        return (
            <div>
                <Card title="Inline Form">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="Username" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="Password" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">LOG IN</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="Horizontal Form" style={{marginTop:10}}>
                    <Form style={{width:300}}>
                        <FormItem>
                            <Input placeholder="Username" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="Password" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">LOG IN</Button>
                        </FormItem>
                    </Form>
                </Card>

            </div>
        )
    }
}
