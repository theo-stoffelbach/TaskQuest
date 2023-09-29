const userModel = require('../model/user.model');
const testModel = require('../model/test.model');

const todoListTest = [
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
    const listtodo = todoListTest;

    try {
        console.log("essaye")
        const user = await userModel.create({username, password, listtodo});
        console.log("ca marche")
        return user
    } catch (err) {
        return "error to put data in DB" + err;
    }
}

module.exports.test = async () => {
    const listtodo = todoListTest;
    try {
        let nom = "theo";
        let prenom = "theos123";
        console.log("essaye")
        const user = await testModel.create({nom, prenom});
        console.log("ca marche")
        return user
    } catch (err) {
        return "error to put data in DB" + err;
    }
}