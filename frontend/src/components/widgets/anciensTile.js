import React, { Component } from "react";
const { DateTime } = require("luxon");

class AnciensTile extends Component {

    getTempsPosition(date,dateAvant){
        var date1 = DateTime.fromISO(date);
        var date1A = DateTime.fromISO(dateAvant);
        console.log(date1);
        console.log(date1A);
        var years = Math.floor(date1A.diff(date1,'years').years);
        var months = -Math.floor(date1.diff(date1A,'months').months - Math.floor(date1A.minus({years: Math.floor(date1A.diff(date1,'years').years)}).diff(date1A,'months').months));
        return [years,months];
    }

    getDepuisPosition(date){
        var date1= DateTime.fromISO(date);
        var years = Math.floor(-date1.diffNow('years').years);
        var months = Math.floor(-date1.diffNow('months').months - Math.floor(-DateTime.local().minus({years: Math.floor(-date1.diffNow('years').years)}).diffNow('months').months));
        return [years,months];
    }

    
    render() {
        if (this.props.positions == null || this.props.positions.length < 2) {
            return (<p>Aucun anciens postes.</p>);
        }

        const actuelles = [...this.props.positions];
        actuelles.reverse();

        const anciennes = [...this.props.positions];
        anciennes.pop();

        return (
            <div style={{ flex: "1", textAlign: "left" }}>
                <h2>Anciennes positions</h2>
                <ul className="positions">
                    {anciennes.reverse().map((position,i) =>
                    <li key={position.nom}> 
                    <p style={{color: "black",fontWeight:"500",margin:"0"}}>{position.nom}</p>
                    <p style={{display:"inline-block"}}>{this.getTempsPosition(position.date,actuelles[i].date)[0]} ans {this.getTempsPosition(position.date,actuelles[i].date)[1]} mois</p>
                    <p style={{display:"inline-block",marginLeft:'0.5rem'}}>(Il y a {this.getDepuisPosition(position.date)[0]} ans et {this.getDepuisPosition(position.date)[1]} mois)</p>
                    <p></p>
                    </li>)}
                    
                </ul>
            </div>
        );
    }
}

export default AnciensTile;