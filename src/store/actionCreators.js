import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from "./actionTypes";

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
