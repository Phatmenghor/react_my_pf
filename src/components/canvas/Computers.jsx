import React from "react";
import me from "../../assets/tech/me.png";

const ComputersCanvas = () => {
  return (
    <div className="absolute   w-full h-full flex justify-center  items-end xl:justify-end  xl:items-start">
      <img
        className="w-[100%] h-[60%] sm:w-[80%] sm:h-[60%] md:w-[70%] md:h-[70%] lg:w-[50%] lg:h-[70%] xl:w-[48%] xl:h-[75%] 2xl:w-[48%] 2xl:h-[80%]"
        src={me}
        alt="menghor phat"
      />
    </div>
  );
};

export default ComputersCanvas;
