import React, { Component } from 'react';
import '../App.css';
import ReactPlayer from 'react-player/vimeo'

import paliser from "../image/course.jpg";
import cactus from "../image/bouts.jpg";
class Cover2 extends Component {
  constructor() {
    super();
    this.state = {
 
      jcp2: true,
      jcp3: false,

      playing2: false,
      playing3: false,
    };
  }
  componentDidUpdate = () => {

    if (this.props.dataFromParent !== 2 && this.state.playing2 === true) {
      this.setState({
        playing2: false,
      }
      )
    }
    if (this.props.dataFromParent !== 2 && this.state.playing3 === true) {
      this.setState({
        playing3: false,
      }
      )
    }
  }



  play2 = () => {
    this.setState({
      playing2: true,
    }
    )
  }

  play3 = () => {
    this.setState({
      playing3: true,
    }
    )
  }



  jcp2 = () => {
    this.setState({
   
      jcp2: true,
      jcp3: false,

      playing1: false,
      playing3: false,
    }
    )
    document.getElementById("vid22").className = "test3 "
    document.getElementById("vid33").className = "test3 displayNo"
  }
  jcp3 = () => {
    this.setState({

      jcp2: false,
      jcp3: true,

      playing1: false,
      playing2: false,

    }
    )

    document.getElementById("vid22").className = "test3 displayNo"
    document.getElementById("vid33").className = "test3"
  }


  render() {

    return (
      <div className="container2 white">
        <div className="box2 "   >

          <div className="centerAll"   >
            <div className="marginT "   >
              <hr className="lineSplit2" />
              <div className="AGName "   >ADRIEN GAGNON</div>
              <hr className="lineSplit2" />


              <div className="containerTextVideo">


                <div className="boxSize">
                  <div className="test2">
                    <div


                      className="test33" onClick={this.jcp3} onMouseEnter={this.jcp3}>

                      <img id="" className="imgCover" src={cactus} alt="cover" />
                    </div>
                    <ReactPlayer
                      onPlay={this.play3}
                      controls={true}
                      playing={this.state.playing3}
                      id="vid33"
                      className="test3 displayNo"
                      url='https://vimeo.com/564286266/a4502a5c0c'
                      width='100%'
                      height='100%'
                    />

                  </div>


                </div>


                <div className="largeScreen2">
                  <div className="test2 ">
                    <div className="test33" onClick={this.jcp2} onMouseEnter={this.jcp2}>
                      <img id="" className="imgCover" src={paliser} alt="cover" />
                    </div>

                    <ReactPlayer
                      onPlay={this.play2}
                      controls={true}
                      playing={this.state.playing2}
                      id="vid22"
                      className="test3 displayNo"
                      url='https://vimeo.com/563918030/3a60172ebc'
                      width='100%'
                      height='100%'
                    />
                  </div>
                </div>

          



                <div>


                  {this.state.jcp2 &&
                    <div>
                      <div className="titre AGcolor"  >Palliser


                      </div>
                      <div className="texte AGcolor"  >Montage vidéo à partir d’images fixes (photos) fournies par le client. Pour donner un peu plus de qualité, nous avons ajouté de l’animation/effets dans certaines images pour rendre le tout plus dynamique.
                      </div>
                    </div>}



                  {this.state.jcp3 && <div>
                    <div className="titre AGcolor"  >Natuzzi (Remontage 30s)


                    </div>
                    <div className="texte AGcolor couleurAG"  >Nous avons été mandaté de produire une publicité 30s à partir d’une vidéo existante de 55 secondes. Nous avons dû recréer une histoire à partir d’images existantes et créer une ambiance qui fait rêver avec des effets sonores.
                    </div>
                  </div>}


                </div>
              </div>




            </div>
          </div>
        </div>

        <div id="" className="footer2" >
          <div id="" className="client2"   ></div>
          <div id="" className="clientONAG"  ></div>
          <div id="" className="client2" ></div>
          <div id="" className="client2" ></div>
          <div id="" className="client2" ></div>
        </div>


      </div>
    )
  }
}
export default Cover2;
