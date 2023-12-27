const userRouter = require('express').Router();
const todoCtr = require("../Controller/todoCtr");

// userRouter.get("/:id", userCtr.getTodoOfUser);
// userRouter.post("/update", userCtr.updateTodo);
userRouter.post("/register", todoCtr.addTodo);
userRouter.post("/remove/:id", todoCtr.removeTodoService);

module.exports = userRouter;