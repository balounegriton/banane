import React, { Component } from 'react';
import '../App.css';
import logo from "../image/logo.svg";
import apropos from "../image/apropos.svg";


class Cover0 extends Component {
  constructor() {
    super();
    this.state = {
      demo: false,
      apropos:false,
      logo:true


    };
  }
  demoReel = () => {

    if (this.state.demo === true && this.state.apropos === false && this.state.logo === false) {
      this.setState({
        demo: false,
        apropos:false,
        logo:true
      }
      )

      document.getElementById("texteDemo").className = "texteDemo2"

    }

    if (this.state.demo === false && this.state.apropos === true && this.state.logo === false) {
      this.setState({
        demo: true,
        apropos:false,
        logo:false
      }
      )

      document.getElementById("texteDemo").className = "texteDemo2Hover"
      document.getElementById("texteApro").className = "apropos2"
    }
    if (this.state.demo === false && this.state.apropos === false && this.state.logo === true) {
      this.setState({
        demo: true,
        apropos:false,
        logo:false
      }
      )

      document.getElementById("texteDemo").className = "texteDemo2Hover"

    }



  }


  apropo = () => {

    if (this.state.demo === true && this.state.apropos === false && this.state.logo === false) {
      this.setState({
        demo: false,
        apropos:true,
        logo:false
      }
      )

      document.getElementById("texteApro").className = "apropos2Hover"
      document.getElementById("texteDemo").className = "texteDemo2"

    }

    if (this.state.demo === false && this.state.apropos === true && this.state.logo === false) {
      this.setState({
        demo: false,
        apropos:false,
        logo:true
      }
      )

      document.getElementById("texteDemo").className = "texteDemo2"
      document.getElementById("texteApro").className = "apropos2"
    }
    if (this.state.demo === false && this.state.apropos === false && this.state.logo === true) {
      this.setState({
        demo: false,
        apropos:true,
        logo:false
      }
      )

      document.getElementById("texteApro").className = "apropos2Hover"

    }
  }
  render() {

    return (
      <div className="box">
        <div className="test5">

          {this.state.demo && <div className="test4">
            <div className="test2">
              <iframe
                className="test3"
                src="https://player.vimeo.com/video/403432891?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen title="demo v333">
              </iframe>


            </div>
          </div>}

          {this.state.logo && <img className="logoLanding" id="logoL" src={logo} alt="logoL" />}
          {this.state.apropos && <img className="logoLanding" id="logoL" src={apropos} alt="logoL" />}
        </div>

        <div className="texteDemo">
          <div id="texteDemo" className="texteDemo2" onClick={this.demoReel} >DEMO REEL  </div>
        </div>


        <div className="apropos">
          <div  id="texteApro"className="apropos2" onClick={this.apropo}>à propos  </div>
        </div>

      </div>

    )
  }
}
export default Cover0;
