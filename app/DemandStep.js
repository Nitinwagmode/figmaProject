import React from 'react';

const steps = [
  {
    stepNumber: 'Step 1',
    title: 'Quick Signup',
    description: 'Our Grizzly Force technology makes it easy to sign up in minutes',
    icon: '/step1.png',  // Use distinct icons if available
  },
  {
    stepNumber: 'Step 2',
    title: 'Post Jobs 24/7',
    description: 'Use our mobile app or web platform from the office or on the go, any time of day',
    icon: '/step2.png',
  },
  {
    stepNumber: 'Step 3',
    title: 'View Matches',
    description: 'Watch your jobs being filled in real time',
    icon: '/step3.png',
  },
  {
    stepNumber: 'Step 4',
    title: 'We Do The Rest!',
    description: 'We take care of payroll, deductions, and insurance',
    icon: '/step4.png',
  },
];

const DemandStep = () => {
  return (
    <section className="bg-[#ECF8F8] py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          How On-Demand Staffing Works
        </h2>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg">
              {/* Icon */}
              <img
                src={step.icon}
                alt={step.title}
                className="mb-6 w-16 h-16"
              />

              {/* Step Number and Title */}
              <div className="mb-2">
                <h3 className="text-sm font-semibold text-gray-700">
                  {step.stepNumber} {step.title}
                </h3>
              </div>

            
              <p className="text-sm text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemandStep;