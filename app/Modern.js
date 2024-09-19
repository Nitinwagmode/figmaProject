// components/Modern.js
import React from 'react';
import Image from 'next/image';
// import workerImage from '../public/images/h1.png'; // Adjust the path if necessary

const Modern = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-12 bg-white">
      {/* Left section */}
      <div className="flex-1 flex flex-col items-start mb-8 md:mb-0 md:mr-12 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Modern <br /> Temp <span className="text-teal-500">Labour</span> <br /> <span className="text-teal-500">Solutions</span>
        </h1>
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <button className="bg-black hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition duration-300">
            Find Workers
          </button>
          <button className="bg-teal-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition duration-300">
            Find a Job
          </button>
        </div>
        {/*right section*/}

        {/* <div className="flex ">
        <img src="/worker.png"
        alt="Grizzly Force Logo"
        width={100}
        height={100}
        className="w-auto h-auto object-contain"
        />
        </div> */}

       <div className=" justify-normal items-center">
        <div className=" w-full h-64 md:h-80 lg:h-96">
          {/* <Image src="/worker.png" alt="Workers" layout="fill" objectFit="cover" className="rounded-md" /> */}
          <img src="/worker.png"
        alt="Grizzly Force Logo"
        width={100}
        height={100}
        className="w-auto h-auto object-contain"
        />
        </div>
      </div>


      </div>
    </section>
  );
};

export default Modern;
