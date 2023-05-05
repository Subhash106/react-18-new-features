import { useMemo, useState } from "react";
import video from "../../assets/video.mp4";
import VideoPlayer from "../videoPlayer";

import Input from "../input";

const VideoController = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");

  console.log("text", text);

  return (
    <>
      <div>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <VideoPlayer src={video} isPlaying={isPlaying} />
    </>
  );
};

export default VideoController;
