import React, {Component} from 'react';

import axios from '../../axios';
import {Table, Card, Modal} from 'antd';

export default class BasicTable extends Component{
    state = {
        dataSourceAPI: []
    }

    componentDidMount(){
        const data = [
            {
                id:'0',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'CA USA',
                time:'09:00'
            },
            {
                id: '1',
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: 'CA USA',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'Lily',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: 'CA USA',
                time: '07:00'
            },
        ]

        data.map((item, index)=> {
            item.key = index
        })

        this.setState({dataSource: data});
        this.request();
    }

    request = () => {
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: 1
                },
                // isShowLoading: false
            }
        }).then((res) => {
            if(res.code === 0){
                res.result.map((item, index) =>{
                    item.key = index
                })
                this.setState({
                    dataSourceAPI: res.result
                })
            }
        })
    }

    onRowClick = (record, index) => {
        let selectKey = [index];
        Modal.info({
            title: 'Information',
            content: `Hi, User name: ${record.userName}`
        })
        this.setState({
            selectedRowKeys: selectKey,
            selectItem: record
        })
    }

    render(){
        const columns = [
            {
                title : 'id',
                dataIndex: 'id'
            },
            {
                title : 'User Name',
                dataIndex: 'userName'
            },
            {
                title : 'Sex',
                dataIndex: 'sex',
                render(sex){
                    return sex === 1? 'Male' : 'Female'
                }
            },
            {
                title : 'Interest',
                dataIndex: 'interest',
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
                dataIndex: 'birthday'
            },
            {
                title : 'Address',
                dataIndex: 'address'
            },
            {
                title : 'Wake up time',
                dataIndex: 'time'
            }
        ]

        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }

        return (
            <div>
                <Card title="Basic Table" className="">
                    <Table 
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="Dynamically Renderring Table - Mock" style={{margin:"10 auto"}}>
                    <Table 
                        columns={columns}
                        dataSource={this.state.dataSourceAPI}
                        pagination={false}
                    />
                </Card>
                <Card title="Table with Radio Button" style={{margin:"10 auto"}}>
                    <Table 
                        columns={columns}
                        dataSource={this.state.dataSourceAPI}
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
                </Card>
            </div>
        )
    }
}


// {
//     "code": 0,
//     "msg": "",
//     "result|10": [{
//       "id|+1": 1,
//       userName: "@name",
//       "sex|1-2": 1,
//       "state|1-4": 1,
//       "interest|1-5": 1,
//       birthday: '2000-01-01',
//       address: 'CA USA',
//       time: '09:00'
//     }]
//   }