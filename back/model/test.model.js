const mongoose = require('mongoose');

const test = new mongoose.Schema({
    nom: String,
    prenom: String,
});

const Test = mongoose.model('TestC', test);

module.exports = Test;
