import React, { Component } from 'react';
import './App.css';


import Logo from "./component/logo.js";
import Demo from "./component/demo.js";
import Contact from './component/contact';
import Apropo from './component/apropo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      demo: false,
      apropos: false,
      logo: true,
      contact: false
    };
  }

  service = () => {
    if (this.state.demo === true && this.state.apropos === false && this.state.logo === false && this.state.contact === false) {
      this.setState({
        demo: false,
        apropos: false,
        logo: true,
        contact: false
      }
      )
      this.setState({
        playing: false,
      }
      )
      document.getElementById("texteService").className = "notHover"
    }

    if (this.state.demo === false && this.state.apropos === true && this.state.logo === false && this.state.contact === false) {
      this.setState({
        demo: true,
        apropos: false,
        logo: false,
        contact: false
      }
      )

      document.getElementById("texteService").className = "Hover"
      document.getElementById("texteApro").className = "notHover"

    }
    if (this.state.demo === false && this.state.apropos === false && this.state.logo === true && this.state.contact === false) {
      this.setState({
        demo: true,
        apropos: false,
        logo: false,
        contact: false
      }
      )

      document.getElementById("texteService").className = "Hover"


    }
    if (this.state.demo === false && this.state.apropos === false && this.state.logo === false && this.state.contact === true) {
      this.setState({
        demo: true,
        apropos: false,
        logo: false,
        contact: false

      }
      )
      document.getElementById("texteContact").className = "notHover"
      document.getElementById("texteService").className = "Hover"


    }


  }

  contact = () => {


    if (this.state.demo === true && this.state.apropos === false && this.state.logo === false && this.state.contact === false) {
      this.setState({
        demo: false,
        apropos: false,
        logo: false,
        contact: true
      }
      )
      this.setState({
        playing: false,
      }
      )
      document.getElementById("texteContact").className = "Hover"
      document.getElementById("texteService").className = "notHover"

    }

    if (this.state.demo === false && this.state.apropos === true && this.state.logo === false && this.state.contact === false) {
      this.setState({
        demo: false,
        apropos: false,
        logo: false,
        contact: true
      }
      )

      document.getElementById("texteContact").className = "Hover"
      document.getElementById("texteApro").className = "notHover"

    }
    if (this.state.demo === false && this.state.apropos === false && this.state.logo === true && this.state.contact === false) {
      this.setState({
        demo: false,
        apropos: false,
        logo: false,
        contact: true
      }
      )

      document.getElementById("texteContact").className = "Hover"


    }

    if (this.state.demo === false && this.state.apropos === false && this.state.logo === false && this.state.contact === true) {
      this.setState({
        demo: false,
        apropos: false,
        logo: true,
        contact: false
      }
      )

      document.getElementById("texteContact").className = "notHover"


    }



  }


  apropo = () => {

    if (this.state.demo === true && this.state.apropos === false && this.state.logo === false && this.state.contact === false) {
      this.setState({
        demo: false,
        apropos: true,
        logo: false,
        contact: false
      }
      )

      document.getElementById("texteApro").className = "Hover"
      document.getElementById("texteService").className = "notHover"

      this.setState({
        playing: false,
      }
      )

    }

    if (this.state.demo === false && this.state.apropos === true && this.state.logo === false && this.state.contact === false) {
      this.setState({
        demo: false,
        apropos: false,
        logo: true,
        contact: false
      }
      )

      document.getElementById("texteService").className = "notHover"
      document.getElementById("texteApro").className = "notHover"
      this.setState({
        playing: false,
      }
      )
    }
    if (this.state.demo === false && this.state.apropos === false && this.state.logo === true && this.state.contact === false) {
      this.setState({
        demo: false,
        apropos: true,
        logo: false,
        contact: false
      }
      )

      document.getElementById("texteApro").className = "Hover"

    }

    if (this.state.demo === false && this.state.apropos === false && this.state.logo === false && this.state.contact === true) {
      this.setState({
        demo: false,
        apropos: true,
        logo: false,
        contact: false

      }
      )
      document.getElementById("texteContact").className = "notHover"
      document.getElementById("texteApro").className = "Hover"


    }




  }

  render() {

    return (
      <div className="box">
        <div className="container">
       
       
          {this.state.logo && <Logo/>}
         
          {this.state.apropos && <Apropo/>}

          {this.state.contact && <Contact/>}

          {this.state.demo && <Demo/>}


        </div>

        <div className="texteService">
          <div id="texteService" className="notHover" onClick={this.service} >SERVICES  </div>
        </div>


        <div className="apropos">
          <div id="texteApro" className="notHover" onClick={this.apropo}>À PROPOS  </div>

        </div>
        <div className="texteContact">
          <div id="texteContact" className="notHover" onClick={this.contact} > CONTACT </div>
        </div>



      </div>

    )
  }
}


export default App;
