import React, { Component } from 'react';
import '../App.css';
import PopUp from './Popup.js';
import logo from "../image/logoBanane.png";

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

        <img className="logoLanding" id="logoL" src={logo} alt="logoL" />


        </div>
        <div className="texteDemo">
          <div id="texteDemo" className="notHoverDemo" >
            <button className="button button1" onClick={this.popDemo}>PLAY DEMO</button>
          </div>
        </div>
        {this.state.popUp &&  <div onClick={this.popOff}> <PopUp  />   </div>}


      </div>
    )
  }
}
export default Logo;
