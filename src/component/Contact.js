import React, { Component } from 'react';
import '../App.css';




class Contact extends Component {
  constructor() {
    super();

    this.state = {

    };
  }


  componentDidMount() {


  }
  email = () => {
    console.log("allosasxas")
  };




  render() {
    return (

      <div className="contact">
 


          <div className="emailAdresse" onClick={this.email}>info@la-banane.ca
          <div className="phoneNum">514-712-0366</div>
          
          </div>
     

      </div>
    )
  }
}


export default Contact;
