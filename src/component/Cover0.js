import React, { Component } from 'react';
import '../App.css';
import logo from "../image/logoBanane.png";
import ReactPlayer from 'react-player/vimeo';
import ContactForm from './ContactForm';


class Cover0Mobile extends Component {
  constructor() {
    super();
    this.state = {
      demo: false,
      apropos: false,
      logo: true,
      playing: false,
      contact:false


    };
  }
  componentDidUpdate = () => {
    if (this.props.dataFromParent !== 0 && this.state.playing === true) {
      this.setState({
        playing: false
      }
      )
    }
  }
  playDemo = () => {
    this.setState({
      playing: true,
    }
    )
  }

  demoReel = () => {


    if (this.state.demo === true && this.state.apropos === false && this.state.logo === false && this.state.contact === false ) {
      this.setState({
        demo: false,
        apropos: false,
        logo: true,
        contact:false
      }
      )
      this.setState({
        playing: false,
      }
      )

      document.getElementById("texteDemo").className = "notHover"
      document.getElementById("demoBox").className = "test4 displayNo"
    }

    if (this.state.demo === false && this.state.apropos === true && this.state.logo === false && this.state.contact === false ) {
      this.setState({
        demo: true,
        apropos: false,
        logo: false,
        contact:false
      }
      )

      document.getElementById("texteDemo").className = "Hover"
      document.getElementById("texteApro").className = "notHover"
      document.getElementById("demoBox").className = "test4 "
    }
    if (this.state.demo === false && this.state.apropos === false && this.state.logo === true && this.state.contact === false ) {
      this.setState({
        demo: true,
        apropos: false,
        logo: false,
        contact:false
      }
      )

      document.getElementById("texteDemo").className = "Hover"
      document.getElementById("demoBox").className = "test4"

    }
    if (this.state.demo === false && this.state.apropos === false && this.state.logo === false && this.state.contact === true ) {
      this.setState({
        demo: true,
        apropos: false,
        logo: false,
        contact:false
        
      }
      )
      document.getElementById("texteContact").className = "notHover"
      document.getElementById("texteDemo").className = "Hover"
      document.getElementById("demoBox").className = "test4"

    }


  }

  contact = () => {


    if (this.state.demo === true && this.state.apropos === false && this.state.logo === false && this.state.contact === false ) {
      this.setState({
        demo: false,
        apropos: false,
        logo: false,
        contact:true
      }
      )
      this.setState({
        playing: false,
      }
      )
      document.getElementById("texteContact").className = "Hover"
      document.getElementById("texteDemo").className = "notHover"
      document.getElementById("demoBox").className = "test4 displayNo"
    }

    if (this.state.demo === false && this.state.apropos === true && this.state.logo === false && this.state.contact === false) {
      this.setState({
        demo: false,
        apropos: false,
        logo: false,
        contact:true
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
        contact:true
      }
      )

      document.getElementById("texteContact").className = "Hover"
   

    }

    if (this.state.demo === false && this.state.apropos === false && this.state.logo === false && this.state.contact === true) {
      this.setState({
        demo: false,
        apropos: false,
        logo: true,
        contact:false
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
        contact:false
      }
      )

      document.getElementById("texteApro").className = "Hover"
      document.getElementById("texteDemo").className = "notHover"
      document.getElementById("demoBox").className = "test4 displayNo"
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
        contact:false
      }
      )

      document.getElementById("texteDemo").className = "notHover"
      document.getElementById("demoBox").className = "test4 displayNo"
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
        contact:false
      }
      )

      document.getElementById("texteApro").className = "Hover"

    }

    if (this.state.demo === false && this.state.apropos === false && this.state.logo === false && this.state.contact === true ) {
      this.setState({
        demo: false,
        apropos: true,
        logo: false,
        contact:false
        
      }
      )
      document.getElementById("texteContact").className = "notHover"
      document.getElementById("texteApro").className = "Hover"
  

    }


  

  }

  clients = () => {

    document.getElementById("0001").className = "clientName"
    document.getElementById("0002").className = "clientName"
    document.getElementById("0003").className = "clientName"
    document.getElementById("0004").className = "clientName"
    document.getElementById("0005").className = "clientName"
  }

  clientsOff = () => {
    document.getElementById("0001").className = " noDisplay"
    document.getElementById("0002").className = " noDisplay"
    document.getElementById("0003").className = " noDisplay"
    document.getElementById("0004").className = " noDisplay"
    document.getElementById("0005").className = " noDisplay"
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
          {this.state.contact && <div>   <ContactForm /> </div>}
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

        <div className="clients">
          <div id="texteClients" className="notHover2"  onMouseEnter={this.clients} onMouseLeave={this.clientsOff} >clients </div>
        </div>

      </div>

    )
  }
}
export default Cover0Mobile;
