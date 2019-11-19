import React, { Component } from 'react';
import '../App.css';
import Service from './Service.js'
import ServiceAnglais from './ServiceAnglais.js'




class Demo extends Component {
  constructor() {
    super();

    this.state = {

    };
  }


  componentDidMount() {


  }





  render() {
    return (
      <div className="demo">
  

        
    
        <div className="demoPlayer">
        {this.props.languageFr && <Service />}
        {!this.props.languageFr && <ServiceAnglais />}
   
        
          <iframe src="https://player.vimeo.com/video/349594476"
          className="demoDiv"
            title="demo"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen>

          </iframe>
    

        </div>

      </div>
      
    )
  }
}


export default Demo;
