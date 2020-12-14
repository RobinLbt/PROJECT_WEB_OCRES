//Librairie qui contient le posteSchema (modèle de données d'un poste)
const Poste = require('../objets/postSchema.js');
const Salaire = require('../objets/salaireSchema.js');
const TmpTrajet = require('../objets/tmpTrajetSchema.js');
var ObjectID = require('mongodb').ObjectID;

exports.newPosteEntreprise = (req, res) =>{
    var heure = parseInt(req.body.heure)
    var minute = parseInt(req.body.minute)
    const tempsT = 60*heure + minute;
    
    const poste = new Poste({
        nom: req.body.nom,
        nomEntreprise: req.body.nomEntreprise,
        idUser: req.body.idUser
    });

    poste.save()
    .then( posteSend =>{
        const salaire = new Salaire({
            montant: req.body.salaire,
            idPoste: posteSend._id
        });
        salaire.save()
        .then( salaireSend =>{
            const tmpTrajet = new TmpTrajet({
                temps: tempsT,
                idPoste: posteSend._id
            });
            console.log(tmpTrajet)
            tmpTrajet.save()
            .then( tmpTrajetSend =>{
                res.status(201).json({ message: 'Poste créé  et salaire et tmptrajet aussi !' })
            }).catch( err =>{
                Poste.remove({_id: ObjectID(posteSend._id)})
                Salaire.remove({_id: ObjectID(salaireSend._id)})
                res.status(400).json({ message: 'Poste et salaire créé mais pas le tmp donc poste et salaire supprimé' })
            })
            
        }).catch(err => {
            Poste.remove({_id: ObjectID(posteSend._id)})
            res.status(400).json({ message: 'Poste créé mais pas le salaire donc poste supprimé' })
        })
        
        
    })
    .catch(err =>{
        res.status(400).json({message : 'poste pas créé ! '});
    })


}

///Mise à jour poste actuel (en gros on rajoute son nouveau poste dans l'entreprise où l'utilisateur travaille déjà)
exports.majPoste = (req, res) => {
    //Il faut récupérer le poste avec l'id du user le plus récent
    var heure = parseInt(req.body.heure)
    var minute = parseInt(req.body.minute)
    const tempsT = 60*heure + minute;
    
    Poste.find().sort({"date": -1}).limit(1)
    .then( lastPoste => {
        
        const poste = new Poste({
            nom: req.body.nom,
            nomEntreprise: lastPoste[0].nomEntreprise,
            idUser: req.body.idUser
        });
        
        poste.save()
        .then( posteSend =>{
            console.log(posteSend)
            const salaire = new Salaire({
                montant: req.body.salaire,
                idPoste: posteSend._id
            });
            salaire.save()
            .then( salaireSend =>{
                const tmpTrajet = new TmpTrajet({
                    temps: tempsT,
                    idPoste: posteSend._id
                });
                tmpTrajet.save()
                .then( tmpTrajetSend =>{
                    res.status(201).json({ message: 'Poste créé  et salaire et tmptrajet aussi !' })
                }).catch( err =>{
                    Poste.remove({_id: ObjectID(posteSend._id)})
                    Salaire.remove({_id: ObjectID(salaireSend._id)})
                    res.status(400).json({ message: 'Poste et salaire créé mais pas le tmp donc poste et salaire supprimé' })
                })
               
            }).catch(err => {
                Poste.remove({_id: ObjectID(posteSend._id)})
                res.status(400).json({ message: 'Poste créé mais pas le salaire donc poste supprimé' })
            })
            
        })
        .catch(err =>{
            res.status(400).json({message : 'poste pas créé ! '});
        })
    })
    .catch(  err => {
        res.status(400).json({message : 'le dernier poste n\'est pas trouvé'});
    })


    //Puis nous mettons à jour les infos de ce poste la 

}


exports.deletePoste = (req, res) => {
    Poste.deleteOne({_id: ObjectID(req.body.id)})
    .then(pRep => {
        Salaire.deleteOne({_id: ObjectID(pRep._id)})
        TmpTrajet.deleteOne({_id: ObjectID(pRep._id)})
    })
}