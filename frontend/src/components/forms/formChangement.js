import React, { Component } from "react";

class FormChangement extends Component {
    render() {
        return (
            <div>
                <h1>Mettre à jour</h1>
                <section className="form-flex">
                    <div className="form-section">
                        <h2>Nouveau salaire</h2>
                        <input type="text"/>
                        <h2>Nouveau poste</h2>
                        <input type="text"/>
                    </div>
                    <div className="form-section">
                        <h2>Nouveau temps de trajet</h2>
                        <input style={{width:"2rem"}} type="text"/>
                        <p style={{display:"inline-block",marginRight:"0.4rem"}}>h</p>
                        <input style={{width:"2rem"}} type="text"/>
                        <p style={{display:"inline-block"}}>minutes</p>
                    </div>
                </section>
                <section style={{width:"100%",display:"flex",justifyContent:"flex-end"}}>
                        <button>Enregistrer les modifications</button>
                </section>
            </div>
        );
    }
}

export default FormChangement;