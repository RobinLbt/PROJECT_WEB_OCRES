import React, { Component } from "react";
import "./widgets.css";

class JourneeTile extends Component {
    render() {
        return (
            <div style={{flex: "1",textAlign:"left"}}>
                <h2>Comment s'est passée votre journée ?</h2>
                <section style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                    <div class="emotion">
                        <p style={{fontSize:"4rem",margin:"0"}}>😓</p>
                        <p>Terrible</p>
                    </div>
                    <div class="emotion">
                        <p style={{fontSize:"4.5rem",margin:"0"}}>🙁</p>
                        <p>Pas bien</p>
                    </div>
                    <div class="emotion">
                        <p style={{fontSize:"5rem",margin:"0"}}>😐</p>
                        <p>Moyen</p>
                    </div>
                    <div class="emotion">
                        <p style={{fontSize:"4.5rem",margin:"0"}}>🙂</p>
                        <p>Bien</p>
                    </div>
                    <div class="emotion">
                        <p style={{fontSize:"4rem",margin:"0"}}>😄</p>
                        <p>Très bien</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default JourneeTile;