import React, { useEffect, useState } from 'react';
import TodoList from "./TodoList";
import "../../Style/home.css"

function Home() {
    const [todoLists, setTodoLists] = useState([]);

    useEffect(() => {
        function getData() {
            // setTodoLists(await axios.get())
            setTodoLists([
                {
                    id: 1,
                    nameTodo: "Home",
                    todo: [
                        {
                            id: 1,
                            titleToDo: "Title One !",
                            do: "Something",
                            completed: false
                        },
                        {
                            id: 2,
                            titleToDo: "Title two !",
                            todo: "Other something",
                            completed: false
                        },
                        {
                            id: 3,
                            titleToDo: "Toulouse man !",
                            todo: "Other something",
                            completed: false
                        },]
                },
                {
                    id: 2,
                    nameTodo: "Usualy",
                    todo: [
                        {
                            id: 1,
                            titleToDo: "Title two !",
                            do: "Something",
                            completed: false
                        },
                        {
                            id: 2,
                            titleToDo: "Title two !",
                            todo: "Other something",
                            completed: false
                        },
                        {
                            id: 3,
                            titleToDo: "Toulouse man !",
                            todo: "Other something",
                            completed: false
                        },
                    ]
                }
            ])

            console.log("end")
        }

        return () => {
            console.log("merde ")
            getData();
        };
    }, [])

    if (todoLists === []) {
        console.log("Not found :/ ")
    } else {
        return (
            <div id="allTodos">
                {todoLists.map((todoList, index) => {
                    return (<TodoList key={index} props={todoList}/>)
                })}
            </div>
        );
    }
}

export default Home;