import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Logo from "../assets/smiley.png";

const OnlineuserBox = () => {
  return (
    <div className="bg-white mt-4 p-4 w-[300px] h-fit mb-4">
      <div className="flex items-center gap-1">
        <AiOutlineUsergroupAdd className="text-3xl" />
        <h3 className="font-semibold text-sm">Online users (1) </h3>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex items-center gap-2 ">
          <div className="bg-gray-300 p-1">
            <img src={Logo} alt="logoimage" width={40} />
          </div>
          <span className="text-sm">hubx</span>
        </div>

        <div className="flex items-end">
          <button className=" flex text-sm items-center justify-center p-1 px-4 bg-[#64ddc7] rounded-[8px] text-white">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineuserBox;
