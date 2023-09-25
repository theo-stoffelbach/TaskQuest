import React, { useEffect, useState } from 'react';
import TodoList from "./TodoList";
import "../../Style/home.css"

function Home() {
    const [todoLists, setTodoLists] = useState(null)


    useEffect(() => {
        function createToDo() {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(response => {
                    const responsePart1 = {
                        id: 1,
                        nameTodo: "Maison",
                        todo: response.splice(0, 5)
                    }
                    const responsePart2 = {
                        id: 3,
                        nameTodo: "Minecraft",
                        todo: response.splice(0, 5)
                    }

                    setTodoLists([responsePart1, responsePart2]);
                })
        }

        return () => createToDo()
    }, []);

    // useEffect(() => {
    //     if (todoLists !== null) console.log(todoLists)
    // }, [todoLists]);

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
                            if (Lists.id === listId) {
                                // console.log("Lists.id")
                                // console.log(Lists.todo)
                                Lists.todo.forEach(todo => {
                                    if (todo.id === id) todo.completed = !todo.completed;
                                })
                            }
                        })
                        // console.log(props)
                        setTodoLists(todos)
                    }

                    function toggleToDoEdit(listId, id, value) {
                        console.log("i : ")
                        const todos = [...todoLists];
                        // console.log(todos)
                        todos.forEach(Lists => {
                            if (Lists.id === listId) {
                                Lists.todo.forEach(todo => {
                                    if (todo.id === id) todo.title = value;
                                })
                            }
                        })
                        // console.log(props)
                        setTodoLists(todos)
                    }

                    return (<TodoList key={index}
                                      props={todoList}
                                      setTodo={setTodoLists}
                                      changeTodo={toggleToDoCompleted}
                                      todoEdit={toggleToDoEdit}/>)
                })}
            </div>
        );
    }
}

export default Home;