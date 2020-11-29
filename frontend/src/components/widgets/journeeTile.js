import React, { Component } from "react";
import "./widgets.css";

class JourneeTile extends Component {
    render() {
        return (
            <div style={{ flex: "1", textAlign: "left", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <section style={{ width: "100%", textAlign: "left" }}>
                    <h2>Comment s'est passée votre journée ?</h2>
                </section>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", height: "100%" }}>
                    <section style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                        <div class="emotion">
                            <p id="un" class="emoji">😓</p>
                            <p>Terrible</p>
                        </div>
                        <div class="emotion">
                            <p id="deux" class="emoji">🙁</p>
                            <p>Pas bien</p>
                        </div>
                        <div class="emotion">
                            <p id="trois" class="emoji">😐</p>
                            <p>Moyen</p>
                        </div>
                        <div class="emoji" class="emotion">
                            <p id="quatre" class="emoji">🙂</p>
                            <p>Bien</p>
                        </div>
                        <div class="emoji" class="emotion">
                            <p id="cinq" class="emoji">😄</p>
                            <p>Très bien</p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default JourneeTile;