import React, { Component } from 'react';
import '../App.css';
import './Landing.css';
import loop from "../video/loop.mp4";
import Anim1 from "./Animation/Amin1.js";
import Anim2 from "./Animation/Amin2.js";
import AnimDemo from "./Animation/AnimDemo.js";
import scrollToComponent from "react-scroll-to-component";
import { withGetScreen } from 'react-getscreen'


class Landing extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  scrollMotion = () => {

    scrollToComponent(this.sectionMotion, {
      offset: 0,
      align: "top",
      duration: 1500
    });
  };




  playVideo = () => {
    this.refs.vidRef.play();
    document.getElementById("video1").className = "mouseHover";
    document.getElementById("logo1").className = "displayNon";
    document.getElementById("logo2").className = "displayOui";

  };

  pauseVideo = () => {
    this.refs.vidRef.pause();
    document.getElementById("video1").className = "mouseNotHover";
    document.getElementById("logo1").className = "displayOui";
    document.getElementById("logo2").className = "displayNon";

  };

  changeLogo = () => {

    this.setState({
      logo: true,
    })
  };
  
endLogo = () => {
  this.setState({
    logo: false,
  })
}


  render() {



    if (this.props.isMobile() || this.props.isTablet()) {
      return (


        <div >
         <div className="mobileTouch" onTouchStart={this.changeLogo} onTouchEnd={this.endLogo}> 
         </div>
         <div className="mobileLanding">
            <div className="mobileLogo" >
            {!this.state.logo &&<Anim1 />}
            {this.state.logo && <Anim2 />}
            </div>
          
         </div>
      
          <div className="demoFont">DEMO<br />REEL</div>

          <div className="animDemo" >
            <AnimDemo />
          </div>

          <div className="youtube" ref={section => {
            this.sectionMotion = section;
          }}>

<iframe title="MOBILE" src="https://player.vimeo.com/video/403432891" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>

          </div>


        </div>
      )



    }

    else {

      return (
        <div>
          <div className="landingContainer">


            <div id="forHover" className="logoLanding"
              onMouseEnter={this.playVideo}
              onMouseLeave={this.pauseVideo}
              onClick={this.scrollMotion}>

              <div id="logo1" className="displayOui">
                <Anim1 />

              </div>
              <div id="logo2" className="displayNon">

                <Anim2 />
              </div>


            </div>




            <div className="colorBackground">
              <video
                id="video1"
                className="mouseNotHover"
                ref="vidRef"
                src={loop}
                type="video/mp4"
                loop
                muted
              />
            </div>



          </div>

          <div className="demoFont">DEMO<br />REEL</div>

          <div className="animDemo" ><AnimDemo /> </div>

          <div className="youtube" ref={section => {
            this.sectionMotion = section;
          }}>

<iframe title="DESKTOP" src="https://player.vimeo.com/video/403432891" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
          </div>



        </div>
      )

    }



  }
}

export default withGetScreen(Landing);

