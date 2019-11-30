import React, {Fragment} from 'react'


function TodoList() {
    return (
        <Fragment>
            <div><input /><button>submit</button></div>
            <ul>
                <li>learning english</li>
                <li>learning react</li>
            </ul>
        </Fragment>
    );

}

export default TodoList;
