const mongoose = require('mongoose')
require('dotenv').config({path: './config/.env'});
mongoose.set('strictQuery', false);

// mongoose.connect('mongodb+srv://' + process.env.DB_USER_PASS + '@' + process.env.DB_USER_NAME + '.qd9vt.mongodb.net/Collection', {
mongoose.connect('mongodb+srv://' + process.env.DB_USER_NAME + ':' + process.env.DB_USER_PASS + '@cluster0.fbppb.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    //

    .then(() => console.log(`\x1b[32mConnection successfully to \x1b[1m\x1b[4mMongoDB\x1b[0m\n\n`))
    .catch(err => console.log("Error BDD : " + err));
