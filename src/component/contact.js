import React, { Component } from 'react';
import '../App.css';
import facebook from "../image/facebook.png";


class Contact extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  handleClick = () => {
 
    window.open('https://www.facebook.com/LaBananeStudio', '_blank');
  };



  render() {
    return (
      <div className="texteEmail">
      <div id="gmail" className="" > info@la-banane.ca </div>
      <img className="facebook" id="" src={facebook} alt="logoL" onClick={this.handleClick} />
    </div>
    )
  }
}
export default Contact;
