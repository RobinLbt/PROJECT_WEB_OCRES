import React, { Component } from "react";

import './navbar.css';

import homesvg from '../../assets/icons/home.svg';
import homeenablesvg from '../../assets/icons/home-enable.svg';
import adminsvg from '../../assets/icons/admin.svg';
import adminenablesvg from '../../assets/icons/admin-enable.svg';

import {
    NavLink,
    withRouter
  } from "react-router-dom";
 
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink to="/">{this.props.location.pathname === '/' ? <img className="svg-navbar" src={homeenablesvg} alt="home"></img>  : <img className="svg-navbar" src={homesvg} alt="home"></img>}</NavLink>
        <NavLink to= "/admin">{this.props.location.pathname === '/admin' ? <img className="svg-navbar" src={adminenablesvg} alt="admin"></img> : <img className="svg-navbar" src={adminsvg} alt="admin"></img>}</NavLink>
      </div>
    );
  }
}
 
export default withRouter(Navbar);