import React from 'react';
import '../css/VideoDetail.css';

const VideoDetail = ({ video }) => {
  if(!video){
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
    <div className="center">
      <iframe
       title="video player"
       allowFullScreen="allowFullScreen"
       frameBorder="0"
       className='videoPlayer'
       src={videoSrc} 
      />
    </div>
      <div className="text">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;