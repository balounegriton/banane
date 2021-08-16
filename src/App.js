import './App.css';
import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import Cover0 from './component/Cover0.js'
import Cover1 from './component/Cover1.js'


import Cover2 from './component/Cover2.js'
import Cover3 from './component/Cover3.js'
import Cover4 from './component/Cover4.js'
import Cover5 from './component/Cover5.js'





let reactSwipeEl;

// allo First  we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


class App extends Component {
  constructor() {
    super();

    this.state = {
      active: 0,
      go:true,


    };
  }


  next = () => { reactSwipeEl.next() }

  prev = () => { reactSwipeEl.prev() }

  letsGo = (x) => {
    if (x === reactSwipeEl.getPos()) {

      reactSwipeEl.slide(0, 500)
    }
    else {
      reactSwipeEl.slide(x, 500)
    }
  }


  update = () => {
if(reactSwipeEl.getPos()===0){
  document.getElementById("footer").className = "footer "
}
if(reactSwipeEl.getPos()===1){
  document.getElementById("footer").className = "footer jcpColor"
}
if(reactSwipeEl.getPos()===2){
  document.getElementById("footer").className = "footer AGcolor"
}
if(reactSwipeEl.getPos()===3){
  document.getElementById("footer").className = "footer SDL"
}
if(reactSwipeEl.getPos()===4){
  document.getElementById("footer").className = "footer  Pneu"
}
if(reactSwipeEl.getPos()===5){
  document.getElementById("footer").className = "footer stacolor"
}
    this.setState({
      active: reactSwipeEl.getPos()
    }
    )

  }

  client1 = () => {
    if (this.state.active !== 1) {
      document.getElementById("0001").className = "clientName"
    }

  }

  client1Off = () => {
    document.getElementById("0001").className = " noDisplay"
  }

  client2 = () => {
    if (this.state.active !== 2) {
      document.getElementById("0002").className = "clientName"
    }

  }

  client2Off = () => {
    document.getElementById("0002").className = " noDisplay"
  }

  client3 = () => {
    if (this.state.active !== 3) {
      document.getElementById("0003").className = "clientName"
    }

  }

  client3Off = () => {
    document.getElementById("0003").className = " noDisplay"
  }
  client4 = () => {
    if (this.state.active !== 4) {
      document.getElementById("0004").className = "clientName"
    }

  }

  client4Off = () => {
    document.getElementById("0004").className = " noDisplay"
  }
  client5 = () => {
    if (this.state.active !== 5) {
      document.getElementById("0005").className = "clientName"
    }

  }

  client5Off = () => {
    document.getElementById("0005").className = " noDisplay"
  }

  render() {
   

   
   
   
   

    return (

      <div className="App">

        <div >
       
          <ReactSwipe
            className="width100"
            swipeOptions={{
              continuous: true,
              disableScroll: false,
              callback: this.update,
            }}
            ref={el => (reactSwipeEl = el)}  >


            <div className="width100"><Cover0 className="width100" dataFromParent={this.state.active} /></div>
            <div className="width100"><Cover1 className="width100" dataFromParent={this.state.active} /></div>
            <div className="width100"><Cover2 className="width100" dataFromParent={this.state.active} /></div>
            <div className="width100"><Cover3 className="width100" dataFromParent={this.state.active} /></div>
            <div className="width100"><Cover4 className="width100" dataFromParent={this.state.active} /></div>
            <div className="width100"><Cover5 className="width100" dataFromParent={this.state.active} /></div>

          </ReactSwipe>


        </div>









        <div id="footer" className="footer" >
          <div id="001" className="client" onClick={() => this.letsGo(1)} onMouseEnter={this.client1} onMouseLeave={this.client1Off}  >
            <div id="0001" className="clientName noDisplay">
              JCPerreault
            </div>
          </div>
          <div id="002" className="client" onClick={() => this.letsGo(2)} onMouseEnter={this.client2} onMouseLeave={this.client2Off} >
          <div id="0002" className="clientName noDisplay">
              Adrien Gagnon
            </div>
          </div>
          <div id="003" className="client" onClick={() => this.letsGo(3)} onMouseEnter={this.client3} onMouseLeave={this.client3Off}>
          <div id="0003" className="clientName noDisplay">
              Sentiers de l&rsquo;est
            </div>
          </div>
          <div id="004" className="client" onClick={() => this.letsGo(4)} onMouseEnter={this.client4} onMouseLeave={this.client4Off}>
          <div id="0004" className="clientName noDisplay">
             Pneu select
            </div>
          </div>
          <div id="005" className="client" onClick={() => this.letsGo(5)} onMouseEnter={this.client5} onMouseLeave={this.client5Off}>
          <div id="0005" className="clientName noDisplay">
            station 22
            </div>
          </div>
        </div>

      </div>



    )}
  
}

export default App;

