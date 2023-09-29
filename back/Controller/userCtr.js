const userModel = require('../model/user.model');
const userService = require('../service/userService');

module.exports.userCount = async (req, res) => {
    console.log("yes")
}

module.exports.register = async (req, res) => {
    const {name, password} = req.body;

    const user = await userService.register(name, password);
    if (user) res.status(201).json({user: user})
    else res.status(404).json({message: "404 Not found ..."})
}

module.exports.testC = async (req, res) => {
    const user = await userService.test();
    if (user) res.status(201).json({user: user})
    else res.status(404).json({message: "404 Not found ..."})
}

module.exports.getAllUser = async (req, res) => {
    const user = await userModel.find().select();
    res.status(200).json(user);
}


