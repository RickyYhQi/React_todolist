import React, {Component,Fragment} from 'react'



class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = { //state 负责存储组件数据
            inputValue: 'hello!!',
            list: []
        }
    }
    render(){
    return (
        <Fragment>
            <div><input value={this.state.inputValue}    
                        onChange={this.handleInputChange.bind(this)} />  {/* first line 写死只读 需要监听并改变this对象 */}
            <button>submit</button></div>
            <ul>
                <li>learning english</li>
                <li>learning react</li>
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
}

export default TodoList;
