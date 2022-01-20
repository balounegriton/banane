import React, { Component } from 'react';
import '../App.css';
import ReactPlayer from 'react-player'

class Demo extends Component {
  constructor() {
    super();
    this.state = {
    };
  }




  render() {

    return (
      <div className='demo-width'>

        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://vimeo.com/668244502'
            width='100%'
            height='100%'
            controls
          />
        </div>

      </div>

    )
  }
}
export default Demo;
