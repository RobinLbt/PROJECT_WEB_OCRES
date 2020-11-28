import React, { Component } from 'react';
import './App.css';
import {
  Route,
  HashRouter
} from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import DashboardPage from './pages/dashboardPage';
import AdminPage from './pages/adminPage';

import Navbar from './components/navbar/navbar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        "profil": {
          "nom": "Labrot",
          "prenom": "Robin",
          "profilPic": "photo.jpg",
        },
        "entreprises": [{
          "nom": "BlaBlaCar",
          "debut": new Date('2018'),
          "poste": [
            {
              "nom": "SWE",
              "date": "2015-11-28",
            },
            {
              "nom": "Product Owner",
              "date": "2017-02-04",
            },
            {
              "nom": "Product Manager",
              "date": "2020-05-15",
            }
          ],
          "salaire": [
            {
              "montant": 3652,
              "date": new Date('2019'),
            }
          ],
          "trajet": [120],
          "satisfaction": [
            {
              "date": new Date('2019'),
              "valeur": 5,
            }
          ]
        }
        ]
      }
    }
  }


  render() {
    return (
      <HashRouter>
        <div className="App">
          <div class="grid-container">
            <Navbar />
            <Route exact path="/" render={(props) => <DashboardPage {...props} data={this.state.data} />} />
            <Route path="/admin" component={AdminPage} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
