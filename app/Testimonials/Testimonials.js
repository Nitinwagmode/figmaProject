import React from 'react';
import TestimonialCard from './TestimonialCard';
import Image from 'next/image';

const testimonials = [
  {
    logo: '/sugarplum.png',
    text: "Excellent App! Best in Langley for temp labour! They provide 24/7 support, call them and get your labour right away. Also, they pay their labour same day! With Grizzly Force you will have efficient labour and better control!",
    name: 'Tony Hartzenberg',
    title: 'CEO, Sugarplum'
  },
  {
    logo: '/sugarplum.png',
    text: "Excellent App! Best in Langley for temp labour! They provide 24/7 support, call them and get your labour right away. Also, they pay their labour same day! With Grizzly Force you will have efficient labour and better control!",
    name: 'Tony Hartzenberg',
    title: 'CEO, Sugarplum'
  },
  {
    logo: '/sugarplum.png',
    text: "Excellent App! Best in Langley for temp labour! They provide 24/7 support, call them and get your labour right away. Also, they pay their labour same day! With Grizzly Force you will have efficient labour and better control!",
    name: 'Tony Hartzenberg',
    title: 'CEO, Sugarplum'
  },
  // Add more testimonials here
];

const featuredCustomers = [
  { src: '/lush.png', alt: 'LUSH' },
  { src: '/dayross.png', alt: 'Day and Ross' },
  { src: '/islandcity.png', alt: 'Island City' },
  { src: '/mega1.png', alt: 'Mega' },
  { src: '/finechoice.png', alt: 'Fine Choice' },
];

const TestimonialSection = () => {

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-0">
      <div className="text-center mb-12">
        <img
          src="/Heart.png"
          alt="Heart Logo"
          className="mx-auto mb-4 w-12 h-12"
        />
        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Testimonials</h3>
        <h2 className="text-4xl font-bold">
          See What Our <span className="text-teal-500">Customers</span> Are Saying
        </h2>
      </div>

      {/* Testimonial Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 mb-16">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            logo={testimonial.logo}
            text={testimonial.text}
            name={testimonial.name}
            title={testimonial.title}
          />
        ))}
      </div>

      {/* Featured Customers */}
      <div className="text-center">
        <h3 className="text-gray-600 text-lg font-semibold mb-6">Featured Customers</h3>
        <div className="flex justify-center flex-wrap gap-10">
          {featuredCustomers.map((customer, index) => (
            <Image
              key={index}
              src={customer.src}
              alt={customer.alt}
              width={200}
              height={30}
              className="w-24 h-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
