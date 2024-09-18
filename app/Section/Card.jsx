import React from 'react';

const Card = ({ src, alt, title, large }) => (
  <div
    className={`card relative flex-shrink-0 ${
      large
        ? 'w-[220px] h-[240px] sm:w-[350px] sm:h-[230px] lg:w-[220px] lg:h-[240px]'
        : 'w-[220px] h-[160px]'
    }`}
  >
    <img
      src={src}
      alt={alt}
      className=" w-full h-full object-cover rounded-xl"
    />
    <h2
      className={`absolute text-center font-bold text-white ${
        large ? 'text-2xl' : 'text-xl'
      } bottom-4 left-10`}
    >
      {title}
    </h2>
  </div>
);

export default Card;