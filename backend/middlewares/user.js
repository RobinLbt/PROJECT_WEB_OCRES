//Librairie qui contient le userSchema (modèle de données d'un message)
const User = require('../objets/userSchema.js');
var ObjectID = require('mongodb').ObjectID;

exports.allUser = (req, res) => {
    User.find()
    .then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });
};