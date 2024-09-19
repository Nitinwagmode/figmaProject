import React from 'react';

const TestimonialCard = ({ logo, text, name, title }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg w-full max-w-lg p-6 mb-8 md:mb-0 md:mr-4">
      <p className="text-lg leading-relaxed mb-4">{text}</p>
      <div className="flex items-center">
        <div>
          <p className="font-bold text-xl">{name}</p>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
      </div>
      <img
        src={logo}
        alt={`${name} Logo`}
        className="absolute right-0 bottom-0 w-24 h-24 object-contain"
      />
    </div>
  );
};

export default TestimonialCard;
