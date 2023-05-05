import React from "react";

import { useEffect } from "react";
import { useRef } from "react";

const VideoPlayer = ({ src, isPlaying }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    console.log("hello");
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <video ref={videoRef} controls width="400" height="300">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
