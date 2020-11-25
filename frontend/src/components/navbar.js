import React, { Component } from "react";

import {
    NavLink,
  } from "react-router-dom";
 
class Navbar extends Component {
  render() {
    return (
      <div class="navbar">
        <NavLink to="/"><p>home</p></NavLink>
          <NavLink to= "/admin"><p>admin</p></NavLink>
      </div>
    );
  }
}
 
export default Navbar;