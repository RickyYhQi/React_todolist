import React, {Component,Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css';

class TodoList extends Component{
    constructor(props) {
        super(props);
        // 当组件state和props发生变化时 render就重新执行
        this.state = { //state 负责存储组件数据
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    //在组件即将被挂载到页面的时候执行componentWillMount

    //在组件被更新之前 会自动执行shouldComponentUpdata return true or false
    //组件被更新之前会被自动执行componentwillupdate 如果should 返回true则执行
    //组件更新之后执行render之后会执行componentdidupdate



    
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
                        onChange={this.handleInputChange}
                 /> 
            <button onClick={this.handleBtnClick}>submit</button>
            </div>
            <ul ref={(ul) => {this.ul = ul}}>
                {this.getTodoItem()}
            </ul>

        </Fragment>
    )
    }


    componentDidMount() {
        axios.get('/api/todolist').then(() => alert('succ')).catch(()=>alert('error'))
        // put ajax request
    }
// 在组件被挂载之后自动执行componentDidMount

getTodoItem() {

    return this.state.list.map((item,index) => {
        return (
            <TodoItem 
            key={item}
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
