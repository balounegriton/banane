import React, { Component } from 'react';
import '../App.css';
import logo from "../image/logoBanane.png";


class Logo extends Component {
  constructor() {
    super();
    this.state = {
    };
  }




  render() {

    return (
      <img className="logoLanding" id="logoL" src={logo} alt="logoL" />
    )
  }
}
export default Logo;
