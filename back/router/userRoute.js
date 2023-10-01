const userRouter = require('express').Router();
const userCtr = require("../Controller/userCtr");

userRouter.get("/", userCtr.getAllUser)
userRouter.post("/update", userCtr.updateUser)
userRouter.post("/register", userCtr.register)
userRouter.post("/delete", userCtr.deleteUser)
userRouter.get("/test", userCtr.testC)

module.exports = userRouter;