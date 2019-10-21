import React, { Component } from 'react';
import '../App.css';
import Service from './Service.js'




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
        <Service />
          <iframe src="https://player.vimeo.com/video/349594476"
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
