import React, { Component } from 'react';
import '../App.css';
import ReactHover from 'react-hover'
import Anim1 from "./Animation/Amin1.js";
import Anim2 from "./Animation/Amin2.js";
import Anim3 from "./Animation/Amin3.js";

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

          <p className="texteService" > SERVICE:
</p>

          {/* /////////////  texte braker ////////////////////////////////  */}


          <ReactHover options={optionsCursorTrueWithMargin} >
            <ReactHover.Trigger type='trigger'>
              <p className="texteService" onMouseEnter={this.toggleHover1}> VIDEO.
</p>
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>
              <div className="boxSize">
                m tempus, imperdiet nisl et, lacinia diam. Maecenas condimentum odio eu mollis commodo. Curabitur eget sapien mattis, molestie eros ac, mattis turpis. Praesent eget felis non dolor vehicula facilisis. Sed tristique dignissim fringilla. Aliquam velit leo, lacinia imperdiet sem et, feugiat imperdiet ipsum. Sed aliquet ante ut augue feugiat auctor. Mauris non justo quis sem convallis aliquet. Q
              </div>
            </ReactHover.Hover>
          </ReactHover>


          {/* /////////////  texte braker ////////////////////////////////  */}

          <ReactHover options={optionsCursorTrueWithMargin} >
            <ReactHover.Trigger type='trigger'>
              <p className="texteService" onMouseEnter={this.toggleHover2}> PHOTO.
</p>
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>
              <div className="boxSize">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis sem llis aliquet. Q
              </div>
            </ReactHover.Hover>
          </ReactHover>

          {/* /////////////  texte braker ////////////////////////////////  */}
          <ReactHover options={optionsCursorTrueWithMargin}>
            <ReactHover.Trigger type='trigger'>
              <p className="texteService" onMouseEnter={this.toggleHover3}> MOTION.
</p>
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>
              <div className="boxSize">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed, imperdiet nisl et, lacinia diam. Maecenas condimentum odio eu mollis commodo. Curabitur eget sapien mattis, molestie eros ac, mattis turpis. Praesent eget felis non dolor vehicula facilisis. Sed tristique dignissim fringilla. Aliquam velit leo, lacinia imperdiet sem et, feugiat imperdiet ipsum. Sed aliquet ante ut augue feugiat auctor. Mauris non justo quis sem convallis aliquet. Q
              </div>
            </ReactHover.Hover>
          </ReactHover>









          {/* /////////////  texte braker ////////////////////////////////  */}

          <ReactHover options={optionsCursorTrueWithMargin}>
            <ReactHover.Trigger type='trigger'>
              <p className="texteService" onMouseEnter={this.toggleHover4}> WEB.
</p>
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>
              <div className="boxSize">
                Loimentum odio eu mollis commodo. Curabitur eget sapien mattis, molestie eros ac, mattis turpis. Praesent eget felis non dolor vehicula facilisis. Sed tristique dignissim fringilla. Aliquam velit leo, lacinia imperdiet sem et, feugiat imperdiet ipsum. Sed aliquet ante ut augue feugiat auctor. Mauris non justo quis sem convallis aliquet. Q
              </div>
            </ReactHover.Hover>
          </ReactHover>


          {/* ////////////!!!!!!!!!!!!!!!!!!  TEXTE CONTAINER fin !!!!!!!!!!!!!!!!!!!!!!!!!!////////////////////////////////  */}
        </div>

        {/* /////////////  ANIMATION ////////////////////////////////  */}



        {this.state.Anim0 && <Anim3 />
        }
        {this.state.Anim1 && <Anim1 />
        }
        {this.state.Anim2 && <div><Anim2 /></div>
        }
        {this.state.Anim3 && <div><Anim3 /></div>
        }
        {this.state.Anim4 && <div><Anim1 /></div>
        }

      </div>



    )
  }
}


export default Service;