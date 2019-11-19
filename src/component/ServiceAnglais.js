import React, { Component } from 'react';
import '../App.css';
import ReactHover from 'react-hover'
const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 0,
  shiftY: 20
}



class Service extends Component {
  constructor() {
    super();

    this.state = {

    };
  }


  componentDidMount() {


  }





  render() {
    return (
      <div>






         {/* ////////////!!!!!!!!!!!!!!!!!!  TEXTE CONTAINER !!!!!!!!!!!!!!!!!!!!!!!!!!////////////////////////////////  */}

        <div className="texteContainer">


          {/* /////////////  texte braker ////////////////////////////////  */}


          <ReactHover options={optionsCursorTrueWithMargin}>
            <ReactHover.Trigger type='trigger'>
              <p className="texteService" > MOVIE
</p>
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>
            <div className="boxSize">
             m tempus, imperdiet nisl et, lacinia diam. Maecenas condimentum odio eu mollis commodo. Curabitur eget sapien mattis, molestie eros ac, mattis turpis. Praesent eget felis non dolor vehicula facilisis. Sed tristique dignissim fringilla. Aliquam velit leo, lacinia imperdiet sem et, feugiat imperdiet ipsum. Sed aliquet ante ut augue feugiat auctor. Mauris non justo quis sem convallis aliquet. Q
              </div>
            </ReactHover.Hover>
          </ReactHover>


          {/* /////////////  texte braker ////////////////////////////////  */}

          <ReactHover options={optionsCursorTrueWithMargin}>
            <ReactHover.Trigger type='trigger'>
              <p className="texteService" > PICTURE
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
              <p className="texteService" > POSTPROD
</p>
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>
            <div className="boxSize">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed, imperdiet nisl et, lacinia diam. Maecenas condimentum odio eu mollis commodo. Curabitur eget sapien mattis, molestie eros ac, mattis turpis. Praesent eget felis non dolor vehicula facilisis. Sed tristique dignissim fringilla. Aliquam velit leo, lacinia imperdiet sem et, feugiat imperdiet ipsum. Sed aliquet ante ut augue feugiat auctor. Mauris non justo quis sem convallis aliquet. Q
              </div>
            </ReactHover.Hover>
          </ReactHover>

        </div>

        {/* ////////////!!!!!!!!!!!!!!!!!!  TEXTE CONTAINER !!!!!!!!!!!!!!!!!!!!!!!!!!////////////////////////////////  */}

        <div className="texteContainer">


          {/* /////////////  texte braker ////////////////////////////////  */}


          <ReactHover options={optionsCursorTrueWithMargin}>
            <ReactHover.Trigger type='trigger'>
              <p className="texteService" > TV
</p>
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>
            <div className="boxSize">
              Lorem ipsum dolor sit amet, consectetur admperdiet nisl et, lacinia diam. Maecenas condimentum odio eu mollis commodo. Curabitur eget sapien mattis, molestie eros ac, mattis turpis. Praesent eget felis non dolor vehicula facilisis. Sed tristique dignissim fringilla. Aliquam velit leo, lacinia imperdiet sem et, feugiat imperdiet ipsum. Sed aliquet ante ut augue feugiat auctor. Mauris non justo quis sem convallis aliquet. Q
              </div>
            </ReactHover.Hover>
          </ReactHover>


          {/* /////////////  texte braker ////////////////////////////////  */}

          <ReactHover options={optionsCursorTrueWithMargin}>
            <ReactHover.Trigger type='trigger'>
              <p className="texteService" > WEB
</p>
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>
            <div className="boxSize">
              Loimentum odio eu mollis commodo. Curabitur eget sapien mattis, molestie eros ac, mattis turpis. Praesent eget felis non dolor vehicula facilisis. Sed tristique dignissim fringilla. Aliquam velit leo, lacinia imperdiet sem et, feugiat imperdiet ipsum. Sed aliquet ante ut augue feugiat auctor. Mauris non justo quis sem convallis aliquet. Q
              </div>
            </ReactHover.Hover>
          </ReactHover>


    
        {/* /////////////  texte braker ////////////////////////////////  */}

        <ReactHover options={optionsCursorTrueWithMargin}>
            <ReactHover.Trigger type='trigger'>
              <p className="texteService" > CORPO
</p>
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>
            <div className="boxSize">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis sem tempus, imperdiet nisl et, lacinia diam. Maecenas condimentum odio eu mollis commodo. Curabitur eget sapien mattis, molestie eros ac, mattis turpis. Praesent eget felis non dolor vehicula facilisis. Sed tristique dignissim fringilla. Aliquam velit leo, lacinia imperdiet sem et, feugiat imperdiet ipsum. Sed aliquet ante ut augue feugiat auctor. Mauris non justo quis sem convallis aliquet. Q
              </div>
            </ReactHover.Hover>
          </ReactHover>





        </div>


      </div>

    )
  }
}


export default Service;
