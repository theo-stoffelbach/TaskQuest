import React, { useEffect, useState } from 'react';
import TodoList from "./TodoList";
import "../../Style/home.css"

function Home() {
    const [todoLists, setTodoLists] = useState(null)
    const [user, setEdit] = useState(null)


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
                    function toggleToDoCompleted(listId, id) {
                        console.log("i : " + id)
                        const todos = [...todoLists];
                        // console.log(todos)
                        todos.forEach(Lists => {
                            if (Lists._id === listId) {
                                Lists.todos.forEach(todo => {
                                    if (todo._id === id) todo.completed = !todo.completed;
                                })
                            }
                        })
                        // console.log(props)
                        setTodoLists(todos)
                    }

                    function toggleToDoEdit(listId, id, value) {
                        const todos = [...todoLists];
                        // console.log(todos)
                        todos.forEach(Lists => {
                            if (Lists._id === listId) {
                                Lists.todos.forEach(todo => {
                                    if (todo._id === id) todo.description = value;
                                })
                            }
                        })
                        // console.log(props)
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