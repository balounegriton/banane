import React, { Component } from 'react';
import '../App.css';
import logo from "../images/logo.png"



class Navbar extends Component {
  constructor() {
    super();

    this.state = {
    
    };
  }


  componentDidMount() {

  }

 

  render() {

    return (
      <div className="nav">
        {/* <img className="logo" id="logo" src={logo} alt="logo" /> */}
        <div className="language-container">
          {this.props.languageFr && <div id="fr" className="language-texte-selected" >FR</div>}
          {!this.props.languageFr && <div id="fr" className="language-texte" onClick={this.props.goFr}>FR</div>}
          <div className="language-slash"> / </div>
          {!this.props.languageFr && <div id="en" className="language-texte-selected" > EN</div>}
          {this.props.languageFr && <div id="en" className="language-texte" onClick={this.props.goAn} > EN</div>}
        </div>

      </div>
    )
  }
}


export default Navbar;
