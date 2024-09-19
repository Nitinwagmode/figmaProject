import React from "react";

const Modern = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:px-12 bg-white">
      {/* Left section */}
      <div className="flex-1 flex flex-col items-start mb-8 lg:mb-0 lg:mr-12 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
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
      <div className="flex-1 flex justify-center lg:justify-end">
        {/* <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6"> */}
        {/* Use Image component for each image */}
        {/* <div className=" w-full h-64 md:h-80 lg:h-96"> */}
        {/* <Image src="/worker.png" alt="Workers" layout="fill" objectFit="cover" className="rounded-md" /> */}
        <img
          src="/worker.png"
          alt="Grizzly Force Logo"
          // width={100}
          // height={100}
          className="w-auto h-auto object-contain"
        />
      </div>

      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default Modern;
