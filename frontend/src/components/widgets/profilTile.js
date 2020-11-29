import React, { Component } from "react";
import img from "../../assets/photo.jpg";
const { DateTime } = require("luxon");

class ProfilTile extends Component {

    render() {
        return (
            <div>
                <img alt="profile pic" src={img} width="200rem" style={{marginTop: "5rem",borderRadius: "50%"}}></img>
                {/* <p>{`./../../assets/images/${this.props.profil.profilPic}`}</p> */}
                <h2 style={{ color: "#275EF6" }}>{this.props.profil.nom} {this.props.profil.prenom}</h2>
                <p>salaire</p>
                <h2>{this.props.salaire.montant}€ <span style={{fontSize:"1rem"}}>net</span></h2>
                <p>temps position actuelle</p>
                <h2>{Math.floor(-DateTime.fromISO(this.props.temps).diffNow('years').years)} ans {Math.floor(-DateTime.fromISO(this.props.temps).diffNow('months').months - Math.floor(-DateTime.local().minus({years:  Math.floor(-DateTime.fromISO(this.props.temps).diffNow('years').years)}).diffNow('months').months))} mois</h2>
            </div>
        );
    }
}

export default ProfilTile;