import React, {Component} from 'react';

import {Card, Form, Button, Input, Icon, Checkbox, message} from 'antd';

const FormItem = Form.Item;

class FormLogin extends Component{
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if(!err){
                message.success(`Hi ${userInfo.userName}. You have pass all the form validations`)
            }
        })
    }

    render(){
        const {getFieldDecorator} = this.props.form;
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
                            {
                                getFieldDecorator('userName', {
                                    initialValue: 'Jack',
                                    rules: [{
                                        required: true,
                                        message: 'user name can not be empty'
                                    }]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="Please input user name"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                        {
                                getFieldDecorator('userPwd', {
                                    initialValue: '12345662',
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Password can not be empty'
                                        },{
                                            min:6, max:20,
                                            message: 'length of Password should be between 6 - 20'
                                        },{
                                            pattern: /\w*/g,
                                            message: 'Password could only contain letters and numbers'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="lock"/>} type="password" placeholder="Please input password"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                           {
                                getFieldDecorator('remember', {
                                    valuePropName:'checked',
                                    initialValue: true
                                })(
                                    <Checkbox>Rememder Password</Checkbox>
                                )
                           } 
                           <a href="" style={{float:'right'}}>Forget</a>
                            
                        </FormItem>

                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>LOG IN</Button>
                        </FormItem>
                    </Form>
                </Card>

            </div>
        )
    }
}

export default Form.create()(FormLogin);
