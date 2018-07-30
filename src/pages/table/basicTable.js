import React, {Component} from 'react';

import axios from 'axios';
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
        let baseUrl = " https://easy-mock.com/mock/5b5e5bded041e45d5c3c5241/shared-bikes";
        axios.get(baseUrl+'/table/list').then((res) => {
            if(res.status === 200 && res.data.code === 0){
                // console.log(res.data.result.list);
                this.setState({
                    dataSourceAPI: res.data.result
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
