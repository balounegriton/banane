import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar.js'
import Landing from './component/Landing.js'
import Demo from './component/Demo.js'
import Client from './component/Client.js'

import Service from './component/Service.js'
import Contact from './component/Contact.js'
import Message from './component/Message.js'
import scrollToComponent from 'react-scroll-to-component';
class App extends Component {
  constructor() {
    super();
    this.myRef = React.createRef()
    this.state = {scrollTop: 0,
      languageFr: true}


  }

  goFr = () => {
    this.setState({ languageFr: true })
  }
  goAn = () => {
    this.setState({ languageFr: false})
  
  }

  scrollToDemo = () => {
    scrollToComponent(this.Message, { offset: 0, align: 'top', duration: 700});
  
  }





  render() {
    
    return (
      <div className="App"  >
        <Navbar languageFr={this.state.languageFr} goAn={this.goAn} goFr={this.goFr} />
        <Landing scrollToDemo={this.scrollToDemo}  />
        <Message languageFr={this.state.languageFr}  ref={(section) => { this.Message = section; }}/>
        <Service />
        
        {/* <Client /> */}



        <Contact />
      </div>
    )
  }
}


export default App;
