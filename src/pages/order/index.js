import React, {Component} from 'react';

import {Form, Table, Card, DatePicker, Button, Select, Modal, message} from 'antd';
import axios from '../../axios';
import Utils from '../../utils/utils';
import './index.less';

const FormItem = Form.Item;
const Option = Select.Option;

export default class Order extends Component{
    state = {
        orderInfo: {},
        orderConfirmVisible: false
    }

    params = {
        page: 1
    }

    componentDidMount(){
        this.requestList()
    }

    requestList = () => {
        let _this = this;
        axios.ajax({
            url: '/order/list',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then(res => {
            let list = res.result.item_list.map((item, index)=>{
                item.key = index
                return item
            });
            console.log(res.result.page)
            console.log(res.result.page_size)
            this.setState({
                list,
                pagination: Utils.pagination(res,(current)=>{
                    _this.params.page = current;
                    this.request()
                })
            })
        })
    }

    handleConfirm = () => {
        let item = this.state.selectItem;
        if(!item){
            Modal.info({
                title: 'Message',
                content: 'please select an order item'
            })
            return
        }
        axios.ajax({
            url:'/order/ebike_info',
            data: {
                params: {
                    orderId: item.id
                }
            }
        }).then(res => {
            if(res.code === 0){
                this.setState({
                    orderInfo: res.result,
                    orderConfirmVisible: true
                })
            }
        })
    }

    handleFinishOrder = () => {
        let item = this.state.selectItem;

        axios.ajax({
            url:'/order/finish_order',
            data: {
                params: {
                    orderId: item.id
                }
            }
        }).then(res => {
            if(res.code === 0){
                message.info("Finish order successfully!")
                this.setState({
                    orderConfirmVisible: false,
                })
            }
            this.requestList();
        })
    }

    onRowClick = (record, index) => {
        let selectKey = [index];
        
        this.setState({
            selectedRowKeys: selectKey,
            selectItem: record
        })
    }

    openOrderDetail = () => {
        let item = this.state.selectItem;
        if(!item){
            Modal.info({
                title: 'Message',
                content: 'please select an order item'
            })
            return
        }
        window.open(`/#/common/order/detail/${item.id}`, '_blank');

    }

    render(){
        const columns = [
            {
                title: "Order ID",
                dataIndex: "order_sn"
            },
            {
                title: "Bike ID",
                dataIndex: "bike_sn"
            },
            {
                title: "User Name",
                dataIndex: "user_name"
            },
            {
                title: "Phone",
                dataIndex: "mobile"
            },
            {
                title: "Mileage",
                dataIndex: "distance",
                render(distance){
                    return distance/1000
                }
            },
            {
                title: "Total Time",
                dataIndex: "total_time"
            },
            {
                title: "Status",
                dataIndex: "status"
            },
            {
                title: "Start Time",
                dataIndex: "start_time"
            },
            {
                title: "End Time",
                dataIndex: "end_time"
            },
            {
                title: "Order Fee",
                dataIndex: "total_fee"
            },
            {
                title: "Final Fee",
                dataIndex: "user_pay"
            },
        ]

        const formItemLayout = {
            labelCol: {span:8},
            wrapperCol: {span:10}
        }

        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }

        return (
            <div>
                <Card className="card">
                    <FilterForm />
                </Card>
                <Card>
                    <Button type="primary" onClick={this.openOrderDetail}>Order Detail</Button>
                    <Button type="primary" 
                        onClick={this.handleConfirm}
                        style={{marginLeft:10}}>Finish Order</Button>
                </Card>
                <div className="content-wrap">
                    <Table 
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                        columns={columns}
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: ()=>{
                                    this.onRowClick(record, index)
                                }
                            }
                        }}
                        pagination={false}
                    />
                </div>
                <Modal
                    title="Finish Order"
                    visible={this.state.orderConfirmVisible}
                    onCancel={()=>{
                        this.setState({
                            orderConfirmVisible: false
                        })
                    }}
                    onOk={this.handleFinishOrder}
                    width={600}
                >
                    <Form layout="horizontal">
                        <FormItem label="Bike Number" {...formItemLayout}>
                            {this.state.orderInfo.bike_sn}
                        </FormItem>
                        <FormItem label="Remaining Battery" {...formItemLayout}>
                            {this.state.orderInfo.battery + "%"}
                        </FormItem>
                        <FormItem label="Start Time" {...formItemLayout}>
                            {this.state.orderInfo.start_time}
                        </FormItem>
                        <FormItem label="Current Location" {...formItemLayout}>
                            {this.state.orderInfo.location}
                        </FormItem>
                    </Form>

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
                <FormItem label="Order Time">
                    {
                        getFieldDecorator('start_time')(
                            <DatePicker showTime 
                            placeholder = "start time"
                            format="YYYY-MM-DD HH:mm:ss"/>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('end_time')(
                            <DatePicker showTime 
                            placeholder = "end time"
                            format="YYYY-MM-DD HH:mm:ss"/>
                        )
                    }
                </FormItem>

                <FormItem label="Order Status">
                    {
                        getFieldDecorator('status')(
                            <Select placeholder="All" className="select">
                                <Option value="1">In Progress</Option>
                                <Option value="2">Finished</Option>
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

