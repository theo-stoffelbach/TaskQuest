const userModel = require('../model/user.model');
const testModel = require('../model/test.model');

const nom = "theo";
const prenom = "theos123";

const listtodo = [
    {
        namelisttodo: "Home",
        todos: [
            {
                titleToDo: "Title One !",
                description: "Something",
                completed: false
            },
            {
                titleToDo: "Title two !",
                description: "Other something",
                completed: false
            },
            {
                titleToDo: "Toulouse man !",
                description: "Other something",
                completed: false
            },
        ]
    },
    {
        namelisttodo: "Usualy",
        todos: [
            {
                titleToDo: "Title two !",
                description: "Something",
                completed: false
            },
            {
                titleToDo: "Title two !",
                description: "Other something",
                completed: false
            },
            {
                titleToDo: "Toulouse man !",
                description: "Other something",
                completed: false
            },
        ]
    }
]

module.exports.register = async (username, password) => {
    try {
        return await userModel.create({username, password, listtodo});
    } catch (err) {
        return "error to put data in DB" + err;
    }
}

module.exports.updateUserService = async (id, changeValue) => {
    try {
        return await userModel.findOneAndUpdate(
            {_id: id},
            changeValue
        );
    } catch (err) {
        return "error to put data in DB" + err;
    }
}

module.exports.updateATodo = async (id, changeTodo) => {
    try {
        return await userModel.findOneAndUpdate(
            {_id: id},
            changeValue
        );
    } catch (err) {
        return "error to put data in DB" + err;
    }
}

module.exports.test = async () => {
    try {
        return await testModel.create({nom, prenom});
    } catch (err) {
        return "error to put data in DB" + err;
    }
}