import React from 'react';
import "../../Style/todo.css"
import { logDOM } from "@testing-library/react";

function Todo(props) {
    let setTodo = props.setTodo
    let todo = props.todo

    function handleClick() {
        // console.log("mince")
        setTodo(props.nameList, todo.id);
    }

    return (
        <div className="todo">
            <div className="headerTodo">
                <div className={`checkBox ${todo.completed ? "finish" : "notfinish"}`} onClick={handleClick}></div>
                <h4>{todo.title}</h4>
            </div>
            <p>{todo.title}</p>
        </div>
    );
}

export default Todo;