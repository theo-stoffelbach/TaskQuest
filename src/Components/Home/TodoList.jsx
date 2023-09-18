import React from 'react';
import "../../Style/todoList.css";
import Todo from "./Todo";
import todo from "./Todo";

function TodoList(props) {

    return (
        <div id="todoList">
            <div className="headerTodos">
                <h2>{props.props.nameTodo}</h2>
                <h3>{props.props.todo.length}</h3>
            </div>
            <div className="todos">
                {props.props.todo.map((todo, index) => {
                    return <Todo key={todo.id}
                                 todo={todo}
                                 setTodo={props.changeTodo}
                                 nameList={props.props.id}
                    />
                })}
            </div>
        </div>
    );
}

export default TodoList;