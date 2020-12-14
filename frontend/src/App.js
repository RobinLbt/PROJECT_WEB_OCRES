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
    this.state = {
      key1:'1',
      key2:'2',
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
          trajets: [10, 50],
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
    this.fetchData = this.fetchData.bind(this)
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
        },
       
      };
      
      await fetch('http://localhost:7010/API_WEB_OCRES/user/allUser', requestOptions)
      .then( async res => {
        const info = await res.json();
        const infoUser = info.infoUser;
        const infoPoste = info.infoPoste;
        
        
        var sal=[]
        var tra=[]

        

        infoPoste.poste.forEach(element => {
          sal.push(element.salaires[0])
          if(element.trajet!=null)
          {
            tra.push(element.trajet[0].temps)
            
          }
        });
        
        
        var elemEntreprise={
          nom: infoPoste.nom,
          poste: infoPoste.poste,
          salaires: sal,
          trajets:tra.slice(0,3),
          satisfaction: infoPoste.satisfaction
        }
        
        var entreprises=[];
        entreprises.push(elemEntreprise)
        
        var data2 = {
          profil: infoUser,
          entreprises
          
        }
        var key1;
        var key2;
        if(this.state.key1 == '1'){
          key1='2'
        }else{
          key1='1'
        }
        if(this.state.key1 == '2'){
          key1='1'
        }else{
          key1='2'
        }
        this.setState({
          data : data2,
          key1: key1,
          key2: key2

        })

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
            
            <Route exact path="/" render={(props) => <DashboardPage {...props} key={this.state.key1} data={this.state.data} ftnFetch={this.fetchData}/>} />
            <Route path="/admin" render={(props) => <AdminPage {...props} key={this.state.key2} data={this.state.data} ftnFetch={this.fetchData}/>} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;

