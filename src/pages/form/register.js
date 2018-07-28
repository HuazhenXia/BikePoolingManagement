import React, {Component} from 'react';

import {Card, Form, Button, Input, Icon, Radio, Select,InputNumber,
    Checkbox, Switch, DatePicker, TimePicker, Upload, message} from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

class FormRegister extends Component{

    state = {}
    
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            userImg: imageUrl,
            loading: false,
          }));
        }
    }

    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo));
        message.success(`${userInfo.userName}, you have signed up`);
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol: {
                xs:24,
                sm:12
            }
        }

        const offsetLayout = {
            wrapperCol: {
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }

        return (
            <div>  
                <Card title="Registration Form">
                    <Form layout="horizontal">
                        <FormItem label="User Name" {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [{
                                        required: true,
                                        message: 'user name can not be empty'
                                    }]
                                })(
                                    <Input placeholder="Please input user name"/>
                                )
                            }
                        </FormItem>
                        <FormItem label="Password" {...formItemLayout}>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
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
                                    <Input type="password" placeholder="Please input password"/>
                                )
                            }
                        </FormItem>
                        <FormItem label="Gender" {...formItemLayout}>
                            {
                                getFieldDecorator('Gender', {
                                    initialValue: '1',
                                })(
                                    <RadioGroup>
                                        <Radio value="1">Male</Radio>
                                        <Radio value="2">Female</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="Age" {...formItemLayout}>
                            {
                                getFieldDecorator('Age', {
                                    initialValue: 20,
                                })(
                                    <InputNumber />
                                )
                            }
                        </FormItem>
                        <FormItem label="Current Status" {...formItemLayout}>
                            {
                                getFieldDecorator('Status', {
                                    initialValue: '3',
                                })(
                                    <Select>
                                        <Option value="1">Energetic Teenage</Option>
                                        <Option value="2">Beautiful Lady</Option>
                                        <Option value="3">Geek</Option>
                                        <Option value="4">Gym Guy</Option>
                                        <Option value="5">Film Fan</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="Hobbies" {...formItemLayout}>
                            {
                                getFieldDecorator('Hobbies', {
                                    initialValue: ['1', '5'],
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">Football</Option>
                                        <Option value="2">Shopping</Option>
                                        <Option value="3">Work out</Option>
                                        <Option value="4">Run</Option>
                                        <Option value="5">Films</Option>
                                        <Option value="6">Reading</Option>
                                        <Option value="7">Basketball</Option>
                                        <Option value="8">Kongfu</Option>
                                        <Option value="9">Cooking</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="Love My Project?" {...formItemLayout}>
                            {
                                getFieldDecorator('Like', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Switch />
                                )
                            }
                        </FormItem>

                        <FormItem label="Address" {...formItemLayout}>
                            {
                                getFieldDecorator('Address', {
                                    initialValue: 'somewhere in the USA'
                                })(
                                    <TextArea />
                                )
                            }
                        </FormItem>

                        <FormItem label="Birthday(random select)" {...formItemLayout}>
                            {
                                getFieldDecorator('Birthday', {
                                    initialValue: moment('2018-07-27')
                                })(
                                    <DatePicker                                      
                                        format="YYYY-MM-DD"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="Get-up Time" {...formItemLayout}>
                            {
                                getFieldDecorator('Getup')(
                                    <TimePicker/>
                                )
                            }
                        </FormItem>
                        <FormItem label="Avatar" {...formItemLayout}>
                            {
                                getFieldDecorator('Avatar')(
                                    <Upload
                                        listType="picture-card"
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        showUploadList={false}
                                        onChange={this.handleChange}
                                    >
                                        {this.state.userImg?<img src={this.state.userImg} alt="img"/>:<Icon type="plus" />}

                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('agree')(
                                    <Checkbox>I have read all the terms</Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('Signup')(
                                    <Button type="primary" onClick={this.handleSubmit}>Sign Up</Button>
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(FormRegister)
