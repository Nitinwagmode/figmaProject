import React from "react";

const Modern = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:px-12 bg-white">
      {/* Left section */}
      <div className="flex-1 flex flex-col items-start mb-8 lg:mb-0 lg:mr-12 text-center lg:text-left md:pl-60">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ">
          Modern <br /> Temp <span className="text-teal-500">Labour</span>{" "}
          <br /> <span className="text-teal-500">Solutions</span>
        </h1>
        <div className="flex justify-center lg:justify-start space-x-4 mt-4">
          <button className="bg-black hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition duration-300">
            Find Workers
          </button>
          <button className="bg-teal-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition duration-300">
            Find a Job
          </button>
        </div>
      </div>

      {/* Right section */}
      <div className="flex justify-center items-center md:pr-60">
        <div className="w-full h-64 md:h-80 lg:h-96">
          <img
            src="/worker.png"
            alt="Grizzly Force Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Modern;
