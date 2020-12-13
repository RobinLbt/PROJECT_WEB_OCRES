const Sati = require('../objets/satisfactionSchema.js');
var ObjectID = require('mongodb').ObjectID;

exports.addSatisfaction = (req, res) =>{
    var val=0;
    
    switch(req.body.valeur){
        case "un":
            val=1;
        break;
        case "deux":
            val=2;
        break;
        case "trois":
            val=3;
        break;
        case "quatre":
            val=4;
        break;
        case "cinq":
            val=5;
        break;
    }
    console.log(val)
    if(val==0)
    {
        res.status(400).json({message : 'aucune valeur n\'a ete prise'});

    }else{
        const sati = new Sati ({
            valeur: val,
            idUser: req.body.idUser
        });
        sati.save()
        .then( rep => {
            res.status(201).json({ message: 'Satisfaction créé !' })
        }).catch(err => {
            res.status(400).json({message : 'satisfaction pas créé ! '});
        })
    }
};