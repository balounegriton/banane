import React, { Component } from 'react';
import '../App.css';
import ReactPlayer from 'react-player/vimeo'
import cercle_plien from "../image/cercle_plien.png";
import cercle_vide from "../image/cercle_vide.png";
import table from "../image/tablebois.jpg";
import paliser from "../image/paliser.jpg";
import cactus from "../image/cactus.jpg";
class Cover1 extends Component {
  constructor() {
    super();
    this.state = {
      jcp1: true,
      jcp2: false,
      jcp3: false,
      cercle1:cercle_plien,
      cercle2:cercle_vide,
      cercle3:cercle_vide,
      playing1:false,
      playing2:false,
      playing3:false,
    };
  }
  componentDidUpdate= () => {  
    if(this.props.dataFromParent !==1 && this.state.playing1 === true){
     this.setState({
      playing1:false,
     }
     )
    }
    if(this.props.dataFromParent !==1 && this.state.playing2 === true){
      this.setState({
       playing2:false,
      }
      )
     }
     if(this.props.dataFromParent !==1 && this.state.playing3 === true){
      this.setState({
       playing3:false,
      }
      )
     }
   }

  allo = () => {
    this.props.actionName()
  }
  play1 = () => {
    this.setState({
      playing1:true,
    }
    )
  }

  play2 = () => {
    this.setState({
      playing2:true,
    }
    )
  }

  play3 = () => {
    this.setState({
      playing3:true,
    }
    )
  }


  jcp1 = () => {
    this.setState({
      jcp1: true,
      jcp2: false,
      jcp3: false,
      cercle1:cercle_plien,
      cercle2:cercle_vide,
      cercle3:cercle_vide,
  
      playing2:false,
      playing3:false,
    }
    )
    document.getElementById("vid1").className = "test3"
    document.getElementById("vid2").className = "test3 displayNo"
    document.getElementById("vid3").className = "test3 displayNo"
  }
  jcp2 = () => {
    this.setState({
      jcp1: false,
      jcp2: true,
      jcp3: false,
      cercle1:cercle_vide,
      cercle2:cercle_plien,
      cercle3:cercle_vide,
      playing1:false,
      playing3:false,
    }
    )
    document.getElementById("vid1").className = "test3 displayNo"
    document.getElementById("vid2").className = "test3 "
    document.getElementById("vid3").className = "test3 displayNo"
  }
  jcp3 = () => {
    this.setState({
      jcp1: false,
      jcp2: false,
      jcp3: true,
      cercle1:cercle_vide,
      cercle2:cercle_vide,
      cercle3:cercle_plien,
      playing1:false,
      playing2:false,

    }
    )
    document.getElementById("vid1").className = "test3 displayNo"
    document.getElementById("vid2").className = "test3 displayNo"
    document.getElementById("vid3").className = "test3"
  }


  render() {

    return (
      <div className="container white">
        <div className="box2 "   >

          <div className="centerAll"   >
            <div className=" "   >
            <hr className="lineSplit"/>
            <div className="JcpName "   >JCPERRAULT</div>
            <hr className="lineSplit"/>


              <div className="containerTextVideo">


                <div className="boxSize">
                  <div className="test2">
                  <div  
                  
                  
                  className="test33" onClick={this.jcp3}> 
                  
                  <img id="" className="imgCover" src={cactus} alt="cover"  />
                  </div>
                  <ReactPlayer
                  onPlay={this.play3}
                  controls={true}
                  playing={this.state.playing3}
                  id="vid3"
                  className="test3 displayNo"
                  url='https://vimeo.com/540287695'
                 width='100%'
                 height='100%'
                 />
      
                 </div>


                </div>


                <div className="largeScreen2">
                  <div className="test2 ">
                  <div   className="test33" onClick={this.jcp2}>
                  <img id="" className="imgCover" src={paliser} alt="cover"  />
                    </div>
                
                    <ReactPlayer
                  onPlay={this.play2}
                  controls={true}
                  playing={this.state.playing2}
                  id="vid2"
                  className="test3 displayNo"
                  url='https://vimeo.com/540295699'
                 width='100%'
                 height='100%'
                 />
                  </div>
                </div>

                <div className="largeScreen3">
                  <div className="test2">
                 <div   className="test33" onClick={this.jcp1}>
                  <img id="" className="imgCover" src={table} alt="cover"  />
                    </div>
                    <ReactPlayer
                  onPlay={this.play1}
                  controls={true}
                  playing={this.state.playing1}
                  id="vid1"
                  className="test3"
                  url='https://vimeo.com/540310664'
                 width='100%'
                 height='100%'
                 />
                    </div>
                </div>



                <div>

                {this.state.jcp1 &&
                  <div>
                    <div className="titreJcp"  >Commandite Star Académie
                   

             </div>
                    <div className="texteJcp"  >
                       Montage vidéo à partir donner un peu plus de qualité, nous avons ajouté de l’animation/effets dans certaines images pour rendre le tout plus dynamique.
                         </div>
                  </div>}

                {this.state.jcp2 &&
                    <div>
                    <div className="titreJcp"  >Palliser 
                   

             </div>
                <div className="texteJcp"  >Montage vidéo à partir d’images fixes (photos) fournies par le client. Pour donner un peu plus de qualité, nous avons ajouté de l’animation/effets dans certaines images pour rendre le tout plus dynamique.
             </div>
             </div>}
           


                {this.state.jcp3 &&     <div>
                    <div className="titreJcp"  >Natuzzi (Remontage 30s)
                   

             </div>
                <div className="texteJcp"  >Nous avons été mandaté de produire une publicité 30s à partir d’une vidéo existante de 55 secondes. Nous avons dû recréer une histoire à partir d’images existantes et créer une ambiance qui fait rêver avec des effets sonores.
             </div>
             </div>}


</div>     </div>
<div className="selection">

                <div className="numberContainer">

                  <div id="jcp1" className="numb" onClick={this.jcp1} >  <img id="" className="cercle" src={this.state.cercle1} alt="cover" /> </div>
                  <div id="jcp2" className="numb" onClick={this.jcp2} >  <img id="" className="cercle" src={this.state.cercle2} alt="cover" /> </div>
                  <div id="jcp3" className="numb" onClick={this.jcp3}> <img id="" className="cercle" src={this.state.cercle3} alt="cover" /> </div>

                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Cover1;
