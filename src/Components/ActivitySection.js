import React from "react";
import NewUsersBox from "./NewUsersBox";
import EventsLogBox from "./EventsLogBox";
import CourseBlogBox from "./CourseBlogBox";
import OnlineuserBox from "./OnlineuserBox";
import TrialPeriodBox from "./TrialPeriodBox";

const ActivitySection = () => {
  return (
    <div className="flex flex-wrap m-4 justify-evenly">
      <NewUsersBox />
      <CourseBlogBox />
      <EventsLogBox />
      <div>
        <TrialPeriodBox />
        <OnlineuserBox />
      </div>
    </div>
  );
};

export default ActivitySection;
