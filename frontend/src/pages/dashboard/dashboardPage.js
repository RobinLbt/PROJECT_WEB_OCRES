import React, { Component } from "react";

import TitreTile from '../../components/widgets/titreTile';
import AnciensTile from '../../components/widgets/anciensTile';
import SalaireTile from '../../components/widgets/salaireTile';
import JourneeTile from '../../components/widgets/journeeTile';
import SatisfactionTile from '../../components/widgets/satisfactionTile';


import ProfilTile from '../../components/widgets/profilTile';
import EvoTrajetTile from '../../components/widgets/EvoTrajetTile';

class DashboardPage extends Component {

    getTempsDeTrajet() {
        var tdt = [];
        this.props.data.entreprises.forEach(
            (entreprise) => entreprise.trajets.forEach((temps) => tdt.push(temps))
        );
        return tdt;
    }

    getSatisfaction() {
        var days = [];
        this.props.data.entreprises.forEach(
            (entreprise) => entreprise.satisfaction.forEach((day) => days.push(day))
        );
        return days;
    }

    getSalaires() {
        var salaires = [];
        this.props.data.entreprises.forEach(
            (entreprise) => entreprise.salaires.forEach((s) => salaires.push(s))
        );
        return salaires;
    }


    render() {

        this.getTempsDeTrajet();
        return (
            <div className="main">
                <div>
                    <section className="widget-container">
                        <TitreTile
                            key={1}
                            entreprise={this.props.data.entreprises[this.props.data.entreprises.length - 1].nom}
                            poste={this.props.data.entreprises[this.props.data.entreprises.length - 1].poste[this.props.data.entreprises[this.props.data.entreprises.length - 1].poste.length - 1]} />
                        <AnciensTile
                            positions={this.props.data.entreprises[this.props.data.entreprises.length - 1].poste}
                        />
                        <SalaireTile
                            salaires={this.getSalaires()}
                        />
                        <JourneeTile />
                        <SatisfactionTile
                            days={this.getSatisfaction()}
                        />
                    </section>
                </div>
                <section className="right-container">
                    <div className="right-subcontainer">
                        <ProfilTile 
                            key={2}
                            profil={this.props.data.profil}
                            salaire={this.props.data.entreprises[this.props.data.entreprises.length - 1].salaires[this.props.data.entreprises[this.props.data.entreprises.length - 1].salaires.length - 1]}
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