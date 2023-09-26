const express = require('express')
const app = express()
const port = 8080
const UserControler = require("Controller/User")

// User()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/yes', UserControler.User)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})