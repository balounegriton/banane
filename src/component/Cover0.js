import React, { Component } from 'react';
import '../App.css';
import logo from "../image/logoBanane.png";
import ReactPlayer from 'react-player/vimeo';


class Cover0Mobile extends Component {
  constructor() {
    super();
    this.state = {
      demo: false,
      apropos: false,
      logo: true,
      playing:false,


    };
  }
componentDidUpdate= () => {  
 if(this.props.dataFromParent !==0 && this.state.playing === true){
  this.setState({
    playing:false
  }
  )
 }
}
  playDemo = () => {
    this.setState({
      playing:true,
    }
    )
  }

  demoReel = () => {
  

    if (this.state.demo === true && this.state.apropos === false && this.state.logo === false) {
      this.setState({
        demo: false,
        apropos: false,
        logo: true
      }
      )
      this.setState({
        playing:false,
      }
      )

      document.getElementById("texteDemo").className = "notHover"
      document.getElementById("demoBox").className = "test4 displayNo"
    }

    if (this.state.demo === false && this.state.apropos === true && this.state.logo === false) {
      this.setState({
        demo: true,
        apropos: false,
        logo: false
      }
      )

      document.getElementById("texteDemo").className = "Hover"
      document.getElementById("texteApro").className = "notHover"
      document.getElementById("demoBox").className = "test4 "
    }
    if (this.state.demo === false && this.state.apropos === false && this.state.logo === true) {
      this.setState({
        demo: true,
        apropos: false,
        logo: false
      }
      )

      document.getElementById("texteDemo").className = "Hover"
      document.getElementById("demoBox").className = "test4"

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

      document.getElementById("texteApro").className = "Hover"
      document.getElementById("texteDemo").className = "notHover"
      document.getElementById("demoBox").className = "test4 displayNo"
      this.setState({
        playing:false,
      }
      )

    }

    if (this.state.demo === false && this.state.apropos === true && this.state.logo === false) {
      this.setState({
        demo: false,
        apropos: false,
        logo: true
      }
      )

      document.getElementById("texteDemo").className = "notHover"
      document.getElementById("demoBox").className = "test4 displayNo"
      document.getElementById("texteApro").className = "notHover"
      this.setState({
        playing:false,
      }
      )
    }
    if (this.state.demo === false && this.state.apropos === false && this.state.logo === true) {
      this.setState({
        demo: false,
        apropos: true,
        logo: false
      }
      )

      document.getElementById("texteApro").className = "Hover"

    }
  }
  render() {

    return (
      <div className="box2">
        <div className="test5">

          <div id="demoBox" className="test4 displayNo">
            <div className="test2">
         

                          
              <ReactPlayer
                  onPlay={this.playDemo}
                  controls={true}
                  playing={this.state.playing}
                  id="vidDemo"
                  className="test3"
                  url='https://vimeo.com/403432891'
                  width='100%'
                  height='100%'
              
                 />


            </div>
          </div>

          {this.state.logo && <img className="logoLanding" id="logoL" src={logo} alt="logoL" />}
          {this.state.apropos &&

            <div>
              <div className="texteApro"  >La Banane est un studio créatif plein services, basé à Bromont, Qc. Nous sommes spécialisés
              dans les publicités TV et web. Nous offrons un service de consultation qui cible vos besoins afin de proposer
              une solution éfficace adaptée à vos besoins. Nos experts multidiciplinaires ne reculent devant
              rien pour livrer la marchandise.
 </div>

              <div className="texteApro textContact"  >
                Contactez-nous dès maintenant!<br/>
                info@la-banane.ca<br/>
                514-712-0366
                  </div>
            </div>
          }
        </div>

        <div className="texteDemo">
          <div id="texteDemo" className="notHover" onClick={this.demoReel} >DEMO REEL  </div>
        </div>


        <div className="apropos">
          <div id="texteApro" className="notHover" onClick={this.apropo}>à propos  </div>
        </div>

      </div>

    )
  }
}
export default Cover0Mobile;
