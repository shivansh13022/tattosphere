import React from "react";

const Offer = () => {
  return (
    <div className="bg-black flex flex-col gap-10 pt-6">
      <div className="text-gray-800 text-6xl font-bold pt-16 text-center flex justify-center items-center">
        {/* Line on the left of "What" */}
        <span className="inline-block w-1/3 h-1 bg-[#c2af80] mr-2"></span>
        What do we offer?
      </div>
      <div className="flex flex-row gap-20 px-32">
        <div className="flex flex-col w-1/3 justify-center items-center">
          <p className="text-slate-700 text-4xl font-bold mt-5">Tattoos</p>
          <p className="text-lg font-normal mt-5" style={{ color: "#C4A75C" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt, nunc nec faucibus nunc nec faucibus.
          </p>
        </div>
        <div className="flex flex-col w-1/3 items-center">
          <p className="text-slate-700 text-4xl font-bold mt-5">
            Tattoo Removal
          </p>
          <p className=" text-lg font-normal mt-5" style={{ color: "#C4A75C" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt, nunc nec faucibus.
          </p>
        </div>
        <div className="flex flex-col w-1/3 items-center">
          <p className="text-slate-700 text-4xl font-bold mt-5">
            Tatto Coverup
          </p>
          <p className=" text-lg font-normal mt-5" style={{ color: "#C4A75C" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt, nunc nec faucibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
