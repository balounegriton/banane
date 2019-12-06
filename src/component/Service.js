import React, { Component } from 'react';
import '../App.css';
import Anim0 from "./Animation/AnimLand.js";
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



          <p id="service1" className="texteService notClick" onClick={this.toggleHover1}> VIDEO.
</p>








          {/* /////////////  texte braker ////////////////////////////////  */}

          <p id="service2" className="texteService notClick" onClick={this.toggleHover2}> PHOTO.
</p>





          {/* /////////////  texte braker ////////////////////////////////  */}

          <p id="service3"className="texteService notClick" onClick={this.toggleHover3}> MOTION.
</p>













          {/* /////////////  texte braker ////////////////////////////////  */}


          <p id="service4" className="texteService notClick" onClick={this.toggleHover4}> WEB.
</p>







          {/* ////////////!!!!!!!!!!!!!!!!!!  TEXTE CONTAINER fin !!!!!!!!!!!!!!!!!!!!!!!!!!////////////////////////////////  */}
        </div>

        {/* /////////////  ANIMATION ////////////////////////////////  */}



        {this.state.Anim0 && <div className="animSize"><Anim0 /></div>
        }
        {this.state.Anim1 && 
        
        <div className="texteAnim">

         


          <div>

            {this.props.languageFr && <div className="boxSize">
              TV et Web. Spécialisé dans les tournage corpo, entrevue, conférence et captation sportive. Notre équipement et a la pointe de la technologie. Fait intéressant, en 2019, 80% du contenu partager sur le web est de la vidéo.
              </div>}

            {!this.props.languageFr && <div className="boxSize">
              English TV et Web. Spécialisé dans les tournage corpo, entrevue, conférence et captation sportive. Notre équipement et a la pointe de la technologie. Fait intéressant, en 2019, 80% du contenu partager sur le web est de la vidéo.
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
  
              {this.props.languageFr && <div className="boxSize">
                TV et Web. Spécialisé dans les tournage corpo, entrevue, conférence et captation sportive. Notre équipement et a la pointe de la technologie. Fait intéressant, en 2019, 80% du contenu partager sur le web est de la vidéo.
                </div>}
  
              {!this.props.languageFr && <div className="boxSize">
                English TV et Web. Spécialisé dans les tournage corpo, entrevue, conférence et captation sportive. Notre équipement et a la pointe de la technologie. Fait intéressant, en 2019, 80% du contenu partager sur le web est de la vidéo.
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
  
              {this.props.languageFr && <div className="boxSize">
                TV et Web. Spécialisé dans les tournage corpo, entrevue, conférence et captation sportive. Notre équipement et a la pointe de la technologie. Fait intéressant, en 2019, 80% du contenu partager sur le web est de la vidéo.
                </div>}
  
              {!this.props.languageFr && <div className="boxSize">
                English TV et Web. Spécialisé dans les tournage corpo, entrevue, conférence et captation sportive. Notre équipement et a la pointe de la technologie. Fait intéressant, en 2019, 80% du contenu partager sur le web est de la vidéo.
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
  
              {this.props.languageFr && <div className="boxSize">
                TV et Web. Spécialisé dans les tournage corpo, entrevue, conférence et captation sportive. Notre équipement et a la pointe de la technologie. Fait intéressant, en 2019, 80% du contenu partager sur le web est de la vidéo.
                </div>}
  
              {!this.props.languageFr && <div className="boxSize">
                English TV et Web. Spécialisé dans les tournage corpo, entrevue, conférence et captation sportive. Notre équipement et a la pointe de la technologie. Fait intéressant, en 2019, 80% du contenu partager sur le web est de la vidéo.
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
