import React, { Component } from "react";

class FormChangement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salaire: null,
      poste: "",
      heure: null,
      minute: null,
      idUser: "5fd3b5e35f2e56607ca733ac",
    };
    console.log(this.state);
    this.handleChangeSalaire = this.handleChangeSalaire.bind(this);
    this.handleChangePoste = this.handleChangePoste.bind(this);
    this.handleChangeHeure = this.handleChangeHeure.bind(this);
    this.handleChangeMinute = this.handleChangeMinute.bind(this);

    this.MaJ = this.MaJ.bind(this);
    
  }
  handleChangeSalaire(event) {
    this.setState({ salaire: event.target.value });
  }
  handleChangePoste(event) {
    this.setState({ poste: event.target.value });
  }
  handleChangeHeure(event) {
    this.setState({ heure: event.target.value });
  }
  handleChangeMinute(event) {
    this.setState({ minute: event.target.value });
  }
  

  async MaJ() {
    try {
      var post = {
        nom: this.state.poste,
        salaire: this.state.salaire,
        heure: this.state.heure,
        minute: this.state.minute,
        idUser: this.state.idUser,
      };
      var requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          //'authorization': this.state.token,
        },
        body: JSON.stringify(post),
      };
      await fetch(
        "http://localhost:7010/API_WEB_OCRES/postes/majPoste",
        requestOptions
      )
        .then(async (res) => {
          
          //APPLER LE FETCH DU APP.JS PASSER EN PROPS
          const info = await res.json();
          console.log(info);
        })
        .catch((err) =>
          console.log("soucis lors de la recuperation de la data error: " + err)
        );
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div>
        <h1>Mettre à jour</h1>
        <section className="form-flex">
          <div className="form-section">
            <h2>Nouveau salaire</h2>
            <input
              type="number"
              value={this.state.salaire}
              onChange={this.handleChangeSalaire}
            />
            <h2>Nouveau poste</h2>
            <input
              type="text"
              value={this.state.poste}
              onChange={this.handleChangePoste}
            />
          </div>
          <div className="form-section">
            <h2>Nouveau temps de trajet</h2>
            <input
              style={{ width: "2rem" }}
              type="number"
              value={this.state.heure}
              onChange={this.handleChangeHeure}
            />
            <p style={{ display: "inline-block", marginRight: "0.4rem" }}>h</p>
            <input
              style={{ width: "2rem" }}
              type="number"
              value={this.state.minute}
              onChange={this.handleChangeMinute}
            />
            <p style={{ display: "inline-block" }}>minutes</p>
          </div>
        </section>
        <section
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <button  onClick={() =>  {this.MaJ(); this.props.ftnFetchA()}}>Enregistrer les modifications</button>
        </section>
      </div>
    );
  }
}

export default FormChangement;
