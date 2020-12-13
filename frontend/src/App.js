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
    this.fetchData();
    this.state = {
      data: {
        profil: {
          nom: "Labrot",
          prenom: "Robin",
          profilPic: "photo.jpg",
        },
        entreprises: [{
          nom: "BlaBlaCar",
          poste: [
            
            {
              nom: "SWE",
              date: "2015-10-28",
            },
            
          ],
          salaires: [
            {
              montant: 2130,
              date: "2017-02-02",
            },
           
          ],
          trajets: [],
          satisfaction: [
            {
              date: "2017-02-02",
              valeur: 2,
            },
            
          ]
        },
        ]
      }
    }
    
  }
  componentDidMount(){
        this.fetchData();
       
  }

  async fetchData() {
    try{
      var requestOptions ={
        method: "GET",
        headers: { 
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
            //'authorization': this.state.token,
        },
        //body: JSON.stringify(post)
      };
      
      await fetch('http://localhost:7010/API_WEB_OCRES/user/allUser', requestOptions)
      .then( async res => {
        const info = await res.json();
        const infoUser = info.infoUser;
        const infoPoste = info.infoPoste;
        
        console.log('yo')
        var sal=[]
        var tra=[]
        console.log(infoPoste.poste)
        console.log(infoPoste.poste[1].trajet[0].temps)
        infoPoste.poste.forEach(element => {
          sal.push(element.salaires[0])
          if(!element.trajet)
          {
            tra.push(element.trajet[0].temps)
          }
        });
        
        
        var elemEntreprise={
          nom: infoPoste.nom,
          poste: infoPoste.poste,
          salaires: sal,
          trajets:tra,
          satisfaction: infoPoste.satisfaction
        }
        
        var entreprises=[];
        entreprises.push(elemEntreprise)
        
        var data2 = {
          profil: infoUser,
          entreprises
          
        }
        //console.log(this.state)
        console.log(data2)

        this.setState({
          data : data2
        })

        console.log(this.state)

      })
      .catch(err => console.log('soucis lors de la recuperation de la data error: '+ err))
    }
    catch{
      return {error: 'Pb lors du chargment des informations de l\'utilisateur connecté'}
    }
  }

  
  

  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="grid-container">
            <Navbar />
            
            <Route exact path="/" render={(props) => <DashboardPage {...props} data={this.state.data} ftnFetch={this.fetchData}/>} />
            <Route path="/admin" render={(props) => <AdminPage {...props} data={this.state.data} ftnFetch={this.fetchData}/>} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;

