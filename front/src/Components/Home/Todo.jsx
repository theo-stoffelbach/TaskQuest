import React, { useEffect, useRef, useState } from 'react';
import "../../Style/todo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";


function Todo({setTodo, todoEdit, todo, nameList}) {
    const [edit, setEdit] = useState(false)
    const [updateText, setUpdateText] = useState(todo.description)
    const [click, setClick] = useState(0)
    const [clickToEditCount, setClickToEditCount] = useState(0)

    const todoClickCountnRef = useRef(null);
    const setclickToEditcouCtRef = useRef(null);
    const todoRef = useRef(null);
    const inputRef = useRef(null);
    todoClickCountnRef.current = clickToEditCount;
    setclickToEditcouCtRef.current = setClickToEditCount;

    useEffect(() => {
        const funcInputSave = (e) => {
            setclickToEditcouCtRef.current(prevClickToEditcount => prevClickToEditcount + 1);

            if (todoClickCountnRef === 2) {
                setTimeout(() => {
                    setclickToEditcouCtRef.current(0);
                    console.log("NOPE")
                }, 500)
                return;
            }

            // console.log(todoClickCountnRef)

            // console.log(e.target)
            // console.log(!todoRef.current.contains(e.target))

            // console.log("edit : Y")
            if (todoRef.current !== null && !todoRef.current.contains(e.target)) {
                // console.log("edit : ", inputRef.current.contains(e.target))
                // console.log("edit : Yes")
                // console.log(todoRef.current)
                // console.log(!todoRef.current.contains(e.target))
                // console.log(todoRef.current)
                // console.log(todoRef.current.contains)
                // console.log("todoRef : ", todoRef.current.contains(e.target))

                // let value = inputRef.current.getElementsByClassName("TextArea")[0].value
                // setEdit((prevEdit) => !prevEdit);
                // todoEdit(nameList, todo._id, value);
            }
        }

        document.addEventListener("click", funcInputSave);

        return () => {
            document.removeEventListener("click", funcInputSave)
        }
    }, [setClickToEditCount]);

    function handleClick() {
        setTodo(nameList, todo._id);
    }

    function handleClickInputToEdit() {
        if (click === 0) {
            setClick(prevClick => prevClick + 1);
            setTimeout(() => {
                setClick(0);
            }, 500)
        } else {
            setEdit(!edit)
            setClick(0)
        }
    }

    function handleClickEdit() {
        setEdit(!edit);
        if (!edit) {
            return
        }
        todoEdit(nameList, todo._id, inputRef.current.getElementsByClassName("TextArea")[0].value);
    }

    return (
        <div className="todo" ref={todoRef}>
            <div className="headerTodo">
                <div className={`checkBox ${todo.completed ? "finish" : "notfinish"}`} onClick={handleClick}></div>
                <h4>{todo.titleToDo}</h4>
            </div>
            <div className="bottomTodo">
                {edit ?
                    (
                        <div className="inputUpdate" ref={inputRef}>
                            <textarea className="TextArea" value={updateText}
                                      onChange={e => setUpdateText(e.target.value)
                                      }/>
                            <i className="editEnable"></i>
                        </div>

                    ) :
                    (<p onClick={handleClickInputToEdit}>{todo.description}</p>)
                }
                <div className="editIconContainer" onClick={handleClickEdit}>
                    <FontAwesomeIcon className="editIcon" icon={faPenToSquare} style={{color: "#ffffff",}}/>
                </div>
            </div>
        </div>
    );
}

export default Todo;
