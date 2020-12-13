var express = require("express");
var http = require('http');
//var path = require("path");
var logger = require("morgan");

const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//Librairie qui contient les routes d'accès aux différentes fonctionnalités
const routes = require('./routes/routes.js');

//Framework express
var app =  express();
//Création du serveur
const server = http.createServer(app);

//Charge tous les fichiers statiques
app.use(express.static(__dirname));


//Connexion à la base de données
mongoose.connect("mongodb+srv://SainMar:ProjetWebOcres@cluster0.vjuft.mongodb.net/ProjetWebOcres?retryWrites=true&w=majority",
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  
//Permission FrontEnd (cross-origin)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  })

app.use(logger("dev"));

//On parse les requêtes au format json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes d'accès aux divers fonctionnalités
app.use('/API_WEB_OCRES', routes);


//On écoute sur le port 7010
const PORT = 7010 || process.env.PORT;
server.listen(PORT, () => console.log(`Serveur running on port ${PORT}`));

