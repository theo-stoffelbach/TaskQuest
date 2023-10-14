const todoService = require("../service/todoService");

const removeTodoService = async (req, res) => {
    const {idTodo, idListTodo} = req.body;

    const user = await todoService.removeTodoService(req.params.id, idListTodo, idTodo);
    if (user) res.status(201).json({user: user})
    else res.status(404).json({message: "404 Not found ..."})
}

module.exports = {
    removeTodoService,
}