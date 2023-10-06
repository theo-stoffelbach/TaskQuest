const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors');

// import express from 'express';
// import bodyParser from "body-parser";
// import cors from "cors";

const userRouter = require("./router/userRoute");
require('./db/db');

// import userRouter from "./router/userRoute.js";


const app = express()
const port = 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use("/api", userRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})