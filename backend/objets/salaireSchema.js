//Objet Salaire

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


//Nom, date, entreprise(nom)
const salaire = mongoose.Schema({
    montant: {type: Number, required: true },
    date: { type: Date, required: true, default: Date.now },
    idUser: {type: mongoose.Schema.ObjectId, required: true}
});

//Garantie des objets uniques
salaire.plugin(uniqueValidator);

module.exports = mongoose.model('Salaire', salaire);