import React, { Component } from "react";
const { DateTime } = require("luxon");


class AnciensTile extends Component {

    constructor(props){
        super(props);

        this.deleteJob = this.deleteJob.bind(this)

    }
    async deleteJob(post){
        var post2={
            id: post
        }
        
        var requestOptions ={
            method: "POST",
            headers: { 
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
            
            },
            body: JSON.stringify(post2)
        }
        await fetch('http://localhost:7010/API_WEB_OCRES/postes/delete', requestOptions)
        .then(async  reponse => {
            const data = await reponse.json();
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    getTempsPosition(date,dateAvant){
        var date1 = DateTime.fromISO(date);
        var date1A = DateTime.fromISO(dateAvant);
        /*console.log(date1);
        console.log(date1A);*/
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
                <ul className="positions" >
                    {anciennes.reverse().slice(0,2).map((position,i) =>
                    <li key={position.nom}> 
                    <p style={{color: "black",fontWeight:"500",margin:"0"}}>{position.nom} <span onClick={() =>  {this.deleteJob(position._id); this.props.ftnFetchA()}} style={{marginLeft: "4.5rem"}}> 🗑 </span> </p>
                    <p style={{display:"inline-block"}}>{this.getTempsPosition(position.date,actuelles[i].date)[0]} ans {this.getTempsPosition(position.date,actuelles[i].date)[1]} mois</p>
                    <p style={{display:"inline-block",marginLeft:'0.5rem'}}>(Il y a {this.getDepuisPosition(position.date)[0]} ans et {this.getDepuisPosition(position.date)[1]} mois) </p>
                    <p></p>
                    </li>)}
                    
                </ul>
            </div>
        );
    }
}

export default AnciensTile;