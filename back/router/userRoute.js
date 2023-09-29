const userRouter = require('express').Router();
const userCtr = require("../Controller/userCtr");

userRouter.get("/", userCtr.getAllUser)
userRouter.post("/register", userCtr.register)
userRouter.get("/test", userCtr.testC)

module.exports = userRouter;