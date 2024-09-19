import React from 'react';

const TestimonialCard = ({ logo, text, name, title }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg" style={{ width: '1006px', height: '305px' }}>
      <div className="flex flex-col h-full p-6">
        <p className="text-lg leading-relaxed mb-4 flex-grow">{text}</p>
        <div className="flex items-center">
          <div>
            <p
              className="text-left"
              style={{
                fontFamily: 'Neue Haas Unica, sans-serif', // Ensure to include a fallback font
                fontSize: '28px',
                fontWeight: 950,
                lineHeight: '40px',
                textAlign: 'left',
              }}
            >
              {name}
            </p>
            <p className="text-gray-500 text-sm">{title}</p>
          </div>
        </div>
        <img
          src={logo}
          alt={`${name} Logo`}
          className="absolute right-4 bottom-4 w-40 h-40 object-contain" // Increased width and height
        />
      </div>
    </div>
  );
};

export default TestimonialCard;