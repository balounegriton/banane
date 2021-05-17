import React, { Component } from 'react';
import '../App.css';

import logoJcp from "../image/logojcp.png";

class Cover1Mobile extends Component {
  constructor() {
    super();
    this.state = {
      jcp1: true
    };
  }
  allo = () => {
    this.props.actionName()
  }



  jcp1 = () => {
    this.setState({
      jcp1: true,
      jcp2: false,
      jcp3: false,
    }
    )
    document.getElementById("jcp1M").className = "numbM"
    document.getElementById("jcp2M").className = "numbOffM"
    document.getElementById("jcp3M").className = "numbOffM"
  }
  jcp2 = () => {
    this.setState({
      jcp1: false,
      jcp2: true,
      jcp3: false,
    }
    )
    document.getElementById("jcp1M").className = "numbOffM"
    document.getElementById("jcp2M").className = "numbM"
    document.getElementById("jcp3M").className = "numbOffM"
  }
  jcp3 = () => {
    this.setState({
      jcp1: false,
      jcp2: false,
      jcp3: true,
    }
    )
    document.getElementById("jcp1M").className = "numbOffM"
    document.getElementById("jcp2M").className = "numbOffM"
    document.getElementById("jcp3M").className = "numbM"

  }


  render() {

    return (
      <div className="container white">
        <div className="box2 "   >

          <div className="centerAllMobile"   >
            <div className=" "   >
              <img id="jcp" className="logoJcp" src={logoJcp} alt="logo" />

              <div className="containerTextVideo">
                <div className="largeScreen">
                  <div className="test2">

                    {this.state.jcp1 &&
                    
               

                    <iframe
                      className="test3"
                      src="https://player.vimeo.com/video/540310664?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen title="demo v333">
                    </iframe>}

                    {this.state.jcp2 && <iframe
                      className="test3"
                      src="https://player.vimeo.com/video/540295699?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen title="demo v333">
                    </iframe>
                    
 
                    }


                    {this.state.jcp3 && <iframe
                      className="test3"
                      src="https://player.vimeo.com/video/540287695?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen title="demo v333">
                    </iframe>}

                  </div>
                  <div className="numberContainerMobile">

                    <div id="jcp1M" className="numbM" onClick={this.jcp1} >1  </div>
                    <div id="jcp2M" className="numbOffM" onClick={this.jcp2} >2  </div>
                    <div id="jcp3M" className="numbOffM" onClick={this.jcp3}>3  </div>

                  </div>
                </div>

                {this.state.jcp1 &&     <div>
                    <div className="titreJcpMobile"  >Commandite Star Académie
                   

             </div>
                    <div className="texteJcpMobile"  >
                      Conceptualisation, tournage et montage de 5 messages (10s) pour la commandite de Star Académie. Nous avons travaillé sur un jeu de lumière et d’ombrage pour ce concept.
</div>
                  </div>}

                {this.state.jcp2 && <div>
                    <div className="titreJcpMobile"  >Palliser 

             </div>
                    <div className="texteJcpMobile"  >
                    Montage vidéo à partir d’images fixes (photos) fournies par le client. Pour donner un peu plus de qualité, nous avons ajouté de l’animation/effets dans certaines images pour rendre le tout plus dynamique.
</div>
                  </div>}


                {this.state.jcp3 && <div>
                    <div className="titreJcpMobile"  >Natuzzi (Remontage 30s)
                   

             </div>
                    <div className="texteJcpMobile"  >
                    Nous avons été mandaté de produire une publicité 30s à partir d’une vidéo existante de 55 secondes. Nous avons dû recréer une histoire à partir d’images existantes et créer une ambiance qui fait rêver avec des effets sonores.
</div>
                  </div>}



              </div>



            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Cover1Mobile;
