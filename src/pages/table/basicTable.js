import React, {Component} from 'react';

import axios from '../../axios';
import {Table, Card} from 'antd';

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
        this.setState({dataSource: data});
        this.request();
    }

    request = () => {
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: 1
                }
            }
        }).then((res) => {
            if(res.code === 0){
                this.setState({
                    dataSourceAPI: res.result
                })
            }
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
                dataIndex: 'sex'
            },
            {
                title : 'Interest',
                dataIndex: 'interest'
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

        return (
            <div>
                <Card title="Basic Table" className="">
                    <Table 
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="Dynamically Renderring Table" style={{margin:"10 auto"}}>
                    <Table 
                        columns={columns}
                        dataSource={this.state.dataSourceAPI}
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