import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import "./Modal.css";
import { ImCross } from "react-icons/im";

const InviteModal = ({ toggleModal, modal }) => {
  const [inviteCount, setInviteCount] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const totalPeople = inviteCount;
    const time = duration;

    setChartState({
      ...chartState,
      series: [totalPeople, time],
    });
  }, [inviteCount, duration]);

  const options = {
    chart: {
      width: 380,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const [chartState, setChartState] = useState({
    options: options,
    series: [10, 90],
  });

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>

          <div className="modal-content">
            <div className="flex justify-center m-4">
              <h2 className="text-3xl font-semibold text-black">
                Price Calculator for Events
              </h2>
              <button className="close-modal" onClick={toggleModal}>
                <ImCross className="text-2xl" />
              </button>
            </div>

            <div className="flex mt-8">
              <div className="flex flex-col gap-4 justify-evenly">
                <div>
                  <div className="flex justify-between mb-2 items-center">
                    <p className="text-2xl">No. Of Invites</p>
                    <input
                      type="number"
                      name="invitePeople"
                      className="border-b-2 border-black w-[20%]"
                      placeholder="0000"
                      value={inviteCount}
                      onChange={(e) => setInviteCount(parseInt(e.target.value))}
                    />
                  </div>
                  <input
                    type="range"
                    name="invitePeople"
                    id="invitePeople"
                    className="win10-thumb"
                    value={inviteCount}
                    onChange={(e) => setInviteCount(parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2 items-center">
                    <p className="text-2xl">Duration Of Event</p>
                    <input
                      type="number"
                      name="duration"
                      className="border-b-2 border-black w-[20%]"
                      placeholder="0000"
                      value={duration}
                      onChange={(e) => setDuration(parseInt(e.target.value))}
                    />
                  </div>
                  <input
                    type="range"
                    name="duration"
                    id="duration"
                    className="win10-thumb"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                  />
                </div>
                <div className="flex justify-evenly items-center">
                  <div className="flex items-center flex-col justify-center">
                    <p className="text-xl">Total People</p>
                    <p className="text-black font-bold text-2xl">
                      {inviteCount}
                    </p>
                  </div>
                  <div className="flex items-center flex-col justify-center">
                    <p className="text-xl">Duration of Event</p>
                    <p className="text-black font-bold text-2xl">{duration}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-lg">Total Price</p>
                  <p className="text-2xl font-bold text-black">
                    {inviteCount * duration}
                  </p>
                </div>
              </div>

              <div
                id="chart"
                className="flex flex-col gap-2 justify-center items-center"
              >
                <div className="flex justify-between gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-[50px] h-[15px] bg-[#5ce88bd4]"></div>
                    <p>Total People</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[50px] h-[15px] bg-[#5c76e8e1]"></div>
                    <p>Time</p>
                  </div>
                </div>
                <ReactApexChart
                  options={chartState.options}
                  series={chartState.series}
                  type="donut"
                  width={500}
                />
                <div>
                  <button className="w-40 h-12 bg-[#41e699] rounded-xl text-xl font-semibold text-white">
                    Add More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InviteModal;
