import './App.css';
import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import Cover0 from './component/Cover0.js'
import Cover1 from './component/Cover1.js'

import Cover2 from './component/Cover2.js'
import Cover3 from './component/Cover3.js'
import SlideNumber from './component/SlideNumber.js';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

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
      flecheDroite: flecheDroite,
      flecheGauche: flecheGauche

    };
  }
  next = () => { reactSwipeEl.next() }

  prev = () => { reactSwipeEl.prev() }

  letsGo = (x) => { 
    if(x === reactSwipeEl.getPos()){

      reactSwipeEl.slide(0 , 500) 
    }
    else{
      reactSwipeEl.slide(x , 500) }
    }


  update = () => {
    this.setState({
      active: reactSwipeEl.getPos()
    }
    )
    if (reactSwipeEl.getPos() === 0) {
      document.body.style.backgroundColor = "black";
      document.getElementById("footer").style.color = "rgb(255, 230, 154)"
      document.getElementById("001").style.background = "transparent"
      document.getElementById("002").style.background = "transparent"
      document.getElementById("003").style.background = "transparent"
      document.getElementById("004").style.background = "transparent"
      document.getElementById("005").style.background = "transparent"
      this.setState({
        flecheDroite: flecheDroite,
        flecheGauche: flecheGauche
      }
      )
    }
    if (reactSwipeEl.getPos() === 1) {
      document.body.style.backgroundColor = "#FFF1C6";
      document.getElementById("footer").style.color = "#201F85"
      document.getElementById("001").style.background = "#201F85"
      document.getElementById("002").style.background = "transparent"
      document.getElementById("003").style.background = "transparent"
      document.getElementById("004").style.background = "transparent"
      document.getElementById("005").style.background = "transparent"
      this.setState({
        flecheDroite: flecheDroite2,
        flecheGauche: flecheGauche2,
        
      }
      )

    }
    if (reactSwipeEl.getPos() === 2) {
      document.body.style.backgroundColor = "purple";
      document.getElementById("footer").style.color = "#201F85"
      document.getElementById("001").style.background = "transparent"
      document.getElementById("002").style.background = "#201F85"
      document.getElementById("003").style.background = "transparent"
      document.getElementById("004").style.background = "transparent"
      document.getElementById("005").style.background = "transparent"
      
      this.setState({
        flecheDroite: flecheDroite,
        flecheGauche: flecheGauche
      }
      )
    }
    if (reactSwipeEl.getPos() === 3) {
      document.body.style.backgroundColor = "orange";
      document.getElementById("footer").style.color = "#201F85"
      document.getElementById("001").style.background = "transparent"
      document.getElementById("002").style.background = "transparent"
      document.getElementById("003").style.background = "#201F85"
      document.getElementById("004").style.background = "transparent"
      document.getElementById("005").style.background = "transparent"
      this.setState({
        flecheDroite: flecheDroite2,
        flecheGauche: flecheGauche2
      }
      )
    }
    if (reactSwipeEl.getPos() === 4) {
      document.body.style.backgroundColor = "rgb(236, 163, 163)";
      document.getElementById("footer").style.color = "#201F85"
      document.getElementById("001").style.background = "transparent"
      document.getElementById("002").style.background = "transparent"
      document.getElementById("003").style.background = "transparent"
      document.getElementById("004").style.background = "#201F85"
      document.getElementById("005").style.background = "transparent"
      this.setState({
        flecheDroite: flecheDroite2,
        flecheGauche: flecheGauche2
      }
      )
    }
    if (reactSwipeEl.getPos() === 5) {
      document.body.style.backgroundColor = "chartreuse";
      document.getElementById("footer").style.color = "#201F85"
      document.getElementById("001").style.background = "transparent"
      document.getElementById("002").style.background = "transparent"
      document.getElementById("003").style.background = "transparent"
      document.getElementById("004").style.background = "transparent"
      document.getElementById("005").style.background = "#201F85"
      this.setState({
        flecheDroite: flecheDroite2,
        flecheGauche: flecheGauche2
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


    <div ><Cover0 dataFromParent = {this.state.active}/></div>
    <div ><Cover1 dataFromParent = {this.state.active}/></div>
    <div ><Cover1 dataFromParent = {this.state.active}/></div>
    <div ><Cover1 dataFromParent = {this.state.active}/></div>
    <div ><Cover1 dataFromParent = {this.state.active}/></div>
    <div ><Cover1 dataFromParent = {this.state.active}/></div>

  </ReactSwipe>


</div>



<div className="flecheGauche" >

  <img id="gauche"  src={this.state.flecheGauche} alt="cover" onClick={this.prev} />
  <div className="compteur"> <SlideNumber active={this.state.active} /></div>
</div>




<div className="flecheDroite"  >

  <img id="droite"  src={this.state.flecheDroite} alt="cover" onClick={this.next} />
  <div className="compteur"> <SlideNumber active={this.state.active} /> </div>
</div>

<div id="footer" className="footer" >
<div id="001" className="client"  onClick={() => this.letsGo(1)} ></div>
<div id="002"className="client" onClick={() => this.letsGo(2)}  ></div>
<div id="003"className="client" onClick={() => this.letsGo(3)}></div>
<div id="004"className="client" onClick={() => this.letsGo(4)}></div>
<div id="005"className="client" onClick={() => this.letsGo(5)}></div>
</div>

</div>



    )
  }
}

export default App;

