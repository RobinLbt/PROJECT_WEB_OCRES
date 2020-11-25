import React, { Component } from "react";

import TitreTile from '../components/titreTile';
import AnciensTile from '../components/anciensTile';
import SalaireTile from '../components/salaireTile';
import JourneeTile from '../components/journeeTile';
import SatisfactionTile from '../components/satisfactionTile';

import ProfilTile from '../components/profilTile';

class DashboardPage extends Component {
    render() {
        return (
            <div class="main">
                <section class="widget-container">
                    <TitreTile />
                    <AnciensTile />
                    <SalaireTile />
                    <JourneeTile />
                    <SatisfactionTile />
                </section>
                <ProfilTile />
            </div>
        );
    }
}

export default DashboardPage;