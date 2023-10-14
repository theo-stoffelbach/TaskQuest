const userRouter = require('express').Router();
const userCtr = require("../Controller/userCtr");

// userRouter.get("/:id", userCtr.getTodoOfUser);
// userRouter.post("/update", userCtr.updateTodo);
// userRouter.post("/register", userCtr.addTodo);
userRouter.post("/remove/:id", userCtr.removeTodoService);

module.exports = userRouter;