import React, { Component } from 'react';
import './App.css';

import PopUp from './component/Popup.js';
import logo from "./image/logoBanane.png";
import Demo from "./component/demo.js";
import Contact from './component/contact';
import Apropo from './component/apropo';
import Imagine from './index.jsx';
class App extends Component {
  constructor() {
    super();
    this.state = {
      demo: false,
      apropos: false,
      logo: true,
      contact: false,
      popUp:false,
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

  popDemo = () => {
    
    this.setState({
    popUp:true,
    }
    ) 

   

}

popOff = () => {
  
this.setState({
popUp:false,
}
) 

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
      <div>

        <div className="texteService hauteur">
          <div id="texteService" className="notHover" onClick={this.service} >SERVICES  </div>
        </div>

        <div className="apropos hauteur">
          <div id="texteApro" className="notHover" onClick={this.apropo}>À PROPOS  </div>
        </div>

        <div className="texteContact hauteur">
          <div id="texteContact" className="notHover" onClick={this.contact} > CONTACT </div>
        </div>

        {this.state.logo &&   
              <div>
        {!this.state.popUp &&  <div className="texteDemo">
        <div id="texteDemo" className="notHoverDemo" >
          <button className="button button1" onClick={this.popDemo}>PLAY DEMO</button>
        </div>
      </div>}
      {this.state.popUp &&  <div onClick={this.popOff}> <PopUp  />   </div>}
      <div className="logoCenter">

<img className="logoLanding" id="logoL" src={logo} alt="logoL" />


</div>
        <Imagine /></div>  }
    
      
       

       {this.state.apropos &&  <div className="box">
      <div className="container"> <Apropo/></div>  </div>}

         {this.state.contact &&   <div className="box">
          <div className="container"> <Contact/> </div>  </div>}

       {this.state.demo && <div className="box">
        <div className="container"> <Demo/></div>  </div> }


      </div>

    )
  }
}


export default App;
