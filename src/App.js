import React, { Component } from 'react';
import './App.css';
import logo from "./image/logoBanane.png";



class Cover0 extends Component {
  constructor() {
    super();
    this.state = {
      demo: false,
      apropos: false,
      logo: true,
      contact: false


    };
  }



  demoReel = () => {


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

      document.getElementById("texteDemo").className = "notHover"
      document.getElementById("demoBox").className = "test4 displayNone"
    }

    if (this.state.demo === false && this.state.apropos === true && this.state.logo === false && this.state.contact === false) {
      this.setState({
        demo: true,
        apropos: false,
        logo: false,
        contact: false
      }
      )

      document.getElementById("texteDemo").className = "Hover"
      document.getElementById("texteApro").className = "notHover"
      document.getElementById("demoBox").className = "test4 "
    }
    if (this.state.demo === false && this.state.apropos === false && this.state.logo === true && this.state.contact === false) {
      this.setState({
        demo: true,
        apropos: false,
        logo: false,
        contact: false
      }
      )

      document.getElementById("texteDemo").className = "Hover"
      document.getElementById("demoBox").className = "test4"

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
      document.getElementById("texteDemo").className = "Hover"
      document.getElementById("demoBox").className = "test4"

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
      document.getElementById("texteDemo").className = "notHover"
      document.getElementById("demoBox").className = "test4 displayNone"
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
      document.getElementById("texteDemo").className = "notHover"
      document.getElementById("demoBox").className = "test4 displayNone"
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

      document.getElementById("texteDemo").className = "notHover"
      document.getElementById("demoBox").className = "test4 displayNone"
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
      <div className="box2">
        <div className="test5">

          <div id="demoBox" className="test4 displayNone">
            <div className="test2">





            </div>
          </div>

          {this.state.logo && <img className="logoLanding" id="logoL" src={logo} alt="logoL" />}
          {this.state.apropos &&

            <div>
              <div className="texteApro"  >La Banane est un studio créatif plein services, basé à Bromont, Qc. Nous sommes spécialisés
                dans les publicités TV et web. Nous offrons un service de consultation qui cible vos besoins afin de proposer
                une solution éfficace adaptée à vos besoins. Nos experts multidiciplinaires ne reculent devant
                rien pour livrer la marchandise.Nous offrons un service de consultation qui cible vos besoins afin de proposer
                une solution éfficace adaptée à vos besoins. Nos experts multidiciplinaires ne reculent devant
                rien pour livrer la marchandise.
              </div>

            </div>
          }

          {this.state.contact && <div>   contact </div>}

          {this.state.demo && <div>  <iframe className="" id="" title="" src="https://player.vimeo.com/video/248658478" width="640" height="360" frameBorder="0" webkitallowfullscreen="true"
              mozallowfullscreen="true" allowFullScreen></iframe> </div>}


        </div>

        <div className="texteDemo">
          <div id="texteDemo" className="notHover" onClick={this.demoReel} >demo reel  </div>
        </div>


        <div className="apropos">
          <div id="texteApro" className="notHover" onClick={this.apropo}>à propos  </div>

        </div>
        <div className="texteContact">
          <div id="texteContact" className="notHover" onClick={this.contact} > contact </div>
        </div>



      </div>

    )
  }
}
export default Cover0;
