import React, { useEffect, useState } from 'react';
import axios from 'redaxios';

import TodoList from "./TodoList";
import "../../Style/home.css"
import todoList from "./TodoList";

function Home() {
    const [todoLists, setTodoLists] = useState(null)
    const userId = "6517267796c2b61eb0ee3ab4"

    useEffect(() => {
        function createToDo() {
            fetch('http://localhost:8080/api/')
                .then(response => response.json())
                .then(response => {
                    console.log(response[0].listtodo)
                    setTodoLists(response[0].listtodo);
                })
        }

        return () => createToDo()
    }, []);

    if (todoLists === null) {
        console.log("Loading ... ")
    } else {

        return (
            <div id="allTodos">
                {todoLists.map((todoList, index) => {

                    function SaveToDo() {
                        if (todoLists !== null) {
                            axios({
                                method: 'post',
                                url: 'http://localhost:8080/api/update',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                data: {
                                    id: userId,
                                    changeValue: {
                                        listtodo: todoLists
                                    }
                                }
                            })
                                .then(() => {
                                    console.log("Miam");
                                })
                            console.log("deed");
                        }
                    }

                    function toggleToDoCompleted(listId, id) {
                        console.log("i : " + id)
                        const todos = [...todoLists];
                        todos.forEach(Lists => {
                            if (Lists._id === listId) {
                                Lists.todos.forEach(todo => {
                                    if (todo._id === id) todo.completed = !todo.completed;
                                })
                            }
                        })
                        setTodoLists(todos)
                    }

                    function toggleToDoEdit(listId, id, value) {
                        const todos = [...todoLists];
                        todos.forEach(Lists => {
                            if (Lists._id === listId) {
                                Lists.todos.forEach(todo => {
                                    if (todo._id === id) todo.description = value;
                                    SaveToDo();
                                })
                            }
                        })
                        setTodoLists(todos)
                    }

                    return (<TodoList key={index}
                                      props={todoList}
                                      ListId={todoList._id}
                                      setTodo={setTodoLists}
                                      changeTodo={toggleToDoCompleted}
                                      todoEdit={toggleToDoEdit}/>)
                })}
            </div>
        );
    }
}

export default Home;