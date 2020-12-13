//Librairie qui contient le userSchema (modèle de données d'un user)
const User = require('../objets/userSchema.js');
const Poste = require('../objets/postSchema.js');
const Salaire = require('../objets/salaireSchema.js');
const Satisfaction = require('../objets/satisfactionSchema.js');
const TmpTrajet = require('../objets/tmpTrajetSchema.js');
var ObjectID = require('mongodb').ObjectID;

exports.allUser = (req, res) => {
    let infoUser={};
    let infoPoste={
        nom:'',
        poste: [],
        satisfaction:[]
    };
    User.findOne()
    .then((result) => {
     
        if(!result){
            console.log('il n\'y a rien ')
            res.send({message: 'pas d\'info '})
        }
        else{
            Poste.aggregate([
                {
                    $match: {idUser: ObjectID(result._id)}
                },
                {
                    $sort: {
                        date:1
                    }
                },
                {
                    $lookup: {
                        from: "salaires",
                        localField: "_id",
                        foreignField: "idPoste",
                        as: "salaires"
                    }
                },
                {
                    $lookup: {
                        from: "tmptrajets",
                        localField: "_id",
                        foreignField: "idPoste",
                        as: "trajet"
                    }
                }
                
            ])
            .then( async pRep => {
                infoPoste.nom=pRep[pRep.length-1].nomEntreprise;
                infoPoste.poste=pRep;
                
                Satisfaction.aggregate([
                    {
                        $match: {idUser: ObjectID(result._id)}
                    },
                    {
                        $sort: {
                            date:1
                        }
                    },
                ])
                .then( SaRep => {

                    infoPoste.satisfaction = SaRep;

                    
                    infoUser=result;
                    var info ={
                        infoUser,
                        infoPoste
                    }
                    res.send(info)
                })
                .catch(err =>{
                    res.status(400).json({ err })
                })
                
                
                
            })
            .catch(err =>{
                res.status(400).json({ err })
            })
                   
            //res.send(result)
            

            
        }
    }).catch((err) => {
        console.log(err)
    });
};

exports.onUser = (req, res)=>{
    User.aggregate([
        {
            $match : {"_id" : ObjectID(req.params.idUser)}
        },
        {
            $lookup: {
                from: "postes",
                localField: "_id",
                foreignField: "idUser",
                as: "postes"
            }
        },
        {
            $lookup: {
                from: "salaires",
                localField: "_id",
                foreignField: "idUser",
                as: "salaires"
            }
        },
        {
            $lookup: {
                from: "satisfactions",
                localField: "_id",
                foreignField: "idUser",
                as: "satisfactions"
            }
        }
    ])
    .then(dataRecv => res.send(dataRecv))
    .catch(err => {
        res.status(400).json({ err })
    });
}