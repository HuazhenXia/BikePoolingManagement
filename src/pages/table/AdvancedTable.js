import React, {Component} from 'react';

import {Table, Card, Modal, Button, message} from 'antd';
import axios from '../../axios';

export default class AdvancedTable extends Component{

    state={}

    params = {
        page: 1
    }

    componentDidMount() {
        this.request();
    }

    request = () => {
        // let _this = this;
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: this.params.page
                },
                // isShowLoading: false
            }
        }).then((res) => {
            if(res.code === 0){
                // console.log(res.result["list"])
                res.result.list.map((item, index) =>{
                    item.key = index
                })
                this.setState({
                    dataSourceAPI: res.result.list,
                    // selectedRowKeys: [],
                    // selectedRows: null,
                    // pagination: Utils.pagination(res, (current)=>{
                    //     _this.params.page = current;
                    //     this.request()
                })
                
            }
        })
    }

    render(){
        const columns = [
            {
                title : 'id',
                dataIndex: 'id',
                width:60
            },
            {
                title : 'User Name',
                dataIndex: 'userName',
                width: 150
            },
            {
                title : 'Sex',
                dataIndex: 'sex',
                width: 70,
                render(sex){
                    return sex === 1? 'Male' : 'Female'
                }
            },
            {
                title : 'Interest',
                dataIndex: 'interest',
                width: 90,
                render(state){
                    let config = {
                        '1': 'Football',
                        '2': 'Shopping',
                        '3': 'Work out',
                        '4': 'Run',
                        '5': 'Film',
                        '6': 'Reading',
                        '7': 'Basketball',
                        '8': 'Kongfu',
                        '9': 'Cooking',
                    }
                    return config[state]
                }
            },
            {
                title : 'State',
                dataIndex:'state',
                width: 120,
                render(state){
                    let config = {
                        '1': 'Energetic Teenage',
                        '2': 'Beautiful Lady',
                        '3': 'Geek',
                        '4': 'Gym guy',
                        '5': 'Film Fan'
                    }
                    return config[state];
                }
            },

            {
                title : 'Birthday',
                width: 90,
                dataIndex: 'birthday'
            },
            {
                title : 'Address',
                width: 120,
                dataIndex: 'address'
            },
            {
                title : 'Wake up time',
                width: 100,
                dataIndex: 'time'
            }
        ]

        const columnsLeft = [
            {
                title : 'id',
                dataIndex: 'id',
                width:60,
                fixed: 'left'
            },
            {
                title : 'User Name',
                dataIndex: 'userName',
                width: 150,
                fixed: 'left'
            },
            {
                title : 'Sex',
                dataIndex: 'sex',
                width: 70,
                render(sex){
                    return sex === 1? 'Male' : 'Female'
                }
            },
            {
                title : 'Interest',
                dataIndex: 'interest',
                width: 90,
                render(state){
                    let config = {
                        '1': 'Football',
                        '2': 'Shopping',
                        '3': 'Work out',
                        '4': 'Run',
                        '5': 'Film',
                        '6': 'Reading',
                        '7': 'Basketball',
                        '8': 'Kongfu',
                        '9': 'Cooking',
                    }
                    return config[state]
                }
            },
            {
                title : 'State',
                dataIndex:'state',
                width: 120,
                render(state){
                    let config = {
                        '1': 'Energetic Teenage',
                        '2': 'Beautiful Lady',
                        '3': 'Geek',
                        '4': 'Gym guy',
                        '5': 'Film Fan'
                    }
                    return config[state];
                }
            },

            {
                title : 'Birthday',
                width: 110,
                dataIndex: 'birthday'
            },
            {
                title : 'Birthday',
                width: 110,
                dataIndex: 'birthday'
            },
            {
                title : 'Birthday',
                width: 110,
                dataIndex: 'birthday'
            },
            {
                title : 'Birthday',
                width: 110,
                dataIndex: 'birthday'
            },
            {
                title : 'Birthday',
                width: 110,
                dataIndex: 'birthday'
            },
            {
                title : 'Birthday',
                width: 110,
                dataIndex: 'birthday'
            },
            
            {
                title : 'Address',
                width: 120,
                dataIndex: 'address'
            },
            {
                title : 'Wake up time',
                width: 100,
                fixed: 'right',
                dataIndex: 'time'
            }
        ]


        return (
            <div>
                <Card title="Frozen Table Head">
                    <Table 
                        columns={columns}
                        dataSource={this.state.dataSourceAPI}
                        pagination={false}
                        scroll={{y:240}}
                    />
                </Card>
                <Card title="Frozen Left Column" style={{margin:"10px auto"}}>
                    <Table 
                        columns={columnsLeft}
                        dataSource={this.state.dataSourceAPI}
                        pagination={false}
                        scroll={{x:1450}}
                    />
                </Card>
            </div>

        )
    }
}
