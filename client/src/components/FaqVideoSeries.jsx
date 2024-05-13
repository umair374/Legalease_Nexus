import React from "react";
import ReactPlayer from "react-player";

const FaqVideoSeries = () => {
  return (
    <div>
      <div className="mt-10 mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Learn from our FAQ Video Series
        </h2>
      </div>
      <p className="mt-3">Section 1</p>
      <div className="relative mt-10 grid grid-rows-3 grid-flow-col gap-4">
        <ReactPlayer url="https://youtu.be/hU6-UdgeaFA?si=eb_Y-bZSyY4vk6k4" />
        <ReactPlayer url="https://youtu.be/W9J5eoDxMRk?si=Sqp4txN_y67gFr12" />
        <ReactPlayer url="https://youtu.be/E7uCSL6shI0?si=wPO58L_v8IcUfgzt" />
      </div>
      <div>
        <p className="mt-3">Section 2</p>
      </div>
      <div className="relative mt-10 grid grid-rows-3 grid-flow-col gap-4 mb-10">
        <ReactPlayer url="https://youtu.be/xSg3QsHcUqI?si=mkeBv-vGl23fbkPX" />
        <ReactPlayer url="https://youtu.be/R_bipHAYGQo?si=y7jK5tjLD-WfdmLh" />
        <ReactPlayer url="https://youtu.be/I5JwNxr8irI?si=M7pHzzslgA1ZrNbf" />
      </div>
    </div>
  );
};

export default FaqVideoSeries;
