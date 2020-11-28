import React, { Component } from "react";

import TitreTile from '../components/widgets/titreTile';
import AnciensTile from '../components/widgets/anciensTile';
import SalaireTile from '../components/widgets/salaireTile';
import JourneeTile from '../components/widgets/journeeTile';
import SatisfactionTile from '../components/widgets/satisfactionTile';


import ProfilTile from '../components/widgets/profilTile';
import EvoTrajetTile from '../components/widgets/EvoTrajetTile';

class DashboardPage extends Component {

    constructor(props) {
        super(props);
    }

    getTempsDeTrajet() {
        var tdt = [];
        this.props.data.entreprises.forEach(
            (entreprise) => entreprise.trajet.forEach((temps) => tdt.push(temps))
        );
        console.log(tdt);
        return tdt;
    }

    getSatisfaction() {
        var days = [];
        this.props.data.entreprises.forEach(
            (entreprise) => entreprise.satisfaction.forEach((day) => days.push(day))
        );
        return days;
    }


    render() {
        this.getTempsDeTrajet();
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
                        <SatisfactionTile
                            days={this.getSatisfaction()}
                        />
                    </section>
                </div>
                <section class="right-container">
                    <div style={{height:"100%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
                    <ProfilTile
                        profil={this.props.data.profil}
                        salaire={this.props.data.entreprises[this.props.data.entreprises.length - 1].salaire[this.props.data.entreprises[this.props.data.entreprises.length - 1].salaire.length - 1]}
                        temps={this.props.data.entreprises[this.props.data.entreprises.length - 1].poste[this.props.data.entreprises[this.props.data.entreprises.length - 1].poste.length - 1].date}
                    />
                    <EvoTrajetTile
                        tempsTrajet={this.getTempsDeTrajet()}
                    />
                    </div>
                </section>
            </div>
        );
    }
}

export default DashboardPage;