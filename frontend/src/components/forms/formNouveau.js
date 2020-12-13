import React, { Component } from "react";

class FormNouveau extends Component {
    
    constructor(props) {
        super(props);
        
            
        this.state = {
            nom : '',
            salaire : null,
            poste : '',
            heure : null,
            minute : null,
            idUser: '5fd3b5e35f2e56607ca733ac',
        };
        
        this.handleChangeNom = this.handleChangeNom.bind(this);
        this.handleChangeSalaire = this.handleChangeSalaire.bind(this);
        this.handleChangePoste = this.handleChangePoste.bind(this);
        this.handleChangeHeure = this.handleChangeHeure.bind(this);
        this.handleChangeMinute = this.handleChangeMinute.bind(this);

        this.submitNouveauPoste = this.submitNouveauPoste.bind(this);
    }
    handleChangeNom(event) {    this.setState({nom: event.target.value});}
    handleChangeSalaire(event) {this.setState({salaire: event.target.value});}
    handleChangePoste(event) {this.setState({poste: event.target.value});}
    handleChangeHeure(event) {this.setState({heure: event.target.value});}
    handleChangeMinute(event) {this.setState({minute: event.target.value});}

    async submitNouveauPoste(){
        try{
               
            var post = {
                nom: this.state.poste,
                nomEntreprise : this.state.nom,
                salaire: this.state.salaire,
                heure: this.state.heure,
                minute: this.state.minute,
                idUser: this.state.idUser
            }
            var requestOptions ={
                method: "POST",
                headers: { 
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
                //'authorization': this.state.token,
            },
            body: JSON.stringify(post)
            };
            await fetch('http://localhost:7010/API_WEB_OCRES/postes/newPoste', requestOptions)
            .then( async res => {
                const info = await res.json();
                console.log(info);
            })
            .catch(err => console.log('soucis lors de la recuperation de la data error: '+ err))
        }catch( err){
            console.log(err)
        }
    
    }

    render() {
        return (
            <div>
                <h1>Nouvelle entreprise</h1>
                <section className="form-flex">
                <div className="form-section">
                        <h2>Nouvelle entreprise</h2>
                        <input type="text" value={this.state.nom} onChange={this.handleChangeNom} placeholder="Nom Entreprise"/>
                        <h2>Salaire</h2>
                        <input type="number" value={this.state.salaire} onChange={this.handleChangeSalaire} placeholder="Salaire"/>
                    </div>
                    <div className="form-section">
                        <h2>Poste</h2>
                        <input type="text" value={this.state.poste} onChange={this.handleChangePoste} placeholder="Poste Entreprise"/>
                    </div>
                    <div className="form-section">
                        <h2>Temps de trajet</h2>
                        <input style={{width:"2rem"}} type="number" value={this.state.heure} onChange={this.handleChangeHeure}/>
                        <p style={{display:"inline-block",marginRight:"0.4rem"}}>h</p>
                        <input style={{width:"2rem"}} type="number"value={this.state.minute} onChange={this.handleChangeMinute}/>
                        <p style={{display:"inline-block"}}>minutes</p>
                    </div>
                </section>
                <section style={{width:"100%",display:"flex",justifyContent:"flex-end"}}>
                <button  onClick={() =>  {this.submitNouveauPoste(); this.props.ftnFetchA()}}>Ajouter la nouvelle entreprise</button>
                </section>
            </div>
        );
    }
}

export default FormNouveau;