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
          "salaires": [
            {
              "montant": 2130,
              "date": "2017-02-02",
            },
            {
              "montant": 3652,
              "date": "2018-05-10",
            },
            {
              "montant": 4259,
              "date": "2019-08-24",
            }
          ],
          "trajets": [120,220],
          "satisfaction": [
            {
              "date": "2017-02-02",
              "valeur": 2,
            },
            {
              "date": "2017-02-03",
              "valeur": 1,
            },
            {
              "date": "2017-02-04",
              "valeur": 4,
            },
            {
              "date": "2017-02-05",
              "valeur": 3,
            }
          ]
        },
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
