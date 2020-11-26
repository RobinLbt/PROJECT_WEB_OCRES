import React from 'react';
import './App.css';
import {
  Route,
  HashRouter
} from "react-router-dom";

import DashboardPage from './pages/dashboardPage';
import AdminPage from './pages/adminPage';

import Navbar from './components/navbar/navbar';

function App() {
  return (
    <HashRouter>

    <div className="App">
      <div class="grid-container">
        <Navbar/>
        <Route exact path="/" component={DashboardPage}/>
        <Route path="/admin" component={AdminPage}/>
      </div>
    </div>
   </HashRouter>
  );
}

export default App;
