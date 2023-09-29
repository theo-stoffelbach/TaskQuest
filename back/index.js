const express = require('express')
const app = express()
const port = 8080
const userCtr = require('./Controller/userCtr')
require('./db/db');
const userRouter = require("./router/userRoute");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use("/api", userRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})