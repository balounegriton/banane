import React from 'react'
import ReactBodymovin from 'react-bodymovin'
import animation2 from './1212.json'
 
const App2 = () => {
  const bodymovinOptions2 = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation2
  }
 
  return (
    <div>
      <ReactBodymovin options={bodymovinOptions2} />
    </div>
  )
}
 
export default App2
