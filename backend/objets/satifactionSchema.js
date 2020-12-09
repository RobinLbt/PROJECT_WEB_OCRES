//Objet satisfaction

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');



const satisfaction = mongoose.Schema({
    valeur: {type: Number, required: true },
    date: { type: Date, required: true, default: Date.now },
    idUser: {type: mongoose.Schema.ObjectId, required: true}
});

//Garantie des objets uniques
satisfaction.plugin(uniqueValidator);

module.exports = mongoose.model('Satisfaction', satisfaction);