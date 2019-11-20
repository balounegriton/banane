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
 


          <div className="emailAdresse" onClick={this.email}>info@laBanane.ca</div>

      </div>
    )
  }
}


export default Contact;
