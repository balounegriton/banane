import React, { Component } from 'react';
import '../App.css';
import ReactPlayer from 'react-player/vimeo'

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
            <div className="marginT "   >
            <hr className="lineSplit"/>
            <div className="JcpName "   >JCPERREAULT</div>
            <hr className="lineSplit"/>


              <div className="containerTextVideo">


                <div className="boxSize">
                  <div className="test2">
                  <div  
                  
                  
                  className="test33" onClick={this.jcp3} onMouseEnter={this.jcp3}> 
                  
                  <img id="" className="imgCover" src={cactus} alt="cover"  />
                  </div>
                  <ReactPlayer
                  onPlay={this.play3}
                  controls={true}
                  playing={this.state.playing3}
                  playsinline={true}
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
                  <div   className="test33" onClick={this.jcp2} onMouseEnter={this.jcp2}>
                  <img id="" className="imgCover" src={paliser} alt="cover"  />
                    </div>
                
                    <ReactPlayer
                  onPlay={this.play2}
                  controls={true}
                  playing={this.state.playing2}
                  playsinline={true}
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
                 <div   className="test33 " onClick={this.jcp1} onMouseEnter={this.jcp1}>
                  <img id="" className="imgCover" src={table} alt="cover"  />
                    </div>
                    <ReactPlayer
                  onPlay={this.play1}
                  controls={true}
                  playsinline={true}
                  playing={this.state.playing1}
                  id="vid1"
                  className="test3 displayNo"
                  url='https://vimeo.com/540310664'
                 width='100%'
                 height='100%'
                 />
                    </div>
                </div>



                <div>

                {this.state.jcp1 &&
                  <div>
                    <div className="titre Jcp"  >Commandite Star Académie
                   

             </div>
                    <div className="texte Jcp"  >
                       Montage vidéo à partir donner un peu plus de qualité, nous avons ajouté de l’animation/effets dans certaines images pour rendre le tout plus dynamique.
                         </div>
                  </div>}

                {this.state.jcp2 &&
                    <div>
                    <div className="titre Jcp"  >Palliser 
                   

             </div>
                <div className="texte Jcp"  >Montage vidéo à partir d’images fixes (photos) fournies par le client. Pour donner un peu plus de qualité, nous avons ajouté de l’animation/effets dans certaines images pour rendre le tout plus dynamique.
             </div>
             </div>}
           


                {this.state.jcp3 &&     <div>
                    <div className="titre Jcp"  >Natuzzi (Remontage 30s)
                   

             </div>
                <div className="texte Jcp"  >Nous avons été mandaté de produire une publicité 30s à partir d’une vidéo existante de 55 secondes. Nous avons dû recréer une histoire à partir d’images existantes et créer une ambiance qui fait rêver avec des effets sonores.
             </div>
             </div>}


</div>     </div>



            </div>
          </div>
        </div>

        <div id="" className="footer2" >
<div id="" className="clientON"   ></div>
<div id=""className="client2"   ></div>
<div id=""className="client2"></div>
<div id=""className="client2" ></div>
<div id=""className="client2" ></div>
</div>


      </div>
    )
  }
}
export default Cover1;
