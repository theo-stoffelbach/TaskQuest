import React, { useEffect, useState } from 'react';
import axios from 'redaxios';

import TodoList from "./TodoList";
import "../../Style/home.css"

function Home() {
    const [todoLists, setTodoLists] = useState(null)
    const userId = "6517267796c2b61eb0ee3ab4"

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/api/user    ',
        })
            .then(response => {
                console.log(response)
                setTodoLists(response.data[0].listtodo);
            }).catch(err => console.error("error : ", err))
    }, []);

    // useEffect(() => {
    //     setTodoLists(
    //         {
    //             // "user": {
    //             "_id": "6517267796c2b61eb0ee3ab4",
    //             "username": "Test42",
    //             "password": "No",
    //             "listtodo": [
    //                 {
    //                     "namelisttodo": "Home",
    //                     "todos": [
    //                         {
    //                             "titleToDo": "Title One !",
    //                             "description": "rerzeareazrere dedede ffs rere df rdeerere",
    //                             "completed": false,
    //                             "_id": "6517267796c2b61eb0ee3ab6"
    //                         },
    //                         {
    //                             "titleToDo": "Title two !",
    //                             "description": "Other something, test",
    //                             "completed": false,
    //                             "_id": "6517267796c2b61eb0ee3ab7"
    //                         },
    //                         {
    //                             "titleToDo": "Toulouse man !",
    //                             "description": "Other something",
    //                             "completed": false,
    //                             "_id": "6517267796c2b61eb0ee3ab8"
    //                         }
    //                     ],
    //                     "_id": "6517267796c2b61eb0ee3ab5"
    //                 },
    //                 {
    //                     "namelisttodo": "Usualy",
    //                     "todos": [
    //                         {
    //                             "titleToDo": "Title two !",
    //                             "description": "Something",
    //                             "completed": false,
    //                             "_id": "6517267796c2b61eb0ee3aba"
    //                         },
    //                         {
    //                             "titleToDo": "Title two !",
    //                             "description": "Other something",
    //                             "completed": false,
    //                             "_id": "6517267796c2b61eb0ee3abb"
    //                         },
    //                         {
    //                             "titleToDo": "Toulouse man !",
    //                             "description": "Other something",
    //                             "completed": false,
    //                             "_id": "6517267796c2b61eb0ee3abc"
    //                         }
    //                     ],
    //                     "_id": "6517267796c2b61eb0ee3ab9"
    //                 }
    //             ],
    //             "createdAt": "2023-09-29T19:33:11.315Z",
    //             "updatedAt": "2023-10-05T08:52:16.540Z",
    //             "__v": 0
    //             // }
    //         }
    //     )
    // }, []);

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
                    console.log("It's Work");
                })
                .catch(err => {
                    console.log("Error at : ", err)
                })
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


    if (todoLists === null) {
        console.log("Loading ... ")
    } else {

        return (
            <div id="allTodos">
                {todoLists.map((todoList, index) => {
                    return (<TodoList key={index}
                                      props={todoList}
                                      ListId={todoList._id}
                                      setTodo={setTodoLists}
                                      changeTodo={toggleToDoCompleted}
                                      todoEdit={toggleToDoEdit}
                    />)
                })}
            </div>
        );
    }
}

export default Home;