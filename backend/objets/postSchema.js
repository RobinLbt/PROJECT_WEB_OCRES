//Objet Poste

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


//Nom, date, entreprise(nom)
const poste = mongoose.Schema({
    nom: {type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
    nomEntreprise: {type: String, required: true},
    idUser: {type: mongoose.Schema.ObjectId, required: true}
});

//Garantie des objets uniques
poste.plugin(uniqueValidator);

module.exports = mongoose.model('Poste', poste);