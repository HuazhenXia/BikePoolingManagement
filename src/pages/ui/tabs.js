import React, {Component} from 'react';

import {Card, Tabs, Icon, message} from 'antd';
import './ui.less';

const TabPane = Tabs.TabPane;

export default class Tab extends Component{

    newTabIndex = 0;

    showTab = (key) => {
        message.info("Hi, you have chosen Tab"+key)
    }

    componentWillMount(){
        const panes = [
            {
                title: 'Tab1',
                content: 'Tab1',
                key: '1'
            },
            {
                title: 'Tab2',
                content: 'Tab2',
                key: '2'
            },
            {
                title: 'Tab3',
                content: 'Tab3',
                key: '3'
            },
        ]
        this.setState({
            activeKey: panes[0].key,
            panes
        })
    }

    onChange = (activeKey)=>{
        this.setState({ activeKey })
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
      }
    
      remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
      }
    

    render(){
        return (
            <div>
                <Card title="Tabs" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.showTab}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tabs with Icons" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.showTab}>
                        <TabPane tab={<span><Icon type="plus"/>Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab={<span><Icon type="edit"/>Tab 2</span>} key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type="delete"/>Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Editable Tabs" className="card-wrap">
                    <Tabs 
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}>

                        {
                            this.state.panes.map((panel) => {
                                return <TabPane 
                                    tab={panel.title}
                                    key={panel.key}

                                />
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}
