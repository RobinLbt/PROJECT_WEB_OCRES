import React, { Component } from "react";

class FormNouveau extends Component {
    nouvelleEntreprise(post){
        var requestOptions ={
            
        };
        fetch('url', requestOptions)
        .then( res => {
          const info = res.json;
          console.log(info);
        })
        .catch(err => console.log('soucis lors de la recuperation de la data error: '+ err))
    }
    nom = 'Blablacar'
    salaire = ''
    poste = ''
    tmpMin = ''
    
    render() {
        return (
            <div>
                <h1>Nouvelle entreprise</h1>
                <section className="form-flex">
                <div className="form-section">
                        <h2>Nouvelle entreprise</h2>
                        <input type="text"/>
                        <h2>Salaire</h2>
                        <input type="text"/>
                    </div>
                    <div className="form-section">
                        <h2>Poste</h2>
                        <input type="text"/>
                    </div>
                    <div className="form-section">
                        <h2>Temps de trajet</h2>
                        <input style={{width:"2rem"}} type="text"/>
                        <p style={{display:"inline-block",marginRight:"0.4rem"}}>h</p>
                        <input style={{width:"2rem"}} type="text"/>
                        <p style={{display:"inline-block"}}>minutes</p>
                    </div>
                </section>
                <section style={{width:"100%",display:"flex",justifyContent:"flex-end"}}>
                <button>Ajouter la nouvelle entreprise</button>
                </section>
            </div>
        );
    }
}

export default FormNouveau;