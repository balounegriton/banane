import React, { Component } from 'react';
import '../App.css';
import logo from "../image/logoBanane.png";


class Cover0Mobile extends Component {
  constructor() {
    super();
    this.state = {
      demo: false,
      apropos: false,
      logo: true


    };
  }

  
  demoReel = () => {

    if (this.state.demo === true && this.state.apropos === false && this.state.logo === false) {
      this.setState({
        demo: false,
        apropos: false,
        logo: true
      }
      )

      document.getElementById("texteDemoMobile").className = "notHoverMobile"

    }

    if (this.state.demo === false && this.state.apropos === true && this.state.logo === false) {
      this.setState({
        demo: true,
        apropos: false,
        logo: false
      }
      )

      document.getElementById("texteDemoMobile").className = "HoverMobile"
      document.getElementById("texteAproMobile").className = "notHoverMobile"
    }
    if (this.state.demo === false && this.state.apropos === false && this.state.logo === true) {
      this.setState({
        demo: true,
        apropos: false,
        logo: false
      }
      )

      document.getElementById("texteDemoMobile").className = "HoverMobile"

    }



  }


  apropo = () => {

    if (this.state.demo === true && this.state.apropos === false && this.state.logo === false) {
      this.setState({
        demo: false,
        apropos: true,
        logo: false
      }
      )

      document.getElementById("texteAproMobile").className = "HoverMobile"
      document.getElementById("texteDemoMobile").className = "notHoverMobile"

    }

    if (this.state.demo === false && this.state.apropos === true && this.state.logo === false) {
      this.setState({
        demo: false,
        apropos: false,
        logo: true
      }
      )

      document.getElementById("texteDemoMobile").className = "notHoverMobile"
      document.getElementById("texteAproMobile").className = "notHoverMobile"
    }
    if (this.state.demo === false && this.state.apropos === false && this.state.logo === true) {
      this.setState({
        demo: false,
        apropos: true,
        logo: false
      }
      )

      document.getElementById("texteAproMobile").className = "HoverMobile"

    }
  }
  render() {

    return (
      <div className="box">
        <div className="test5Mobile">

          {this.state.demo &&
            <div className="fakeHeight">
              <div className="test4Mobile">
                <div className="test2">
                  <iframe
                    className="test3"
                    src="https://player.vimeo.com/video/403432891?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen title="demo v333">
                  </iframe>

                </div>
              </div>
            </div>}

          {this.state.logo && <div className="fakeHeight"><img className="logoLandingMobile" id="logoL" src={logo} alt="logoL" /> </div>}
          {this.state.apropos &&

            <div className="fakeHeight">

              <div className="texteAproMobile"  >La Banane est un studio créatif plein services, basé à Bromont, Qc. Nous sommes spécialisés
              dans les publicités TV et web. Nous offrons un service de consultation qui cible vos besoins afin de proposer
              une solution éfficace adaptée à vos besoins. Nos experts multidiciplinaires ne reculent devant
              rien pour livrer la marchandise.
 </div>

              <div className="texteAproMobile textContact"  >
                Contactez-nous dès maintenant!<br />
                info@la-banane.ca<br />
                514-712-0366
                  </div>
            </div>
          }
        </div>

        <div className="texteDemoMobile">
          <div id="texteDemoMobile" className="notHoverMobile" onClick={this.demoReel} >DEMO REEL  </div>
        </div>


        <div className="aproposMobile">
          <div id="texteAproMobile" className="notHoverMobile" onClick={this.apropo}>à propos  </div>
        </div>



        <div className="scroll">
          <div  className="swipe" > SWIPE</div>
        </div>
      </div>

    )
  }
}
export default Cover0Mobile;
