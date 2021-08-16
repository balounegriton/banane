import React, { Component } from 'react';
import '../App.css';
import ReactPlayer from 'react-player/vimeo'


class Cover4 extends Component {
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
    if(this.props.dataFromParent !==3 && this.state.playing1 === true){
     this.setState({
      playing1:false,
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








  render() {

    return (
      <div className="container3 white">
        <div className="box2 "   >

          <div className="centerAll"   >
            <div className="marginT "   >
            <hr className="lineSplit4"/>
            <div className="PneuName "   >PNEU SELECT</div>
            <hr className="lineSplit4"/>


              <div className="containerTextVideo">




                <div className="largeScreen333">
                  <div className="test2">
           
                    <ReactPlayer
                  onPlay={this.play1}
                  controls={true}
                  playing={this.state.playing1}
                  id="vid1"
                  className="test3 "
                  url='https://vimeo.com/574105058'
                 width='100%'
                 height='100%'
                 />
                    </div>
                </div>



                <div>


                   <div>
                    <div className="titre Pneu"  >Natuzzi (Remontage 30s)
                   

             </div>
                <div className="texte Pneu"  >Nous avons été mandaté de produire une publicité 30s à partir d’une vidéo existante de 55 secondes. Nous avons dû recréer une histoire à partir d’images existantes et créer une ambiance qui fait rêver avec des effets sonores.
             </div>
             </div>


</div>     </div>



            </div>
          </div>
        </div>

        <div id="" className="footer2" >
<div id="" className="client2"   ></div>
<div id=""className="client2"   ></div>
<div id=""className="client2"></div>
<div id=""className="clientONPneu" ></div>
<div id=""className="client2" ></div>
</div>


      </div>
    )
  }
}
export default Cover4;
