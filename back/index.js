const express = require('express')
const app = express()
const port = 8080
const userCtr = require('./Controller/userCtr')
require('./db/db');

app.get("/api", userCtr.getAllUser)
app.get("/register", userCtr.register)
// articleRouter.post("/", articles.register)

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
//
// app.get('/yes', UserControler.UserCont)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})