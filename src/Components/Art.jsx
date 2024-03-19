import React from "react";
import artist from "../Images/artist.png";

const Art = () => {
  return (
    <div className="bg-black relative">
      <img
        src={artist}
        alt="artist"
        className="pt-20 rounded-3xl items-center justify-center mx-auto"
      />

      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center">
        <h2
          className="text-gray-300 text-7xl font-semibold mb-8"
          style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}
        >
          DISCOVER OUR WORKS
        </h2>
        <button className="bg-white text-lg bg-opacity-20 text-white font-semibold py-3 px-8 border border-white rounded-full hover:bg-opacity-40 transition ease-in-out duration-300">
          GALLERY
        </button>
      </div>
    </div>
  );
};

export default Art;
