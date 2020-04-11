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
        C'EST SIMPLE, LA BANANE CRÉE DU CONTENU HORS DU COMMUN EN UTILISANT DES TECHNOLOGIES AVANCÉES.
       
        </div>}
     
{!this.props.languageFr && <div className="message">
         IT'S SIMPLE, LA BANANE CREATES OUTSTANDING CONTENT USING ADVANCED TECHNOLOGIES.
        </div>}
      </div>


    )


  }
}

export default Landing;

