import React from "react";
import model from "../Images/model.jpg";

const About = () => {
  return (
    <div className="bg-black flex flex-col gap-10">
      <div className="text-gray-800 px-48 pt-12 justify-start font-extrabold font-serif text-9xl">
        about us
      </div>
      <div className="flex flex-row gap-32 items-center">
        <img src={model} alt="model" className="w-1/3 h-1/3 ml-52 rounded-lg" />
        <p className="text-slate-400 font-bold text-2xl w-1/3">
          “ Our mission is to produce the highest quality work for every
          clients, on every project with full of energy we have ”
        </p>
      </div>
    </div>
  );
};

export default About;
