import React, { Component } from 'react';
import '../App.css';
import ReactPlayer from 'react-player'

class Popup extends Component {
  constructor() {
    super();
    this.state = {
    };
  }




  render() {

    return (
      <div className='popUp' >
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
  
   </div>  
    )
  }
}
export default Popup;
