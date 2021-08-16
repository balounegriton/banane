import React from 'react'


class Resize extends Component {
    clients = () =>  handleResize() {
        console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
      
  }
  
      window.addEventListener('resize', handleResize)
    })

    render() {
  
      return (
     <div></div>
      )
    }
  }
  export default Resize;
  



