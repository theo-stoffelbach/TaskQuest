import React, { useEffect, useRef, useState } from 'react';
import "../../Style/todo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";


function Todo(props) {
    const [edit, setEdit] = useState(false)
    const [updateText, setUpdateText] = useState(false)
    const inputRef = useRef(null);

    let setTodo = props.setTodo
    let todoEdit = props.todoEdit
    let todo = props.todo


    useEffect(() => {
        const funcInputSave = (e) => {
            if (inputRef.current !== null && !inputRef.current.parentNode.contains(e.target)) {
                console.log(inputRef.current.getElementsByClassName("TextArea")[0].value)
                setEdit((prevEdit) => !prevEdit);
            }
        }

        document.addEventListener("click", funcInputSave)

        return () => {
            document.removeEventListener('click', funcInputSave);
        };
    }, [inputRef]);

    function handleClick() {
        setTodo(props.nameList, todo._id);
    }

    function handleClickEdit() {
        setEdit(!edit);
    }

    function OnchangeEdit(e) {
        console.log("props ", props.nameList)
        todoEdit(props.nameList, todo._id, e.target.value);
    }

    return (
        <div className="todo">
            <div className="headerTodo">
                <div className={`checkBox ${todo.completed ? "finish" : "notfinish"}`} onClick={handleClick}></div>
                <h4>{todo.titleToDo}</h4>
            </div>
            <div className="bottomTodo">
                {edit ?
                    (
                        <div className="inputUpdate" ref={inputRef}>
                            <textarea className="TextArea" value={todo.description} onChange={e => OnchangeEdit(e)}/>
                            <i className="editEnable"></i>
                        </div>

                    ) :
                    (<p>{todo.description}</p>)
                }
                <div className="editIconContainer" onClick={handleClickEdit}>
                    <FontAwesomeIcon className="editIcon" icon={faPenToSquare} style={{color: "#ffffff",}}/>
                </div>
            </div>
        </div>
    );
}

export default Todo;