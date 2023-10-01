import React from 'react';
import "../../Style/todoList.css";
import Todo from "./Todo";

function TodoList(props) {

    return (
        <div className="todoList">
            <div className="headerTodos">
                <h2>{props.props.nameTodo}</h2>
                <h3>{props.props.todo.filter(test => {
                    return !test.completed;
                    // return test
                }).length}</h3>
            </div>
            <div className="todos">
                {props.props.todo.map(todo => {
                    return <Todo key={todo.id}
                                 todo={todo}
                                 setTodo={props.changeTodo}
                                 todoEdit={props.todoEdit}
                                 nameList={props.props.id}
                    />
                })}
            </div>
        </div>
    );
}

export default TodoList;