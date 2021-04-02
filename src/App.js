import './App.css';
import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import logo from "./image/logoBanane.png";
import Cover0 from './component/Cover0.js'
import Cover1 from './component/Cover1.js'
import Cover2 from './component/Cover2.js'
import Cover3 from './component/Cover3.js'
import SlideNumber from './component/SlideNumber.js';


import flecheGauche from "./image/gauche.svg";
import flecheDroite from "./image/droite.svg";
import flecheGauche2 from "./image/gauche2.svg";
import flecheDroite2 from "./image/droite2.svg";



let reactSwipeEl;

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


class App extends Component {
  constructor() {
    super();

    this.state = {
      active: 0,
      flecheDroite:flecheDroite,
      flecheGauche:flecheGauche
   
    };
  }
  next = () => { reactSwipeEl.next() }

  prev = () => { reactSwipeEl.prev() }

  update = () => {
    this.setState({
      active: reactSwipeEl.getPos()
    }
    )
    if (reactSwipeEl.getPos() === 0) {
      document.body.style.backgroundColor = "black";
      this.setState({
        flecheDroite:flecheDroite,
        flecheGauche:flecheGauche
      }
      )
     }
     if (reactSwipeEl.getPos() === 1) {
      document.body.style.backgroundColor = "#FFFDE3";
      this.setState({
        flecheDroite:flecheDroite2,
        flecheGauche:flecheGauche2
      }
      )
      
     }
     if (reactSwipeEl.getPos() === 2) {
      document.body.style.backgroundColor = "purple";
      this.setState({
        flecheDroite:flecheDroite,
        flecheGauche:flecheGauche
      }
      )
     }
     if (reactSwipeEl.getPos() === 3) {
      document.body.style.backgroundColor = "orange";
      this.setState({
        flecheDroite:flecheDroite2,
        flecheGauche:flecheGauche2
      }
      )
     }
  }



  render() {
    return (
      <div className="App">
             
        <div>
          <ReactSwipe
            swipeOptions={{
              continuous: true,
              callback: this.update,
            }}
            ref={el => (reactSwipeEl = el)}  >


            <div ><Cover0  /></div>
            <div ><Cover1  /></div>
            <div ><Cover2 /></div>
            <div ><Cover3 /></div>

          </ReactSwipe>


        </div>
{/* /////////////// LOGO  */}
        {/* <img className="logoOff" id="logo" src={logo} alt="logo" /> */}


        <div className="flecheGauche" >

          <img id="gauche" src={this.state.flecheGauche} alt="cover" onClick={this.prev} />
          <div className="compteur"> <SlideNumber active={this.state.active} /></div>
        </div>




        <div className="flecheDroite"  >

          <img id="droite" src={this.state.flecheDroite} alt="cover" onClick={this.next} />
          <div className="compteur"> <SlideNumber active={this.state.active}/> </div>
        </div>





      </div>
    )
  }
}

export default App;

