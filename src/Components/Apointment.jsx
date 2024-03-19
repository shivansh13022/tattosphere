import React from "react";

const Appointment = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-6xl font-semibold text-slate-400 mb-10">
        Make An Appointment
      </h2>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-700 text-gray-300 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-700 text-gray-300 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-700 text-gray-300 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600 h-48 resize-none"
              id="message"
              placeholder="Enter your message here..."
            ></textarea>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3">
            <button
              className="w-full bg-[#C4A75C] text-black font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-[#b3964c] transition ease-in-out duration-300"
              type="button"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Appointment;
