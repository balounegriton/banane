import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar.js'
import Landing from './component/Landing.js'
import Service from './component/Service.js'
import Contact from './component/Contact.js'
import Message from './component/Message.js'
import { withGetScreen } from 'react-getscreen'
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






  render() {

    if (this.props.isMobile() || this.props.isTablet()) {
      return (

        <div className="">
      negriton
      
            </div>
      )
    }

    else{
      return (
        <div className="App"  >
          <Navbar languageFr={this.state.languageFr} goAn={this.goAn} goFr={this.goFr} />
          <Landing scrollToDemo={this.scrollToDemo}  />
          <Message languageFr={this.state.languageFr}  ref={(section) => { this.Message = section; }}/>
          <Service languageFr={this.state.languageFr}  />
          
          {/* <Client /> */}
  
  
  
          <Contact />
        </div>
      )
    }
    

  }
}

export default withGetScreen(App);
