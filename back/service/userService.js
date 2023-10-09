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

const register = async (username, password) => {
    try {
        return await userModel.create({username, password, listtodo});
    } catch (err) {
        return "error to put data in DB" + err;
    }
}

const createTodo = async (id, idTodo) => {
    try {
        const user = await readOneUserService(id);
        console.log(user)
        user.listtodo.forEach(listTodo => {
            console.log(listTodo)
            if (listTodo._id === idTodo) {
                console.log("test : ", listTodo)
            }
        })

    } catch (err) {
        return "error to put data in DB" + err;
    }
}

const updateUserService = async (id, changeValue) => {
    try {
        console.log("listtodo : ", changeValue)
        return await userModel.findOneAndUpdate(
            {_id: id},
            changeValue
        );
    } catch (err) {
        return "error to put data in DB" + err;
    }
}

const readAllUsersService = async () => {
    try {
        const user = await userModel.find().select();
    } catch (err) {
        const user = {error: "error to put data in DB" + err}
    }
    return user = {error: "No try or catch work ???"};
}

const readOneUserService = async (id) => {
    console.log("id : ", id)
    // try {
    //     return await userModel.findOne({_id: id});
    // } catch (err) {
    //     return {error: "error to put data in DB" + err}
    // }
}

const deleteUserService = async (id, changeValue) => {
    try {
        return await userModel.findOneAndDelete(
            {_id: id}
        );
    } catch (err) {
        return "error to put data in DB" + err;
    }
}

const test = async () => {
    try {
        return await testModel.create({nom, prenom});
    } catch (err) {
        return "error to put data in DB" + err;
    }
}

module.exports = {
    register,
    createTodo,
    updateUserService,
    readAllUsersService,
    readOneUserService,
    deleteUserService,
    test
}