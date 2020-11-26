import React, { Component } from "react";

import TitreTile from '../components/widgets/titreTile';
import AnciensTile from '../components/widgets/anciensTile';
import SalaireTile from '../components/widgets/salaireTile';
import JourneeTile from '../components/widgets/journeeTile';
import SatisfactionTile from '../components/widgets/satisfactionTile';

import ProfilTile from '../components/widgets/profilTile';

class DashboardPage extends Component {
    render() {
        return (
            <div class="main">
                <div>
                <section class="widget-container">
                    <TitreTile />
                    <AnciensTile />
                    <SalaireTile />
                    <JourneeTile />
                    <SatisfactionTile />
                </section>
                </div>
                <section class="right-container">
                <ProfilTile />
                </section>
            </div>
        );
    }
}

export default DashboardPage;