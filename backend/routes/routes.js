//Routes d'accès aux différentes fonctionnalités

const express = require('express');
const routes = express.Router();

//Recolter data de l'utilisateur
const userData = require('../middlewares/user.js');



//Recolter data de l'user
routes.get('/user/allUser', userData.allUser);







module.exports = routes;