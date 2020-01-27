import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import navimg from "./navlogo.jpg";
// import styled from 'styled-components'


export default class NavigationComponent extends Component {
  constructor() {
    super();
      
  }

  render() {
    return (
      <header id="navbar" data-height-onload="190" data-height-loaded="true" data-fixed-height-onload="54" className="et-fixed-header">
        
      <div className="nav-wrapper">
      <div className="left-side">
            <img src=
             {navimg} alt="logo">
            </img>
          </div>
        <div className="right-side">
          <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
          </div>
          <div className="nav-link-wrapper">
          <NavLink to="/shirts" activeClassName="nav-link-active">
            Shirts
          </NavLink>
          </div>
          <div className="nav-link-wrapper">
          <NavLink to="/headwear" activeClassName="nav-link-active">
            Headwear
          </NavLink>
          </div>
          <div className="nav-link-wrapper">
          <NavLink to="/gallery" activeClassName="nav-link-active">
            Gallery
          </NavLink>
          </div>

          

          {false ? <button>Add Blog</button> : null}
        </div>
      </div>
      </header>
    );
  }
}