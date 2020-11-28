import React, { Component } from "react";
const { DateTime } = require("luxon");

class AnciensTile extends Component {

    getTempsPosition(date,dateAvant){
        var date1 = DateTime.fromISO(date);
        var date1A = DateTime.fromISO(dateAvant);
        var years = Math.floor(date1.diff(date1A,'years').years);
        var months = Math.floor(-date1.diff(date1A,'months').months - Math.floor(-date1.minus({years: Math.floor(-date1.diff(date1A,'years').years)}).diff(date1A,'months').months));
        return [years,months];
    }

    getDepuisPosition(date){
        var date1= DateTime.fromISO(date);
        var years = Math.floor(-date1.diffNow('years').years);
        var months = Math.floor(-date1.diffNow('months').months - Math.floor(-DateTime.local().minus({years: Math.floor(-date1.diffNow('years').years)}).diffNow('months').months));
        return [years,months];
    }

    
    render() {
        var anciennes = this.props.positions;
        anciennes.pop();
        var total = this.props.positions.reverse();
        console.log(anciennes);
        return (
            <div style={{ flex: "1", textAlign: "left" }}>
                <h2>Anciennes positions</h2>
                <ul class="positions">
                    {anciennes.reverse().map((position,i) =>
                    <li key={position.nom}> 
                    <p style={{color: "black",fontWeight:"500",margin:"0"}}>{position.nom}</p>
                    {/* <p>{total[0].nom}</p> */}
                    {/* <p>{this.getTempsPosition(position.date,this.props.positions[0].date)[0]} ans {this.getTempsPosition(position.date,this.props.positions.reverse()[0].date)[1]} mois</p> */}
                    <p>(Il y a {this.getDepuisPosition(position.date)[0]} ans et {this.getDepuisPosition(position.date)[1]} mois)</p>
                    <p></p>
                    </li>)}
                    
                </ul>
            </div>
        );
    }
}

export default AnciensTile;