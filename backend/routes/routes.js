//Routes d'accès aux différentes fonctionnalités

const express = require('express');
const routes = express.Router();

//Accès auc fonctions pour les utilisateurs
const userData = require('../middlewares/user.js');

//Accès aux fonctions pour les postes
const postes = require('../middlewares/poste.js');

//Accès aux fonctions pour les postes
const satisfaction = require('../middlewares/satisfaction.js');


//Recolter data de l'useR | CAS OU IL N'Y A QU UN SEUL USER
routes.get('/user/allUser', userData.allUser);
//Recolter data de l'useR | CAS OU IL Y PLUSIEURS USERS
routes.post('/user/:idUser', userData.onUser);

//Nouveau poste 
routes.post('/postes/newPoste', postes.newPosteEntreprise);
//Mise à jour poste dans la même entreprise
routes.post('/postes/majPoste', postes.majPoste); 


//Nouveau Journée
routes.post('/journe/addSatisfaction', satisfaction.addSatisfaction );


module.exports = routes;