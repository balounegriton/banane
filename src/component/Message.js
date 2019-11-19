import React, { Component } from 'react';
import '../App.css';




class Landing extends Component {
  constructor() {
    super();
    this.state = {
    };
  }



  render() {





    return (
      <div>

        {this.props.languageFr && <div className="message">
        C'EST SIMPLE, ON REND LA VIE SIMPLE. SIMPLE COMME MANGER UNE BANANE
       
        </div>}
     
{!this.props.languageFr && <div className="message">
          I'M TELLING YOU THE SAME RELISH BUT IN ENGLISH FOR THESE TRUMP LOVERS
        </div>}
      </div>


    )


  }
}

export default Landing;

