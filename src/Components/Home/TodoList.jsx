import React from 'react';
import "../../Style/todoList.css";
import Todo from "./Todo";

function TodoList(props) {
    console.log("mince")
    // console.log(props)
    return (
        <div id="todoList">
            <div className="headerTodos">
                <h2>{props.props.nameTodo}</h2>
                <h3>{props.props.todo.length}</h3>
            </div>
            <div className="todos">
                {props.props.todo.map((todo, index) => {
                    return <Todo key={todo.id} todo={todo}/>
                })}
            </div>
        </div>
    );
}

export default TodoList;