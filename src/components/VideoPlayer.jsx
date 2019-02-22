import React from 'react';
import App from './App.jsx';

var VideoPlayer = (props) => (
  <div className="mer_video-player">
    <div className="mer_embed-responsive">
      <iframe className="embed-responsive-item" width="680" height="410" src={props.video.video} allowFullScreen></iframe>
    </div>
  </div>
);

export default VideoPlayer;


