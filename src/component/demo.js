import React, { Component } from 'react';
import '../App.css';
import tournage from "../image/tournage.jpg";
import cyclope from "../image/cyclope.jpg";
class Demo extends Component {
  constructor() {
    super();
    this.state = {
    };
  }




  render() {

    return (
      <div className="about">


    <div className="image-with-text mobileFit">
      <img className="photoService" src={tournage} alt="" />

      <div>
      <div className='TitreService'>FULLPROD</div>
      <div className='sousService'>Préproduction:</div>
      <div className='sousService2'>Script, Casting, Gestion normes de la publicité et telecaster</div>
      <div className='sousService'>Production:</div>
      <div className='sousService2'>Tournage, Direction photo, Éclairage, Réalisation</div>
      <div className='sousService'>Postproduction:</div>
      <div className='sousService2'>Montage, Colorisation, Mix audio, Distribution</div>
      </div>
    </div>
    <div className="image-with-text ">
      

      <div className='texteInverse'>
      <div className='TitreService2'>SPÉCIALITÉS</div>
      <div className='sousService'>3D:</div>
      <div className='sousService3'>Modélisation, Animation, Reconstitution virtuelle</div>
      <div className='sousService'>VFX:</div>
      <div className='sousService3'>Rotoscoping, Compositing</div>
      <div className='sousService'>Motion Design:</div>
      <div className='sousService3'>Typographie animée, Animation de personnages 2D/3D, Animation de logo
</div>
      </div>
      <img className="photoService" src={cyclope} alt="" />
    </div>
    <div className='emptyDiv'></div>
</div>

    )
  }
}
export default Demo;
