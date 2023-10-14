import React from "react";
import { SlCalender } from "react-icons/sl";
import {
  AiOutlineUsergroupAdd,
  AiOutlineFieldTime,
  AiOutlineTags,
} from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import { GrPowerCycle } from "react-icons/gr";
import { SiGoogledocs } from "react-icons/si";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Graph from "./Graph";

const GraphSection = () => {
  return (
    <div className=" flex justify-between m-4 bg-white p-2   ">
      
      
      <div className="w-[65%]">
        <nav className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-2 dashboard-nav-button-hover-effect p-2">
            <div>
              <SlCalender />
            </div>
            <p className="text-sm">Your School</p>
          </div>
          <div className="flex items-center gap-4  ">
            <div className="dashboard-nav-button-hover-effect p-2">
              <button className="text-sm">New SignUps</button>
            </div>
            <div className="dashboard-nav-button-hover-effect p-2">
              <button className="text-sm">Revenue</button>
            </div>
            <div className="dashboard-nav-button-hover-effect p-2">
              <button className="text-sm">Product sale</button>
            </div>
            <div className="dashboard-nav-button-hover-effect p-2">
              <button className="text-sm">Active learners</button>
            </div>
            <div className="bg-gray-200 p-1 px-4 rounded-3xl flex justify-between items-center gap-4">
              <p className="text-sm">Last 7-days</p>
              <BiSolidDownArrow />
            </div>
          </div>
        </nav>
        <div className="w-full">
          <Graph />
        </div>
      </div>

      <div className="grid grid-cols-3 w-[30%]">
        <div className="flex flex-col gap-0.5 justify-center items-center ">
          <div className="text-3xl">
            <AiOutlineUsergroupAdd className="text-[#64ddc7]"/>
          </div>
          <p className="text-sm">All Users</p>
          <p className="font-bold text-lg">1</p>
        </div>

        <div className="flex flex-col gap-0.5 justify-center items-center">
          <div className="text-3xl ">
            <GrPowerCycle className="text-[#64ddc7]" />
          </div>
          <p className="text-sm">Conversions</p>
          <p className="font-bold text-lg">0</p>
        </div>
        <div className="flex flex-col gap-0.5 justify-center items-center">
          <div className="text-3xl">
            <LiaShoppingBagSolid className="text-[#64ddc7]" />
          </div>
          <p className="text-sm">30 days sales</p>
          <p className="font-bold text-lg">0</p>
        </div>
        <div className="flex flex-col gap-0.5 justify-center items-center">
          <div className="text-3xl">
            <AiOutlineFieldTime className="text-[#64ddc7]" />
          </div>
          <p className="text-sm">Avg time</p>
          <div className="flex gap-1">
            <p className="font-bold text-lg">0</p>
            <span className="self-end">min</span>
          </div>
        </div>

        <div className="flex flex-col gap-0.5 justify-center items-center">
          <div className="text-3xl">
            <SiGoogledocs className="text-[#64ddc7]" />
          </div>
          <p className="text-sm">Courses</p>
          <p className="font-bold text-lg">0</p>
        </div>

        <div className="flex flex-col gap-0.5 justify-center items-center">
          <div className="text-3xl">
            <AiOutlineTags className="text-[#64ddc7]" />
          </div>
          <p className="text-sm">Course Categories</p>
          <p className="font-bold text-lg">0</p>
        </div>
      </div>

      
    </div>
  );
};

export default GraphSection;
