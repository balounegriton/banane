import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar.js'
import Landing from './component/Landing.js'
import Demo from './component/Demo.js'
import Service from './component/Service.js'
import Client from './component/Client.js'
import Contact from './component/Contact.js'
class App extends Component {
  constructor() {
    super();

    this.state = {
      languageFr: true
    };
  }

  goFr = () => {
    this.setState({ languageFr: true })
  }
  goAn = () => {
    this.setState({ languageFr: false})
  
  }

 





  render() {

    return (
      <div className="App">
        <Navbar languageFr={this.state.languageFr} goAn={this.goAn} goFr={this.goFr} />
        <Landing />
        <Demo />
        <Service />
        <Client />
        <Contact />
      </div>
    )
  }
}


export default App;
