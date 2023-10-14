import React from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
import { BiSolidKey } from "react-icons/bi";

const EventsLogBox = () => {
  return (
    <div className="bg-white p-4 w-[300px] h-fit">
      <div className="flex items-center gap-1">
        <TbActivityHeartbeat  className="text-3xl text-gray-400"/>
        <p className="font-semibold text-sm">Events Log</p>
        <button className="flex text-sm items-center justify-center p-1 px-4 bg-[#64ddc7] rounded-[20px] text-white">see all</button>
      </div>
      <div className="text-sm">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <BiSolidKey className="text-xl text-gray-400" />
            <p className="font-semibold text-[#64ddc7]">hubx</p>
          </div>
          <div>
            <p className="text-gray-400">22 minutes</p>
          </div>
        </div>
        <div className="ml-6">
          <p>Logged in</p>
          <p className="font-semibold text-[#64ddc7]">more info</p>
        </div>
      </div>
    </div>
  );
};

export default EventsLogBox;
