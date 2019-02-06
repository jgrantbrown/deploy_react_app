import React, { Component } from 'react';

import './NavBar.css';

// REactRouter
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <h1 className="App-NavBar">
        <p className="App-Logo"> Jason G. Brown</p>
      <Link to="/">  <p >Home</p></Link>
      <Link to="/about">  <p >About</p></Link>
      <Link to="/projects">  <p > Projects</p></Link>
      </h1>

    );
  }
}

export default NavBar;
