import React from "react";
import { BsStopwatch } from "react-icons/bs";

const TrailPeriodBox = () => {
  return (
    <div className="h-fit w-[300px] relative">
      <div className="background w-[300px] h-40 absolute"></div>
      <div className="w-[300px] h-40 p-4 bg-white ">
        <div className="flex justify-between ">
          <div className="flex flex-col justify-center items-center gap-1 relative ">
            <p className="font-semibold text-black text-lg">Trail period</p>
            <div className="bg-[#4de7cb] font-semibold rounded-full absolute w-[90px] h-[90px] text-sm flex flex-col items-center justify-center text-white top-[30px] border-white border-2 shadow-2xl ">
              <p>30</p>
              <p>DAYS LEFT</p>
            </div>
          </div>
          <div>
            <BsStopwatch className="text-3xl" />
          </div>
        </div>
        <br />
        <div className="relative  ">
          <button className="text-xs absolute top-12 left-[150px] bg-[#e94bac] rounded-[20px] text-white font-semibold px-2 py-1">{`Upgrade now! >>`}</button>
        </div>
      </div>
    </div>
  );
};

export default TrailPeriodBox;
