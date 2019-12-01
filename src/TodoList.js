import React, {Component,Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = { //state 负责存储组件数据
            inputValue: '',
            list: []
        }
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
                        onChange={this.handleInputChange.bind(this)} />  {/* first line 写死只读 需要监听并改变this对象 */}
            <button onClick={this.handleBtnClick.bind(this)}>submit</button></div>
            <ul>
                {
                    this.state.list.map((item,index) => {
                    return (
                        <div>
                        <TodoItem 
                        content={item} 
                        index={index}
                        deleteItem={this.handleItemDelete.bind(this)}/>
                        </div>
                        )
                    })
                }

            </ul>
        </Fragment>
    )
    }
    handleInputChange(e) {
        console.log(this.state)
        //console.log(e.target.value);
        //不能通过直接引用改变值 必须用setState
        this.setState({
            inputValue: e.target.value
        })
    }
    handleBtnClick(){
        this.setState({
            list: [...this.state.list, this.state.inputValue], //展开运算符, 把以前的内容展开生成新的数组
            inputValue: ''
        })

    }
    handleItemDelete(index){
        // immutable
        // state not allow user do any change
        const list = [...this.state.list];
        list.splice(index, 1); // delete index

        this.setState({
            list: list
        })
        console.log(index)
    }
}

export default TodoList;
