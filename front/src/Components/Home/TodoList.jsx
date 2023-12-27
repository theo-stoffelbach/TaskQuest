import React from 'react';
import "../../Style/todoList.css";
import Todo from "./Todo";

function TodoList(props) {

    function addTodos() {
        console.log("test");
        
    }


    return (
        <div className="todoList">
            <div className="headerTodos">
                <h2>{props.props.namelisttodo}</h2>
                <h3>{props.props.todos.filter(test => {
                    return !test.completed;
                    // return test
                }).length}</h3>
            </div>
            <div className="todos">
                {props.props.todos.map(todo => {
                    return <Todo key={todo._id}
                                 todo={todo}
                                 setTodo={props.changeTodo}
                                 todoEdit={props.todoEdit}
                                 nameList={props.props._id}
                    />
                })}
            </div>
            <div className="bottomTodoslist">
                <div className="addLogo" onClick={addTodos}>
                    <i className="verticalStick"></i>
                    <i className="horizontalStick"></i>
                </div>
            </div>
        </div>
    );
}

export default TodoList;