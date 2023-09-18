import React, { useState } from 'react';
import "../../Style/todo.css"

function Todo({todo}) {
    console.log(todo.completed)

    function toggleFinish() {
        console.log("test")
        todo.completed = !todo.completed;
    }

    console.log(todo)

    return (
        <div className="todo">
            <div className="headerTodo" onClick={toggleFinish}>
                <div className={todo.completed ? "finish" : "notfinish"}></div>
                <h4>{todo.titleToDo}</h4>
            </div>
            <p>{todo.todo}</p>
        </div>
    );
}

export default Todo;