"use client";

import React, { useState, useEffect } from "react";
import DocumentModal from "@/components/document";

const DoctorDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    console.log("reached");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  function getFormattedDate() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const monthOfYear = monthsOfYear[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${monthOfYear} ${year}`;

    return formattedDate;
  }

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update current time every second

    return () => clearInterval(interval);
  }, []);

  const alerts = [
    {
      image: "/assets/man2.png",
      name: "Rupesh Raut",
      reason: "Consultation",
      time: "10:00 am",
      date: "29 Jan",
    },
    {
      image: "/assets/profile.png",
      name: "Jane Smith",
      reason: "Follow-up",
      time: "02:30 pm",
      date: "10 Dec",
    },
    {
      image: "/assets/profile.png",
      name: "Alice Johnson",
      reason: "Appointment",
      time: "09:15 am",
      date: "11 Dec",
    },
    {
      image: "/assets/profile.png",
      name: "Bob Brown",
      reason: "Emergency",
      time: "04:45 pm",
      date: "12 Dec",
    },
    {
      image: "/assets/profile.png",
      name: "Emily Davis",
      reason: "Check-up",
      time: "10:30 am",
      date: "13 Dec",
    },
  ];

  const appointments = [
    {
      image: "/assets/profile.png",
      name: "John Doe",
      reason: "Consultation",
      time: "11:00 am",
      status: 1, // 1 or 0
    },
    {
      image: "/assets/profile.png",
      name: "Jane Smith",
      reason: "Follow-up",
      time: "02:30 pm",
      status: 0,
    },
    {
      image: "/assets/profile.png",
      name: "Alice Johnson",
      reason: "Appointment",
      time: "09:15 am",
      status: 1,
    },
    {
      image: "/assets/profile.png",
      name: "Bob Brown",
      reason: "Emergency",
      time: "04:45 pm",
      status: 0,
    },
    {
      image: "/assets/profile.png",
      name: "Emily Davis",
      reason: "Check-up",
      time: "10:30 am",
      status: 1,
    },
  ];

  const sizeChart = {
    0: "min-h-[0px]",
    10: "min-h-[40px]",
    12: "min-h-[80px]",
    14: "min-h-[120px]",
    16: "min-h-[160px]",
    18: "min-h-[200px]",
  };

  const weeklyData = ["12", "14", "12", "18", "16", "14", "16"];

  return (
    <div className="flex w-full justify-between">
      <div className="flex-col w-full px-8 py-4">
        <div className="flex w-full justify-between mb-[10px]">
          <h1 className="text-xl text-gray-800 font-bold">Dashboard</h1>
          <p className="text-gray-600 text-[14px]">{getFormattedDate()}</p>
        </div>
        <div className="flex w-full">
          <div className="my-auto mr-[50px]">
            <p className="text-4xl font-bold text-blue-500 ">
              Welcome
              <em className="font-light text-4xl text-blue-500 ml-2">Emily!</em>
            </p>
            <p className="text-gray-800 mt-[10px]">
              You Have <b>7 new patients</b> remaining today!
              <br />
              Remember to check documention before call
            </p>
          </div>
          <div>
            <img className="w-[300px]" src="/assets/instrument.png" />
          </div>
        </div>
        <div className="flex w-full py-[20px] gap-x-4">
          <div className="w-[400px] p-4 bg-[#fafafc]">
            <p className="font-bold text-gray-600 mb-[20px]">
              Today's Appointments
            </p>
            <div>
              {appointments.map((appointment, index) => (
                <div
                  key={index}
                  className="flex border-b-[1px] mt-[5px] py-[5px] pb-[12px] justify-between"
                >
                  <div className="flex">
                    <img
                      className="h-[50px] rounded-[50%] border-[1px]"
                      src={appointment.image}
                      alt={appointment.name}
                    />
                    <div className="m-[5px] ml-[10px]">
                      <p className="text-[15px] font-semibold text-gray-700">
                        {appointment.name}
                      </p>
                      <p className="uppercase text-[12px] font-light text-gray-500">
                        {appointment.reason}
                      </p>
                    </div>
                  </div>
                  <div className="my-auto flex">
                    {appointment.status ? (
                      <img
                        className="my-auto mr-2 h-[20px]"
                        src="/assets/check.png"
                      ></img>
                    ) : (
                      <img
                        className="my-auto mr-2 h-[20px]"
                        src="/assets/remove.png"
                      ></img>
                    )}
                    <p className="text-2xl">{appointment.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col bg-[#fafafc] px-[20px] py-[25px] box-border h-[350px] font-medium font-Lexend text-[18px] text-dark1">
            <div>Patient Analytics</div>
            <div className="flex flex-row mt-[30px] font-normal">
              <div className="flex flex-col-reverse gap-y-[10px] border-[1px]">
                <div className="h-[30px] w-[50px] flex justify-center items-center">
                  0
                </div>
                <div className="h-[30px] w-[50px] flex justify-center items-center">
                  10
                </div>
                <div className="h-[30px] w-[50px] flex justify-center items-center">
                  12
                </div>
                <div className="h-[30px] w-[50px] flex justify-center items-center">
                  14
                </div>
                <div className="h-[30px] w-[50px] flex justify-center items-center">
                  16
                </div>
                <div className="h-[30px] w-[50px] flex justify-center items-center">
                  18
                </div>
              </div>
              <div className="flex flex-col ml-[10px]">
                <div className="flex flex-row justify-evenly gap-x-[10px] h-full">
                  {weeklyData.map((data, index) => {
                    const height = sizeChart[data];
                    return (
                      <div className="flex flex-col w-[45px]" key={index}>
                        <div
                          className={`w-full bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200 mt-auto ${height}`}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-x-[10px] ml-[62px] text-[15px] mt-[5px]">
              <div className="flex justify-center items-center min-w-[45px]">
                Mon
              </div>
              <div className="flex justify-center items-center min-w-[45px]">
                Tue
              </div>
              <div className="flex justify-center items-center min-w-[45px]">
                Wed
              </div>
              <div className="flex justify-center items-center min-w-[45px]">
                Thur
              </div>
              <div className="flex justify-center items-center min-w-[45px]">
                Fri
              </div>
              <div className="flex justify-center items-center min-w-[45px]">
                Sat
              </div>
              <div className="flex justify-center items-center min-w-[45px]">
                Sun
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col px-8 w-[35%] bg-[#fafafc] py-4 h-[]">
        <h1 className="font-bold text-[15px] pb-[15px]">Profile</h1>
        <div className="flex flex-col items-center w-full py-4">
          <img
            className="mb-4 w-[100px] h-[100px] rounded-[50%] border-2"
            src="/assets/d0.png"
          />
          <p className="font-semibold text-gray-700">Dr. Emily White</p>
          <p className="text-gray-400 mt-[5px] font-light text-[12px]">
            Psychiatrist, Therapist
          </p>
        </div>
        <div className="flex w-full justify-between px-4 mt-[10px]">
          <div>
            <h1 className="text-[14px] font-bold text-gray-500">
              Overall Rating
            </h1>
            <p className="text-[28px] font-bold">4.8</p>
          </div>
          <div>
            <h1 className="text-[14px] font-bold text-gray-500">
              Total Patient
            </h1>
            <p className="text-[28px] font-bold">164</p>
          </div>
        </div>
        <div className="flex flex-col mt-[20px]">
          <h1 className="font-bold">Alerts</h1>
          <div>
            {alerts.map((alert, index) => (
              <div
                key={index}
                onClick={openModal}
                className="flex border-b-[1px] mt-[5px] py-[5px] pb-[12px] justify-between"
              >
                <div className="flex">
                  <img
                    className="h-[50px] w-[50px] rounded-[50%] border-[1px]"
                    src={alert.image}
                    alt={alert.name}
                  />
                  <div className="m-[5px] ml-[10px]">
                    <p className="text-[15px] font-semibold text-gray-700">
                      {alert.name}
                    </p>
                    <p className="text-[12px] font-light text-gray-500">
                      {alert.reason}
                    </p>
                  </div>
                </div>
                <div className="my-auto">
                  <p className="font-bold text-[14px]">{alert.time}</p>
                  <p className="text-[14px]">{alert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DocumentModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default DoctorDashboard;
