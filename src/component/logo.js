import React, { Component } from 'react';
import '../App.css';
import logo from "../image/logoBanane.png";
import VideoBackground from './VideoBackground.js';
import PopUp from './Popup.js';

class Logo extends Component {
  constructor() {
    super();
    this.state = {
      popUp:false,
    };
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

  render() {

    return (
      <div>
        <div className="">

 


        </div>
        <div className="texteDemo">
          <div id="texteDemo" className="notHoverDemo" >
            <button className="button button1" onClick={this.popDemo}>PLAY DEMO</button>
          </div>
        </div>
        {this.state.popUp &&  <div onClick={this.popOff}> <PopUp  />   </div>}

        <VideoBackground />

      </div>
    )
  }
}
export default Logo;
