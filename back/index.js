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
    console.log(`\n\n\x1b[4m\x1b[33m[\x1b[1m127.0.0.1:${port}\x1b[0m\x1b[4m\x1b[33m]\x1b[0m\x1b[36m The server turn on port ${port}\x1b[0m`)
})
