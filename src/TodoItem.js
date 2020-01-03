import React,{Component} from 'react';
import PropTypes from 'prop-types'
class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content != this.props.content) {
            return true;
        } else {
        return false;
        }
    }



    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        const { content } = this.props;
    return (<div onClick={this.handleClick}>{content}</div>)
    }

    handleClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index)

    }
}


TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number

}
// 执行componentwillreceiveprops时需要父组件的render函数执行并传参
// 组件第一次存在于父组件中
// 组件之前已经存在于父组件中


// prop type verify
export default TodoItem;

