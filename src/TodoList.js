import React, { Component } from 'react'
import 'antd/dist/antd.css'; 
import { Input,Button } from 'antd';

import { List, Typography } from 'antd';

import store from'./store/index.js'; // './store'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes.js';



class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    
    render() {
        return (
        <div style={{marginTop : '10px', marginLeft: '10px'}}>
            <div>
                <Input value = {this.state.inputValue} 
                placeholder='todo info' 
                style={{width:'300px', marginRight: '10px'}}
                onChange={this.handleInputChange}
                />
                <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
            </div>
        
        <List
        style={{width:'300px', marginTop: '10px'}}
        bordered
        dataSource={this.state.list}
        renderItem={(item, index) => (
          <List.Item onClick={this.handleItemDelete.bind(this, index)}>
            <Typography.Text mark></Typography.Text> {item}
          </List.Item>
        )}
        />
        </div>
        )
    }

    handleInputChange(e) {
        const action = {
            type: CHANGE_INPUT_VALUE,
            value: e.target.value
        }
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState);
    }

    handleBtnClick() {
        const action = {
            type: ADD_TODO_ITEM,
        };
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = {
            type: DELETE_TODO_ITEM,
            index
        }
        store.dispatch(action);
    }
 }

export default TodoList;