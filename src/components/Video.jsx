import React from "react";
import video1 from "../assets/video/video1.mp4";
import video2 from "../assets/video/video2.mp4";
import { SectionWrapper } from "../hoc";

const Video = () => {
  return (
    <div className="flex justify-center gap-10">
      <video
        autoPlay
        loop
        muted
        className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 "
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        muted
        className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 "
      >
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SectionWrapper(Video, "");

// export default Video;
