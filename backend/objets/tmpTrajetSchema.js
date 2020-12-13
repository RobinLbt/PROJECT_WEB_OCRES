//Objet tmpTrajet

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


//Nom, date, entreprise(nom)
const tmpTrajet = mongoose.Schema({
    temps: {type: Number, required: true },
    date: { type: Date, required: true, default: Date.now },
    idPoste: {type: mongoose.Schema.ObjectId, required: true}
});

//Garantie des objets uniques
tmpTrajet.plugin(uniqueValidator);

module.exports = mongoose.model('Tmptrajet', tmpTrajet);