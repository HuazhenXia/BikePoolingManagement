import React, {Component} from 'react';

import {Form, Table, Card, Modal, Button, Select, message} from 'antd';
import axios from '../../axios';
import Utils from '../../utils/utils';
import './index.less';

const FormItem = Form.Item;
const Option = Select.Option;

export default class City extends Component{

    state = {}

    componentDidMount(){
        this.requestList();
    }

    params = {
        page: 1
    }

    //open a new city
    handleOpenCity = ()=> {
        
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
                dataIndex: 'mode'
            },
            {
                title: 'Operation Mode',
                dataIndex: 'op_mode'
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
                dataIndex: 'update_time'
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