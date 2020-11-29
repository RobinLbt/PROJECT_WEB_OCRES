import React, { Component } from "react";

import "./admin.css";

import formChangement from '../../components/forms/formChangement';
import formNouveau from '../../components/forms/formNouveau';

import ProfilTile from '../../components/widgets/profilTile';
import TitreTile from '../../components/widgets/titreTile';
import FormChangement from "../../components/forms/formChangement";
import FormNouveau from "../../components/forms/formNouveau";

class AdminPage extends Component {
  render() {
    return (
      <div className="main" style={{ backgroundColor: "#ffffff" }}>
        <div className="form-container">
        <FormChangement/>
        <FormNouveau/>
        </div>
        <section class="right-container">
          <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
            <ProfilTile
            key={2}
              profil={this.props.data.profil}
              salaire={this.props.data.entreprises[this.props.data.entreprises.length - 1].salaires[this.props.data.entreprises[this.props.data.entreprises.length - 1].salaires.length - 1]}
              temps={this.props.data.entreprises[this.props.data.entreprises.length - 1].poste[this.props.data.entreprises[this.props.data.entreprises.length - 1].poste.length - 1].date}
            />
            <TitreTile
              key={2}
              entreprise={this.props.data.entreprises[this.props.data.entreprises.length - 1].nom}
              poste={this.props.data.entreprises[this.props.data.entreprises.length - 1].poste[this.props.data.entreprises[this.props.data.entreprises.length - 1].poste.length - 1]} />
          </div>
        </section>
      </div>
    );
  }
}

export default AdminPage;