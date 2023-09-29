const mongoose = require('mongoose')
require('dotenv').config({path: './config/.env'});
mongoose.set('strictQuery', false);

// mongoose.connect('mongodb+srv://' + process.env.DB_USER_PASS + '@' + process.env.DB_USER_NAME + '.qd9vt.mongodb.net/Collection', {
mongoose.connect('mongodb+srv://' + process.env.DB_USER_NAME + ':' + process.env.DB_USER_PASS + '@cluster0.fbppb.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection successfully to MongoDB"))
    .catch(err => console.log("Error BDD : " + err));
