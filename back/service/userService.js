const userModel = require('../model/user.model');

const todoListTest = [
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
]

module.exports.register = async () => {
    try {
        return await userModel.create({
            ìd: 0,
            username: "Snake",
            password: "Snake123",
            listtodos: todoListTest

        });
    } catch (err) {
        return "error to put data in DB" + err;
    }
}