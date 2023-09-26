import React, { useState } from 'react';
import "../../Style/todo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";


function Todo(props) {
    const [edit, SetEdit] = useState(false)

    let setTodo = props.setTodo
    let todoEdit = props.todoEdit
    let todo = props.todo

    function handleClick() {
        // console.log("mince")
        setTodo(props.nameList, todo.id);
    }

    function handleClickEdit(e) {
        SetEdit(!edit);
    }

    function OnchangeEdit(e) {
        console.log("e : ", e);
        console.log("e : ", e.target.value);
        todoEdit(props.nameList, todo.id, e.target.value);
    }

    return (
        <div className="todo">
            <div className="headerTodo">
                <div className={`checkBox ${todo.completed ? "finish" : "notfinish"}`} onClick={handleClick}></div>
                <h4>{todo.title}</h4>
            </div>

            <div className="bottomTodo">
                {edit ?
                    (<input type="text" value={todo.title} onChange={e => OnchangeEdit(e)}/>) :
                    (<p>{todo.title}</p>)

                }

                <div className="editIconContainer" onClick={handleClickEdit}>
                    <FontAwesomeIcon className="editIcon" icon={faPenToSquare}/>
                </div>
            </div>
        </div>
    );
}

export default Todo;