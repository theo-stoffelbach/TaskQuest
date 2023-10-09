const userModel = require('../model/user.model');
const userService = require('../service/userService');

module.exports.register = async (req, res) => {
    const {name, password} = req.body;

    const user = await userService.register(name, password);
    if (user) res.status(201).json({user: user})
    else res.status(404).json({message: "404 Not found ..."})
}

module.exports.updateUser = async (req, res) => {
    const {id, changeValue} = req.body;

    const user = await userService.updateUserService(id, changeValue);
    if (user) res.status(201).json({user: user})
    else res.status(404).json({message: "404 Not found ..."})
}

// Change this func in Srv instead of Ctr

module.exports.getAllUser = async (req, res) => {
    const user = await userModel.find().select();
    res.status(200).json(user);
}

module.exports.getOneUser = async (req, res) => {
    const user = await userService.readOneUserService(req.params.id); // 6517267796c2b61eb0ee3ab4 // 652456ba1d83226bd924133a
    res.status(200).json(user);
}

module.exports.createTodo = async (req, res) => {
    const {idTodo} = req.body;
    const user = await userService.createTodo(req.params.id, idTodo);
    if (user) res.status(201).json({user: user})
    else res.status(404).json({message: "404 Not found ..."})
}

module.exports.deleteUser = async (req, res) => {
    const {id} = req.body;

    const user = await userService.deleteUserService(id);
    if (user) res.status(201).json({user: user})
    else res.status(404).json({message: "404 Not found ..."})
}


module.exports.testC = async (req, res) => {
    const user = await userService.test();
    if (user) res.status(201).json({user: user})
    else res.status(404).json({message: "404 Not found ..."})
}