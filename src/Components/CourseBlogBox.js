import React from "react";
import { SiDocsdotrs } from "react-icons/si";

const CourseBlogBox = () => {
  return (
    <div className="bg-white p-4 w-[330px] h-fit mb-4">
      <div className="flex items-center gap-1">
        <SiDocsdotrs className="text-3xl" />
        <p className="font-semibold">How to sell courses blog</p>
        <button className="flex text-sm items-center justify-center p-1 px-4 bg-[#64ddc7] rounded-[20px] text-white">see all</button>
      </div>
      <div className="flex justify-between">
        <div className="m-4 w-[180px]">
          <ul className="text-[#64ddc7] listStyle  flex flex-col gap-2 text-sm">
            <li>Blended Learnig: What It Is, Why it Matter & How to Apply</li>
            <li>Join Course Sales Bootcamp [Free Live WorkShops]</li>
            <li>12 Steps to Creating Awesome Live Classes In 2021</li>
            <li>
              Guy Kawasaki on the future of Business in the Midst of a Pandemic
            </li>
            <li>What is Education Marketing & How to Use to Grow with Examples</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-10 mt-4 items-end text-sm">
          <li><p>2 days ago</p></li>
            <li><p>12 days ago</p></li>
            <li><p>20 days ago</p></li>
            <li><p>22 days ago</p></li>
            <li><p>23 days ago</p></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseBlogBox;
