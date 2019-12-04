import React, { Component } from 'react';
import '../App.css';
import ReactHover from 'react-hover'
import Anim0 from "./Animation/AnimLand.js";
import Anim1 from "./Animation/AnimVideo.js";
import Anim2 from "./Animation/AnimPhoto.js";
import Anim3 from "./Animation/AnimMotion.js";
import Anim4 from "./Animation/AnimWeb.js";

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 0,
  shiftY: 20
}



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

  }

  toggleHover2 = () => {
    this.setState({
      Anim0: false,
      Anim1: false,
      Anim2: true,
      Anim3: false,
      Anim4: false,

    })
  }

  toggleHover3 = () => {

    this.setState({
      Anim0: false,
      Anim1: false,
      Anim2: false,
      Anim3: true,
      Anim4: false,

    })
  }
  toggleHover4 = () => {

    this.setState({
      Anim0: false,
      Anim1: false,
      Anim2: false,
      Anim3: false,
      Anim4: true,

    })
  }



  render() {
    return (
      <div className="serviceDiv">





        {/* ////////////!!!!!!!!!!!!!!!!!!  TEXTE CONTAINER !!!!!!!!!!!!!!!!!!!!!!!!!!////////////////////////////////  */}

        <div className="texteContainer">

          <p className="texteService" > SERVICES:
</p>

          {/* /////////////  texte braker ////////////////////////////////  */}


          <ReactHover options={optionsCursorTrueWithMargin} >
            <ReactHover.Trigger type='trigger'>
              <p className="texteService" onMouseEnter={this.toggleHover1}> VIDEO.
</p>
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>
              
            {this.props.languageFr &&  <div className="boxSize">
              TV et Web. Spécialisé dans les tournage corpo, entrevue, conférence et captation sportive. Notre équipement et a la pointe de la technologie. Fait intéressant, en 2019, 80% du contenu partager sur le web est de la vidéo.
              </div>}
            
              {!this.props.languageFr &&  <div className="boxSize">
              English TV et Web. Spécialisé dans les tournage corpo, entrevue, conférence et captation sportive. Notre équipement et a la pointe de la technologie. Fait intéressant, en 2019, 80% du contenu partager sur le web est de la vidéo.
              </div>}

            
            </ReactHover.Hover>
          </ReactHover>


          {/* /////////////  texte braker ////////////////////////////////  */}

          <ReactHover options={optionsCursorTrueWithMargin} >
            <ReactHover.Trigger type='trigger'>
              <p className="texteService" onMouseEnter={this.toggleHover2}> PHOTO.
</p>
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>

            {this.props.languageFr &&  <div className="boxSize">
            Photo de nimporte quoi, meme ta kequette si tu veux.
              </div>}
            
              {!this.props.languageFr &&  <div className="boxSize">
              en anglais mais photo de nimporte quoi, meme ta kequette si tu veux.
              </div>}

            </ReactHover.Hover>
          </ReactHover>

          {/* /////////////  texte braker ////////////////////////////////  */}
          <ReactHover options={optionsCursorTrueWithMargin}>
            <ReactHover.Trigger type='trigger'>
              <p className="texteService" onMouseEnter={this.toggleHover3}> MOTION.
</p>
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>
            {this.props.languageFr &&  <div className="boxSize">
           du motion desing c'es bin nice
              </div>}
            
              {!this.props.languageFr &&  <div className="boxSize">
              English   du motion desing c'es bin nice
              </div>}
            </ReactHover.Hover>
          </ReactHover>









          {/* /////////////  texte braker ////////////////////////////////  */}

          <ReactHover options={optionsCursorTrueWithMargin}>
            <ReactHover.Trigger type='trigger'>
              <p className="texteService" onMouseEnter={this.toggleHover4}> WEB.
</p>
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>
            {this.props.languageFr &&  <div className="boxSize">
             tu veux tu qu'on en parle du coding
              </div>}
            
              {!this.props.languageFr &&  <div className="boxSize">
             too much coding for mee
              </div>}
            </ReactHover.Hover>
          </ReactHover>


          {/* ////////////!!!!!!!!!!!!!!!!!!  TEXTE CONTAINER fin !!!!!!!!!!!!!!!!!!!!!!!!!!////////////////////////////////  */}
        </div>

        {/* /////////////  ANIMATION ////////////////////////////////  */}



        {this.state.Anim0 && <div className="animSize"><Anim0  /></div>
        }
        {this.state.Anim1 && <div className="animSize"><Anim1  /></div>
        }
        {this.state.Anim2 && <div className="animSize"><Anim2  /></div>
        }
        {this.state.Anim3 && <div className="animSize"><Anim3  /></div>
        }
        {this.state.Anim4 && <div className="animSize"><Anim4  /></div>
        }

      </div>



    )
  }
}


export default Service;
