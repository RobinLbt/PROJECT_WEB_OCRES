import React, { Component } from "react";

import TitreTile from '../components/widgets/titreTile';
import AnciensTile from '../components/widgets/anciensTile';
import SalaireTile from '../components/widgets/salaireTile';
import JourneeTile from '../components/widgets/journeeTile';
import SatisfactionTile from '../components/widgets/satisfactionTile';

import ProfilTile from '../components/widgets/profilTile';

class DashboardPage extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div class="main">
                <div>
                    <section class="widget-container">
                        <TitreTile
                         entreprise={this.props.data.entreprises[this.props.data.entreprises.length - 1].nom}
                            poste={this.props.data.entreprises[this.props.data.entreprises.length - 1].poste[this.props.data.entreprises[this.props.data.entreprises.length - 1].poste.length - 1]} />
                        <AnciensTile
                            positions={this.props.data.entreprises[this.props.data.entreprises.length - 1].poste}
                        />
                        <SalaireTile />
                        <JourneeTile />
                        <SatisfactionTile />
                    </section>
                </div>
                <section class="right-container">
                    <ProfilTile
                    profil={this.props.data.profil} 
                    salaire= {this.props.data.entreprises[this.props.data.entreprises.length - 1].salaire[this.props.data.entreprises[this.props.data.entreprises.length - 1].salaire.length - 1]}
                    temps={this.props.data.entreprises[this.props.data.entreprises.length - 1].poste[this.props.data.entreprises[this.props.data.entreprises.length - 1].poste.length - 1].date}
                    />
                </section>
            </div>
        );
    }
}

export default DashboardPage;

//poste={this.props.data.entreprises.poste[0]}