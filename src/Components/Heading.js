import React from "react";
import { AiOutlinePlus, AiOutlineEye, AiOutlineQuestion } from "react-icons/ai";
import { GrPowerShutdown } from "react-icons/gr";

const Heading = ({toggleModal}) => {
  return (
    <nav className="flex justify-between p-4 pr-8 pl-8 bg-white mx-4">
      <div className="flex gap-4">
        <p className="flex justify-center items-center text-xl font-bold">
          Dashboard
        </p>
        <div className="flex justify-center items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center  ">
            <AiOutlinePlus />
          </div>
          <p className="text-sm">Create course</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center  ">
            <AiOutlineEye />
          </div>
          <p className="text-sm">preview home page</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center  ">
            <AiOutlineEye />
          </div>
          <p className="text-sm">Preview after login page</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center  ">
            <GrPowerShutdown />
          </div>
          <p className="text-sm">View welcome screen</p>
        </div>
      </div>
      <div className="flex gap-2">
      <button className="flex justify-center items-center gap-2" onClick={toggleModal}>
          <div className="w-8 h-8 bg-[#64ddc7] rounded-full flex items-center justify-center  ">
            <AiOutlinePlus className="text-white" />
          </div>
          <p className="text-sm">Invite</p>
        </button>
        <div className="flex justify-center items-center gap-2">
          <div className="w-8 h-8 bg-[#64ddc7] rounded-full flex items-center justify-center  ">
            <AiOutlineQuestion className="text-white" />
          </div>
          <p className="text-sm">Help</p>
        </div>
      </div>
    </nav>
  );
};

export default Heading;
