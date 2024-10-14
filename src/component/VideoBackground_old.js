import React from 'react';
import video from "./your-video.mp4";


const VideoBackground = () => {
  return  (
    <div className="video-background-container">
      <video autoPlay loop muted playsInline id="video-background">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
  }
  

export default VideoBackground;
