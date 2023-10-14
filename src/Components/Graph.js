import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Tooltip,
  Line,
  XAxis,
  YAxis,
} from "recharts";

// Sample chart data
const data = [
  {
    date: "2021-02-03",
    newUser: 0,
  },
  {
    date: "2021-02-04",
    newUser: 0,
  },
  {
    date: "2021-02-05",
    newUser: 0,
  },
  {
    date: "2021-02-06",
    newUser: 0,
  },
  {
    date: "2021-02-07",
    newUser: 0,
  },
  {
    date: "2021-02-08",
    newUser: 0,
  },
  {
    date: "2021-02-09",
    newUser: 0,
  },
  {
    date: "", 
    newUser: 1,
  },
];

function Graph() {
  return (
    <div className="m-10">
      <ResponsiveContainer aspect={4}>
        <LineChart data={data} margin={{ right: 1 }}>
          <XAxis
            dataKey="date"
            axisLine={false}
            tick={{ fontSize: 10 }}
          />
          <YAxis
            axisLine={false}
            tick={{ fontSize: 10 }} 
          />
          <Tooltip/>
          <Line
            dataKey="newUser"
            stroke="#64ddc7"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graph;
