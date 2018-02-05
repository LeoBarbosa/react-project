import React, { Component } from 'react'
import logo from '../../assets/images/logo.svg'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
          <img src={logo} className="Home-logo" alt="logo" />
      </div>
    );
  }
}

export default Home
