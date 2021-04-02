import React, { Component } from 'react';
import '../App.css';
class SlideNumber extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {


    if (this.props.active === 1) {
      return (
        <div className="blackText">
         1/3
        </div>
      )
    }
    if (this.props.active === 2) {
      return (
        <div>
        2/3
        </div>
      )
    }
    if (this.props.active === 3) {
      return (
        <div className="blackText">
        3/3
        </div>
      )
    }


    else {
      return (
        <div>
        </div>

      )
    }


  }
















}



export default SlideNumber;
