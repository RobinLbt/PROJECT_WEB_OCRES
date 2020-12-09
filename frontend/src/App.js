import React, { Component } from 'react';
import './App.css';
import {
  Route,
  HashRouter
} from "react-router-dom";

import DashboardPage from './pages/dashboard/dashboardPage';
import AdminPage from './pages/admin/adminPage';

import Navbar from './components/navbar/navbar';

class App extends Component {

  constructor(props) {
    super(props);
    var requestOptions ={

    };
    fetch('url', requestOptions)
    .then( res => {
      const info = res.json;
      console.log(info);
    })
    .catch(err => console.log('soucis lors de la recuperation de la data error: '+ err))
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
              "date": "2015-10-28",
            },
            {
              "nom": "Product Owner",
              "date": "2017-02-04",
            },
            {
              "nom": "Product Manager",
              "date": "2019-05-15",
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
          "trajets": [23,75],
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
            },
            {
              "date": "2018-07-13",
              "valeur": 5,
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
          <div className="grid-container">
            <Navbar />
            <Route exact path="/" render={(props) => <DashboardPage {...props} data={this.state.data} />} />
            <Route path="/admin" render={(props) => <AdminPage {...props} data={this.state.data} />} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;

