import React, { Component } from "react";

import "./admin.css";

import FormChangement from '../../components/forms/formChangement';
import FormNouveau from '../../components/forms/formNouveau';

import ProfilTile from '../../components/widgets/profilTile';
import TitreTile from '../../components/widgets/titreTile';

class AdminPage extends Component {
  render() {

    console.log("### AdminPage props", this.props.data.entreprises);

    return (
      <div className="main" style={{ backgroundColor: "#ffffff" }}>
        <div className="form-container">
        <FormChangement/>
        <FormNouveau/>
        </div>
        <section className="right-container">
          <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
            <ProfilTile
            key={3}
              profil={this.props.data.profil}
              salaire={this.props.data.entreprises[this.props.data.entreprises.length - 1].salaires[this.props.data.entreprises[this.props.data.entreprises.length - 1].salaires.length - 1]}
              temps={this.props.data.entreprises[this.props.data.entreprises.length - 1].poste[this.props.data.entreprises[this.props.data.entreprises.length - 1].poste.length - 1].date}
            />
            <TitreTile
              key={4}
              entreprise={this.props.data.entreprises[this.props.data.entreprises.length - 1].nom}
              poste={this.props.data.entreprises[this.props.data.entreprises.length - 1].poste[this.props.data.entreprises[this.props.data.entreprises.length - 1].poste.length - 1]} />
          </div>
        </section>
      </div>
    );
  }
}

export default AdminPage;