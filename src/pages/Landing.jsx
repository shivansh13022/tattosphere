import React from "react";
import initial from "../Images/initial.jpg";

const Landing = () => {
  return (
    <div
      className="relative "
      style={{
        backgroundImage: `url(${initial})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black bg-opacity-50  flex justify-start">
        <div className="pl-32 mb-32">
          {" "}
          <p className="text-8xl mt-28 text-slate-300">
            EVERY{" "}
            <strong className="font-semibold" style={{ color: "#C4A75C" }}>
              INK
            </strong>{" "}
            <br />
            TELLS A STORY
          </p>
          <button
            className="mt-5 bg-transparent ml-3 text-lg w-36 text-white font-bold py-2 px-2 rounded border-2 border-white hover:bg-gray-500 hover:text-black hover:border-transparent transition duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:shadow-outline"
            style={{
              color: "#C4A75C",
              borderColor: "#C4A75C",
            }}
          >
            SEE MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
