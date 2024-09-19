import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import Image from 'next/image';

const testimonials = [
  {
    logo: '/sugerplum.png',
    text: "Excellent App! Best in Langley for temp labour! They provide 24/7 support, call them and get your labour right away. Also, they pay their labour same day! With Grizzly Force you will have efficient labour and better control!",
    name: 'Tony Hartzenberg',
    title: 'CEO, Sugarplum',
  },
  {
    logo: '/sugerplum.png',
    text: "Excellent App! Best in Langley for temp labour! They provide 24/7 support, call them and get your labour right away. Also, they pay their labour same day! With Grizzly Force you will have efficient labour and better control!",
    name: 'Tony Hartzenberg',
    title: 'CEO, Sugarplum',
  },
  {
    logo: '/sugerplum.png',
    text: "Excellent App! Best in Langley for temp labour! They provide 24/7 support, call them and get your labour right away. Also, they pay their labour same day! With Grizzly Force you will have efficient labour and better control!",
    name: 'Tony Hartzenberg',
    title: 'CEO, Sugarplum',
  },
];

const featuredCustomers = [
  { src: '/lush.png', alt: 'LUSH', width: 120, height: 40 },
  { src: '/dayross.png', alt: 'Day and Ross', width: 140, height: 40 },
  { src: '/islandcity.png', alt: 'Island City', width: 140, height: 40 },
  { src: '/mega1.png', alt: 'Mega', width: 160, height: 40 },
  { src: '/finechoice.png', alt: 'Fine Choice', width: 120, height: 40 },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <section className="text-black bg-gray-50 py-20 px-4 md:px-0">
      <div className="text-center mb-12">
        <img
          src="/Heart.png"
          alt="Heart Logo"
          className="mx-auto mb-4 w-12 h-12"
        />
        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
          Testimonials
        </h3>
        <h2 className="text-4xl font-bold">
          See What Our <span className="text-teal-500">Customers</span> Are Saying
        </h2>
      </div>

      {/* Testimonial Cards */}
      <div className="relative w-full max-w-[1134px] h-[321px] mx-auto overflow-hidden">
        <div className="relative w-full h-full flex items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute top-0 w-[calc(100%-60px)] h-[calc(100%-40px)] flex items-center justify-center transition-transform duration-700 ease-in-out ${
                index === currentSlide ? 'z-10 opacity-100' : 'z-0 opacity-60'
              }`}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }}
            >
              <TestimonialCard
                logo={testimonial.logo}
                text={testimonial.text}
                name={testimonial.name}
                title={testimonial.title}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Featured Customers */}
      <div className="text-center mt-12">
        <h3 className="text-gray-600 text-lg font-semibold mb-6">Featured Customers</h3>
        <div className="flex justify-center flex-wrap gap-10">
          {featuredCustomers.map((customer, index) => (
            <Image
              key={index}
              src={customer.src}
              alt={customer.alt}
              width={customer.width}
              height={customer.height}
              className="w-auto h-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
