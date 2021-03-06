import React from 'react'
import ReactBodymovin from 'react-bodymovin'
import animation from './animMotion.json'
 
const App = () => {
  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation
  }
 
  return (
    <div>
      <ReactBodymovin options={bodymovinOptions} />
    </div>
  )
}
 
export default App
