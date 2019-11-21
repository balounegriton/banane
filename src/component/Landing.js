import React, { Component } from 'react';
import '../App.css';
import './Landing.css';
import logo from "../images/logo.png"
import loop from "../video/loop.mp4";
import Anim1 from "./Animation/Amin1.js";
import { withGetScreen } from 'react-getscreen'


class Landing extends Component {
  constructor() {
    super();
    this.state = {
    };
  }



  componentDidMount() {
    if (!this.props.isMobile() && this.refs.vidRef !== undefined) {
      this.refs.vidRef.pause();
    }
  }
  componentDidUpdate() {
    if (!this.props.isMobile() && this.refs.vidRef !== undefined) {
      this.refs.vidRef.pause();
    }
  }


  playVideo = () => {
    this.refs.vidRef.play();
    document.getElementById("video1").className = "mouseHover";
  };

  pauseVideo = () => {
    this.refs.vidRef.pause();
    document.getElementById("video1").className = "mouseNotHover";
  };

  render() {

    if (this.props.isMobile() || this.props.isTablet()) {
      return (

        <div className="">
          mobile ou tablette
            </div>
      )
    }


    else {

      return (

        <div className="landingContainer">
          {/* <img className="logoLanding" id="logo2" src={logo} alt="logo"
           
            onClick={this.props.scrollToDemo} /> */}

          <div className="logoLanding"
           onMouseEnter={this.playVideo}
           onMouseLeave={this.pauseVideo}>
          <Anim1  />
            </div>


          <div className="colorBackground">
            <video
              id="video1"
              className="mouseNotHover"
              ref="vidRef"
              src={loop}
              type="video/mp4"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      )

    }
  }
}

export default withGetScreen(Landing);

