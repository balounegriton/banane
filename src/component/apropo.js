import React, { Component } from 'react';
import '../App.css';
import virge from "../image/virge.jpg";
import noe from "../image/noe.jpg";
class Apropo extends Component {
  constructor() {
    super();
    this.state = {
    };
  }




  render() {

    return (
      <div className="about">
            <div className="texteApro1"  > Qui sommes-nous ?
      </div>
      <div className="texteApro"  > Fondé en 2017 par Virginie Delorme et Noé Provost,
       La Banane est un studio créatif plein services, basé à Bromont, Qc. Nous sommes 
       spécialisés dans les publicités TV et web. Nous offrons un service de consultation qui cible 
       vos besoins afin de proposer une solution efficace adaptée à vos besoins.
      </div>

      <img className="photoPortrait" id="" src={virge} alt="" />

      <img className="photoPortrait" id="" src={noe} alt="" />
      
    
      <div className='emptyDiv'></div>
      </div>
    )
  }
}
export default Apropo;
