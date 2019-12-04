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


  componentDidMount() {
    if (!this.props.isMobile() && this.refs.vidRef !== undefined) {
      this.refs.vidRef.pause();
      setTimeout(() => {
        document.getElementById("video1").className = "mouseNotHover";
   
        
      }, 5000);
      setTimeout(() => {
     
        document.getElementById("forHover").className = "logoLanding";
        document.body.style.overflow = "scroll";
        
      }, 6000);
    }
  

  }


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



  render() {




      return (
        <div>
          <div className="landingContainer">


            <div  id="forHover" className="logoLandingLoad"
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
                className="introNoMouse"
                ref="vidRef"
                src={loop}
                type="video/mp4"
                autoPlay
                loop
                muted
              />
            </div>



          </div>

<div className="demoFont">DEMO<br/>REEL</div>

          <div className="animDemo" ><AnimDemo /> </div>

          <div className="youtube" ref={section => {
            this.sectionMotion = section;
          }}>


            <iframe src="https://player.vimeo.com/video/248658478?autoplay=1"
              title="demo"
              className=""
              frameBorder="0"

              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              autoPlay></iframe>

          </div>



        </div>
      )


  }
}

export default withGetScreen(Landing);

