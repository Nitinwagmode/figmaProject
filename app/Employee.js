import React from 'react';

const Employee = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white py-12 px-6 md:px-20">
      {/* Left Side: Image Section */}
       <div className="relative w-1/2 mx-auto">
       <img src="/empwork.png" alt="Employee Workforce" className="w-full h-auto object-contain" />
       </div>

      {/* Right Side: Text Section */}
      <div className="mt-10 md:mt-0 md:ml-12">
        <h2 className="text-lg font-medium uppercase text-gray-600 tracking-widest">For Employers</h2>
        <h1 className="text-4xl font-semibold text-gray-800 my-4">
          Workforce <span className="text-teal-500">At Your Fingertips</span>
        </h1>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-center">
            <span className="inline-block w-4 h-4 mr-2 bg-teal-500 rounded-full"></span>
            Easy to use mobile & web platform
          </li>
          <li className="flex items-center">
            <span className="inline-block w-4 h-4 mr-2 bg-teal-500 rounded-full"></span>
            45,000+ workers
          </li>
          <li className="flex items-center">
            <span className="inline-block w-4 h-4 mr-2 bg-teal-500 rounded-full"></span>
            Realtime tracking
          </li>
          <li className="flex items-center">
            <span className="inline-block w-4 h-4 mr-2 bg-teal-500 rounded-full"></span>
            95% fulfillment rate
          </li>
          <li className="flex items-center">
            <span className="inline-block w-4 h-4 mr-2 bg-teal-500 rounded-full"></span>
            Preferred worker list
          </li>
        </ul>

        <a href="#" className="inline-block mt-8 text-teal-500 font-medium underline hover:text-teal-700">
          Learn More
          <span className="ml-2 inline-block w-5 h-5 bg-teal-500 text-white flex justify-center items-center rounded-full">
            &rarr;
          </span>
        </a>
      </div>
    </div>
  );
};

export default Employee;
