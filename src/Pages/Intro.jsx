import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/dp.png";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 md:p-6">
      <div className="flex flex-auto bg-white text-white p-4 md:basis-1/3 justify-center">
        <img
          src={profilePic}
          alt="profile"
          className="w-48 h-48 md:w-90 md:h-90 rounded-full object-cover"
        />
      </div>
      <div className="flex-auto bg-gray-100 text-black p-4 md:basis-2/3 m-2 md:m-3">
        <h1 className="m-2 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
          <span className="text-black-500">Hi, I'm</span>{" "}
          <span className="text-blue text-blue-600">Dilakshan</span>
        </h1>
        <h1 className="text-blue-600 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
          Jeganathan
        </h1>

        <p className="text-gray-600 m-2 md:m-4 text-base md:text-xl font-normal text-left">
          Full-stack developer and designer creating beautiful, functional
          digital experiences. I'm passionate about building modern web
          applications that solve real-world problems
        </p>
        <div className="mt-6 flex flex-col sm:flex-row w-full sm:w-3/4 md:w-1/2 gap-3 md:gap-4 text-base">
          <Link
            to="/#featured-projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("featured-projects")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="your-button-classes"
          >
            <button className="flex-1 rounded-full border text-white px-4 py-2 bg-blue-600 hover:bg-blue-700 w-full">
              View My Work
            </button>{" "}
          </Link>
          <button
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("finishtouch").scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="flex-1 rounded-full border px-4 py-2 hover:shadow-inset hover:bg-gray-200 w-full"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
