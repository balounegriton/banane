import React from 'react'
import ReactBodymovin from 'react-bodymovin'
import animation3 from './anim3.json'
 
const App3 = () => {
  const bodymovinOptions3 = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation3
  }
 
  return (
    <div>
      <ReactBodymovin options={bodymovinOptions3} />
    </div>
  )
}
 
export default App3
