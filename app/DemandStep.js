import React from 'react';

const steps = [
  {
    stepNumber: 'Step 1',
    title: 'Quick Signup',
    description: 'Our Grizzly Force technology makes it easy to sign up in minutes',
    icon: '/IconDual.png',
  },
  {
    stepNumber: 'Step 2',
    title: 'Post Jobs 24/7',
    description: 'Use our mobile app or web platform from the office or on the go, any time of day',
    icon: '/IconDual.png',
  },
  {
    stepNumber: 'Step 3',
    title: 'View Matches',
    description: 'With thousands of ready-to-go workers you can watch your jobs being filled in real time',
    icon: '/IconDual.png',
  },
  {
    stepNumber: 'Step 4',
    title: 'We Do The Rest!',
    description: 'We take care of payroll, deductions and insurance',
    icon: '/IconDual.png',
  },
];

const DemandStep = () => {
  return (
    <section className="bg-[#008000] py-8 px-4 sm:px-8 lg:px-24">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold text-center text-teal-700 mb-4">
          How On-Demand Staffing Works
        </h2>
        <section className=" grid grid-cols-2 sm:grid-cols-2 gap-6 ">
          {steps.map((step, index) => (
            <div
              key={index}
              className=" flex flex-col items-center p-6 shadow-md rounded-lg">
              <div className="mb-4 w-16 h-16">
                <img src={process.env.PUBLIC_URL + step.icon} alt={step.title} />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.stepNumber}
              </h3>
              <p className="text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default DemandStep;