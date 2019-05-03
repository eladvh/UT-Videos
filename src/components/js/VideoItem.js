import React from 'react';
import '../css/VideoItem.css';


const VideoItem = ({ video, onVideoSelect }) => {
  return (
  <div onClick={() => onVideoSelect(video)} className="wrapper">
    <div className="box1">
      <img
        className="thumb"
        src={video.snippet.thumbnails.medium.url} 
        alt={video.snippet.title} 
      />
      {video.snippet.title}
    </div>
  </div>
  );
};

export default VideoItem;