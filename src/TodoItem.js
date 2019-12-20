import React,{Component} from 'react';
import PropTypes from 'prop-types'
class TodoItem extends Component {



    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        const { content , test} = this.props;
    return (<div onClick={this.handleClick}>{test}-{content}</div>)
    }

    handleClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index)

    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number

}
// 执行componentwillreceiveprops时需要父组件的render函数执行并传参
// 组件第一次存在于父组件中
// 组件之前已经存在于父组件中

TodoItem.defaultProps ={
    test: 'hello world'
}
// prop type verify
export default TodoItem;

