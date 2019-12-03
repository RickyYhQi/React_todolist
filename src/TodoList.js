import React, {Component,Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = { //state 负责存储组件数据
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    render(){
    return (
        <Fragment>
            {
                // 注释
            }
            <div>
                <label htmlFor='insertArea'>input value</label>
                <input  id='insertArea'
                        className='input'
                        value={this.state.inputValue}    
                        onChange={this.handleInputChange} /> 
            <button onClick={this.handleBtnClick}>submit</button>
            </div>
            <ul>
                {this.getTodoItem()}

            </ul>
        </Fragment>
    )
    }

getTodoItem() {

    return this.state.list.map((item,index) => {
        return (
            <TodoItem 
            key={index}
            content={item} 
            index={index}
            deleteItem={this.handleItemDelete}/>
            )
        })
}

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
                inputValue : value
        }));
    }
    handleBtnClick(){
        this.setState((prevState) =>({
            list: [...prevState.list, prevState.inputValue], //展开运算符, 把以前的内容展开生成新的数组
            inputValue: ''
        }));
    }
    handleItemDelete(index){
        // immutable
        // state not allow user do any change
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        });
        console.log(index);
    }
}

export default TodoList;
