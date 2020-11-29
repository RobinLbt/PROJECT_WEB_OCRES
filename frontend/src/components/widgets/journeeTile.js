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
                        <div className="emotion">
                            <span id="un" className="emoji" role="img" aria-label="pas content">😓</span>
                            <p>Terrible</p>
                        </div>
                        <div className="emotion">
                            <span id="deux" className="emoji" role="img" aria-label="bof">🙁</span>
                            <p>Pas bien</p>
                        </div>
                        <div className="emotion">
                            <span id="trois" className="emoji" role="img" aria-label="neutre">😐</span>
                            <p>Moyen</p>
                        </div>
                        <div className="emotion">
                            <span id="quatre" className="emoji" role="img" aria-label="bien">🙂</span>
                            <p>Bien</p>
                        </div>
                        <div className="emotion">
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