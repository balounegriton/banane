import React, { Component } from 'react';
import '../App.css';
import Anim1 from "./Animation/AnimVideo.js";
import Anim2 from "./Animation/AnimPhoto.js";
import Anim3 from "./Animation/AnimMotion.js";
import Anim4 from "./Animation/AnimWeb.js";




class Service extends Component {
  constructor() {
    super();

    this.state = {
      Anim0: true,
      Anim1: false,
      Anim2: false,
      Anim3: false,
      Anim4: false,
    };
  }


  componentDidMount() {



  }




  toggleHover1 = () => {
    this.setState({
      Anim0: false,
      Anim1: true,
      Anim2: false,
      Anim3: false,
      Anim4: false,

    })
    document.getElementById("service1").className = "texteService clicked";

    document.getElementById("service2").className = "texteService notClick";
    document.getElementById("service3").className = "texteService notClick";
    document.getElementById("service4").className = "texteService notClick";
    
  }


  toggleHover2 = () => {
    this.setState({
      Anim0: false,
      Anim1: false,
      Anim2: true,
      Anim3: false,
      Anim4: false,

    })

    document.getElementById("service2").className = "texteService clicked";

    document.getElementById("service1").className = "texteService notClick";
    document.getElementById("service3").className = "texteService notClick";
    document.getElementById("service4").className = "texteService notClick";
  }

  toggleHover3 = () => {

    this.setState({
      Anim0: false,
      Anim1: false,
      Anim2: false,
      Anim3: true,
      Anim4: false,

    })
    document.getElementById("service3").className = "texteService clicked";

    document.getElementById("service1").className = "texteService notClick";
    document.getElementById("service2").className = "texteService notClick";
    document.getElementById("service4").className = "texteService notClick";
  }
  toggleHover4 = () => {

    this.setState({
      Anim0: false,
      Anim1: false,
      Anim2: false,
      Anim3: false,
      Anim4: true,

    })
    document.getElementById("service4").className = "texteService clicked";

    document.getElementById("service1").className = "texteService notClick";
    document.getElementById("service3").className = "texteService notClick";
    document.getElementById("service2").className = "texteService notClick";

  }



  render() {
    return (
      <div className="serviceDiv">





        {/* ////////////!!!!!!!!!!!!!!!!!!  TEXTE CONTAINER !!!!!!!!!!!!!!!!!!!!!!!!!!////////////////////////////////  */}

        <div className="texteContainer">

          <p className="texteService" > SERVICES:
</p>

          {/* /////////////  texte braker ////////////////////////////////  */}



          <p id="service1" className="texteService notClick" onMouseOver={this.toggleHover1}> VIDEO.
</p>








          {/* /////////////  texte braker ////////////////////////////////  */}

          <p id="service2" className="texteService notClick" onMouseOver={this.toggleHover2}> PHOTO.
</p>





          {/* /////////////  texte braker ////////////////////////////////  */}

          <p id="service3" className="texteService notClick" onMouseOver={this.toggleHover3}> MOTION.
</p>













          {/* /////////////  texte braker ////////////////////////////////  */}


          <p id="service4" className="texteService notClick" onMouseOver={this.toggleHover4}> WEB.
</p>







          {/* ////////////!!!!!!!!!!!!!!!!!!  TEXTE CONTAINER fin !!!!!!!!!!!!!!!!!!!!!!!!!!////////////////////////////////  */}
        </div>

        {/* /////////////  ANIMATION ////////////////////////////////  */}



        {this.state.Anim1 &&

          <div className="texteAnim">




            <div>
              {/* ///////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//////1/ VIDEO */}
              {this.props.languageFr && <div className="boxSize">
              Vidéo publicitaire télévision & web, capsules informatives, couvertures événementielles, conférence avec diffusion live,

              </div>}

              {!this.props.languageFr && <div className="boxSize">
              Television & web advertising video, informative capsules, event covers, conference with live broadcast.
              </div>}
            </div>
            <div className="animSize">
              <Anim1 />
            </div>
          </div>

        }
        {this.state.Anim2 &&
          <div className="texteAnim">




            <div>
              {/* ///////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/////// Photo */}
             
              <div className="colorBackground">
      
            </div>
              {this.props.languageFr && <div className="boxSize">
              Photographie d’ambiance, de produits, portraits corporatifs, campagnes publicitaires, aventure, retouche professionnelle.
                </div>}

              {!this.props.languageFr && <div className="boxSize">
              Ambient, product photography, corporate portraits, advertising campaigns, adventure, professional retouching.

                </div>}
        
          
                
                 
            </div>
       
            <div className="animSize">
              <Anim2 />
            
            </div>
          </div>
        }
        {this.state.Anim3 &&
          <div className="texteAnim">




            <div>
 {/* ///////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/////// MOTION */}
              {this.props.languageFr && <div className="boxSize">
              Solution créative. Motion design 2D et 3D, vfx, corrections de shoot, tracking, rotoscoping, kinetic typography, Trapcode particular. 
                </div>}

              {!this.props.languageFr && <div className="boxSize">
              Creative solution. Motion design 2D and 3D, vfx, shoot corrections, tracking, rotoscoping, kinetic typography, Trapcode particular. 
                </div>}
            </div>
            <div className="animSize">
              <Anim3 />
            </div>
          </div>
        }
        {this.state.Anim4 &&
          <div className="texteAnim">




            <div>
 {/* ///////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/////// WEB */}
              {this.props.languageFr && <div className="boxSize">
              Applications web conçues avec React.js et autres “leading edge tech”, animations exportées en .json, approche “mobile first”, correction de bug. 
                </div>}

              {!this.props.languageFr && <div className="boxSize">
              Web applications designed with React.js and other leading edge technology. Animations exported in .json, mobile first approach, bug correction. 
                </div>}
            </div>
            <div className="animSize">
              <Anim4 />
            </div>
          </div>
        }

      </div>



    )
  }
}


export default Service;
