import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from "./actionTypes";
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});


export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});



export const getTodoList = () => {
    return (dispatch) =>{
        axios.get('/list.json').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            console.log(data)
            dispatch(action);
        })
    }
}
//principle of designing redux
// store is unique
// only sotre can update itself
// reducer must be a pure function (given fix input must have fix output)
// best to keep the original input value for reducer(just use deep copy)


// core API
// createStore
// store.dispatch
// store.getState
// store.subscribe
