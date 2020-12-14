import React, { Component } from "react";
import "./widgets.css";

class JourneeTile extends Component {
    constructor(props) {
        super(props);
        
            
        this.state = {
           
            idUser: '5fd3b5e35f2e56607ca733ac',
        };
        
        

        this.submitJournee = this.submitJournee.bind(this);
        
    }
    
    async submitJournee(e){
        try{
               
            var post = {
                valeur: e.target.id,
                idUser: this.state.idUser
            }
            console.log(post)
            var requestOptions ={
                method: "POST",
                headers: { 
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
                //'authorization': this.state.token,
            },
            body: JSON.stringify(post)
            };
            await fetch('http://localhost:7010/API_WEB_OCRES/journe/addSatisfaction', requestOptions)
            .then( async res => {
                const info = await res.json();
                
               
            })
            .catch(err => console.log('soucis lors de la recuperation de la data error: '+ err))
        }catch( err){
            console.log(err)
        }
    
    }
    render() {
        return (
            <div style={{ flex: "1", textAlign: "left", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <section style={{ width: "100%", textAlign: "left" }}>
                    <h2>Comment s'est passée votre journée ?</h2>
                </section>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", height: "100%" }}>
                    <section style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                        <div className="emotion" onClick={(e) => { this.submitJournee(e); this.props.ftnFetch()}}>
                            <span id="un" className="emoji" role="img" aria-label="pas content">😓</span>
                            <p>Terrible</p>
                        </div>
                        <div className="emotion" onClick={(e) => { this.submitJournee(e); this.props.ftnFetch()}}>
                            <span id="deux" className="emoji" role="img" aria-label="bof">🙁</span>
                            <p>Pas bien</p>
                        </div>
                        <div className="emotion" onClick={(e) => { this.submitJournee(e); this.props.ftnFetch()}}>
                            <span id="trois" className="emoji" role="img" aria-label="neutre">😐</span>
                            <p>Moyen</p>
                        </div>
                        <div className="emotion"onClick={(e) => { this.submitJournee(e); this.props.ftnFetch()}}>
                            <span id="quatre" className="emoji" role="img" aria-label="bien">🙂</span>
                            <p>Bien</p>
                        </div>
                        <div className="emotion" onClick={(e) => { this.submitJournee(e); this.props.ftnFetch()}}>
                            <span id="cinq" className="emoji" role="img" aria-label="super">😄</span>
                            <p>Très bien</p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default JourneeTile;