import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Logo from "../assets/smiley.png";

const NewUsersBox = () => {
  return (
    <div className="bg-white p-4 w-[300px] h-fit">
        <div className="flex items-center gap-1">
          <AiOutlineUsergroupAdd  className="text-3xl"/>
          <p className="font-semibold text-sm">New users</p>
          <button className="flex text-sm items-center justify-center p-1 px-4 bg-[#64ddc7] rounded-[20px] text-white">see all</button>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <div className="bg-gray-300 p-1">
            <img src={Logo} alt="logoimage" width={40} />
          </div>
          <div>
            <p className="text-sm">hubx</p>
            <p className="text-sm">24 minutes</p>
          </div>
        </div>
    </div>
  );
};

export default NewUsersBox;
