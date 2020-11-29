import React, { Component } from "react";

class TitreTile extends Component {
    render() {
        if(this.props.poste === undefined || this.props.entreprise === undefined){
            return <p>Pas de data</p>
        }
        return (
            <div style={{flex: "1",textAlign:"left",minWidth:"10rem"}}>
                <p>Poste actuel</p>
                <h1>{this.props.poste.nom}</h1>
                <p>Entreprise</p>
                <h1 style={{color: "#111111"}}>{this.props.entreprise}</h1>
            </div>
        );
    }
}

export default TitreTile;