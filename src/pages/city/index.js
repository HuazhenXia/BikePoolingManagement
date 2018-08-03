import React, {Component} from 'react';

import {Form, Table, Card, Modal, Button, Select, message} from 'antd';
import axios from '../../axios';
import Utils from '../../utils/utils';
import './index.less';

const FormItem = Form.Item;
const Option = Select.Option;

export default class City extends Component{

    state = {
        list: [],
        isShowOpenCity: false
    }

    componentDidMount(){
        this.requestList();
    }

    params = {
        page: 1
    }

    //open a new city
    handleOpenCity = ()=> {
        this.setState({
            isShowOpenCity: true
        })
    }

    requestList = () => {
        let _this = this;
        axios.ajax({
            url: '/open_city',
            data: {
                params:{
                    page:this.params.page
                }
            }
        }).then(res => {
            this.setState({
                list: res.result.item_list.map((item, index)=>{
                    item.key = index
                    return item
                }),
                pagination: Utils.pagination(res, (current)=>{
                    _this.params.page = current;
                    _this.requestList();
                })
            })
        })
    }

    handleOpenSubmit = () => {
        let cityInfo = this.cityForm.props.form.getFieldsValue();
        axios.ajax({
            url: '/city/open',
            data: {
                params: cityInfo
            }
        }).then((res) => {
            if(res.code === 0){
                message.success('Open successfully');
                this.setState({
                    isShowOpenCity: false
                })
                this.requestList()
            }
        })
    }

    render(){
        const columns = [
            {
                title: 'City ID',
                dataIndex: 'id'
            },
            {
                title: 'Name',
                dataIndex: 'name'
            },
            {
                title: 'Usage Mode',
                dataIndex: 'mode',
                render(mode){
                    return mode===1 ? 'Parking Spot':'Forbidden Zone'
                }
            },
            {
                title: 'Operation Mode',
                dataIndex: 'op_mode',
                render(mode){
                    return mode===1 ? 'Self-Operation':'Franchisee'
                }
            },
            {
                title: 'Franchisee',
                dataIndex: 'franchisee_name'
            },
            {
                title: 'Administrator',
                dataIndex: 'city_admins',
                render(arr){
                    return arr.map((item)=>{
                        return item.user_name;
                    }).join(', ')
                }
            },
            {
                title: 'Open Time',
                dataIndex: 'open_time'
            },
            {
                title: 'Update Time',
                dataIndex: 'update_time',
                render: Utils.formateDate
            },
            {
                title: 'Operator',
                dataIndex: 'sys_user_name'
            },
        ]

        return(
            <div>
                <Card className="card">
                    <FilterForm />
                </Card>
                <Card>
                    <Button type="primary" onClick={this.handleOpenCity}>Open</Button>
                </Card>
                <div className="content-wrap">
                    <Table 
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                        columns={columns}
                    />
                </div>
                <Modal
                    title="Open"
                    visible={this.state.isShowOpenCity}
                    onCancel={()=>{
                        this.setState({
                            isShowOpenCity: false
                        })
                    }}
                    onOk={this.handleOpenSubmit}    
                >
                    <OpenCityForm 
                        wrappedComponentRef={(instance)=>{this.cityForm = instance}}/>
                </Modal>
                

            </div>
        )
    }
}

class FilterForm extends Component{

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <FormItem label="City">
                    {
                        getFieldDecorator('city_id')(
                            <Select placeholder="All" className="select">
                                <Option value="">All</Option>
                                <Option value="1">San Jose</Option>
                                <Option value="2">Santa Clara</Option>
                                <Option value="3">Sunnyvale</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="Usage Mode">
                    {
                        getFieldDecorator('mode')(
                            <Select placeholder="All" style={{width:150}}>
                                <Option value="">All</Option>
                                <Option value="1">Parking spot</Option>
                                <Option value="2">Forbidden zone</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="Operation Mode">
                    {
                        getFieldDecorator('op_mode')(
                            <Select placeholder="All" className="select">
                                <Option value="">All</Option>
                                <Option value="1">Self-operation</Option>
                                <Option value="2">Franchisee</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="Franchisee Status">
                    {
                        getFieldDecorator('status')(
                            <Select placeholder="All" className="select">
                                <Option value="">All</Option>
                                <Option value="1">Authorized</Option>
                                <Option value="2">Unauthorized</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}}>Search</Button>
                    <Button>Reset</Button>
                </FormItem>
            </Form>
        )
    }
}

FilterForm = Form.create({})(FilterForm);

class OpenCityForm extends Component{

    render(){
        const formItemLayout = {
            labelCol: { span:6 },
            wrapperCol:{ span: 12 }
        }

        const {getFieldDecorator} = this.props.form;

        return (
            <div>
                <Form>
                    <FormItem label="Select City" {...formItemLayout}>
                    {
                        getFieldDecorator('city_id', {
                            initialValue: '1'
                        })(
                            <Select>
                                <Option value="1">New York</Option>
                                <Option value="2">L.A.</Option>
                            </Select>
                        )
                    }
                    </FormItem>
                    <FormItem label="Operation Mode" {...formItemLayout}>
                    {
                        getFieldDecorator('op_mode', {
                            initialValue: '1'
                        })(
                            <Select>
                                <Option value="1">Self-Operation</Option>
                                <Option value="2">Franchisee</Option>
                            </Select>
                        )
                    }
                        
                    </FormItem>
                    <FormItem label="Usage Mode" {...formItemLayout}>
                    {
                        getFieldDecorator('use_mode', {
                            initialValue: '1'
                        })(
                            <Select>
                                <Option value="1">Designated Parking Spot</Option>
                                <Option value="2">Forbidden Zone</Option>
                            </Select>
                        )
                    }
                        
                    </FormItem>
                </Form>
            </div>
        )
    }
}

OpenCityForm = Form.create({})(OpenCityForm);
