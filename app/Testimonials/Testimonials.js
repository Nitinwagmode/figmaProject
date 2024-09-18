
import React from "react";
import Image from "next/image";



const Testimonial = () => {
  return (
    <div className=" text-black bg-gray-50 flex flex-col items-center justify-center w-[1440px] h-[913px] gap-0 opacity-100 relative pt-[80px]">
      {/* Heading */}
      <Image
        src="/Heart.png"
        alt="Heart Logo"
        width={80}
        height={80}
        className="object-contain"
      />

      <div className="text-center text-black mb-8">
        <h3 className="text-sm uppercase tracking-widest text-gray-500">
          Testimonials
        </h3>
        <h2 className="text-3xl font-bold">
          See What Our <span className="text-teal-500">Customers</span> Are
          Saying
        </h2>
      </div>

      {/* Card 1 */}
      <div className="relative bg-white shadow-lg rounded-lg w-[1140px] h-[212px] p-6 mb-[40px]">
        <p className="text-xl font-medium leading-relaxed">
          "Excellent App! Best in Langley for temp labour! They provide 24/7
          support, call them and get your labour right away. Also, they pay
          their labour same day! With Grizzly Force you will have efficient
          labour and better control!"
        </p>
        <div className="mt-4 flex items-center">
          <div className="font-bold text-lg">Tony Hartzenberg</div>
          <span className="ml-2 text-gray-500 text-sm">CEO, Sugarplum</span>
        </div>
        <img
          src="/sugerplum.png"
          alt="Sugarplum Logo"
          className="absolute bottom-1 right-4 w-32 h-32 object-contain"
        />
      </div>

      {/* Featured Customers */}
      <div className="flex justify-center items-center w-[1140px] mt-[20px]">
        <div className="flex flex-wrap justify-between">
          <img
            src="/lush.png"
            alt="LUSH"
            className="w-[100px] h-auto"
          />
          <img
            src="/dayross.png"
            alt="Day and Ross"
            className="w-[150px] h-auto space-x-11 space-y-10 "
          />
          <img
            src="/islandcity.png"
            alt="Island City"
            className="w-[150px] h-auto space-x-19 space-y-20"
          />
          <img
            src="/mega1.png"
            alt="Mega"
            className="w-[150px] h-auto"
          />
          <img
            src="/finechoice.png"
            alt="Fine Choice"
            className="w-[150px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

// const Testimonials = () => {
//   return (
//     <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-gray-100 py-20">
//       {/* Wrapper Container */}
//       <div
//         className="relative bg-white shadow-2xl rounded-lg p-10"
//         style={{
//           maxWidth: "800px", // Adjust width for responsiveness
//           margin: "0 auto", // Center the card horizontally
//           gap: "20px", // Space between elements
//           zIndex: 10, // Make sure the card stays on top
//           opacity: 1, // Visible by default
//         }}
//       >
//         {/* Section to wrap Heart Logo and Heading */}
//         <section className="relative flex flex-col items-center justify-center mb-8">
//           {/* Heart Logo */}
//           <Image
//             src="/Testimonials/Heart.png"
//             alt="Heart Logo"
//             width={80}
//             height={80}
//             className="object-contain"
//           />

//           {/* Title Section */}
//           <div className="text-center mb-8">
//             <h2 className="text-4xl font-bold text-gray-900">
//               See What Our <span className="text-green-500">Customers</span> Are
//               Saying
//             </h2>
//           </div>
//         </section>

//         {/* Testimonial Content Section */}
//         <div className="relative flex flex-col items-center p-10 space-y-6">
//           {/* Testimonial Content */}
//           <blockquote className="text-xl italic text-gray-700">
//             <p>
//               "Excellent App! Best in Langley for temp labour! They provide 24/7
//               support, call them and get your labour right away. Also, they pay
//               their labour the same day! With Grizzly Force, you will have
//               efficient labour and better control!"
//             </p>
//           </blockquote>

//           {/* Author Info */}
//           <div className="text-center">
//             <h4 className="font-semibold text-lg text-gray-800">
//               Tony Hartzenberg
//             </h4>
//             <p className="text-sm text-gray-500">CEO, Sugarplum</p>
//           </div>

//           {/* Company Logo */}
//           <div className="absolute right-10 top-10">
//             <Image
//               src="/path-to-logo/sugarplum-logo.png" // Replace with correct path
//               alt="Sugarplum Logo"
//               width={150}
//               height={50}
//               className="object-contain"
//             />
//           </div>

//           {/* Featured Customers Section */}
//           <div className="w-full border-t border-gray-200 pt-10 mt-auto">
//             <h4 className="text-center text-gray-600 text-lg font-semibold mb-5">
//               Featured Customers
//             </h4>
//             <div className="flex justify-center space-x-10">
//               <Image
//                 src="/path-to-logo/lush-logo.png" // Replace with correct path
//                 alt="Lush Logo"
//                 width={100}
//                 height={50}
//                 className="object-contain"
//               />
//               {/* Add more logos as needed */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
