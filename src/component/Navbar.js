import React, { Component } from 'react';
import '../App.css';
import logo from "../images/logo.png"
import ScrollEvent from 'react-onscroll';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      navbar:"navHid"

    };
  }

componentDidMount(){
 
}


  handleScrollCallback = () => {
    if (document.body.scrollTop >= 300 || document.documentElement.scrollTop > 300){
      this.setState({
        navbar:"nav"
      })
    }
    else{
     this.setState({
       navbar:"navHid"
     })
    }
   
}


  render() {

      return (
          
        <div className={this.state.navbar}  >
          {/* <img className="logo" id="logo" src={logo} alt="logo" /> */}
          <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
           <div className="language-container">
            {this.props.languageFr && <div id="fr" className="language-texte-selected" >FR</div>}
            {!this.props.languageFr && <div id="fr" className="language-texte" onClick={this.props.goFr}>FR</div>}
            <div className="language-slash"> / </div>
            {!this.props.languageFr && <div id="en" className="language-texte-selected" > EN</div>}
            {this.props.languageFr && <div id="en" className="language-texte" onClick={this.props.goAn} > EN</div>}
          </div>
    
    </div>
      )
    
      
      }




 




  

    




  }



export default Navbar;
