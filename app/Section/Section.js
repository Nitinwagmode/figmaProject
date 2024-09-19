import React from "react";
import Card from "./Card";
import Image from "next/image";
// import imageOne from "../../public/Event_Services.png";
// import imageTwo from "../../public/Manufacturing.png";
// import imageThree from "../../public/Food_and_beverages.png";
// import imageFour from "../../public/Hospitality.png";
// import imageFive from "../../public/Restaurants.png";
// import imageSix from "../../public/Warehouse.png";

const data = [
  { src: "Event_Services.png", alt: "Hospitality", title: "Hospitality" },
  { src: "Manufacturing.png", alt: "Manufacturing", title: "Manufacturing" },
  { src: "Food_and_beverages.png", alt: "Food & Beverage", title: "Food & Beverage" },
  { src: "Hospitality.png", alt: "Restaurants", title: "Restaurants" },
  { src: "Restaurants.png", alt: "Event Services", title: "Event Services" },
  { src: "Warehouse.png", alt: "Warehouse", title: "Warehouse" },
];

function Section() {
  return (
    <div className="container w-full justify-center flex flex-col items-center">
      <div className="title lg:text-center">
        <p className="text-sm font-medium tracking-wider leading-none mt-10 mb-4">
          WE ARE SERVING IN
        </p>
        <h1 className="heading text-3xl md:text-4xl lg:text-5xl font-bold mb-20 tracking-tight leading-none">
          <span className="text-[#11b2a8]">Industries</span> We Are Working With
        </h1>
      </div>
      <div className="image-section flex flex-wrap justify-center items-center gap-2">
        {data.map((item, index) => (
          <Card
            key={index}
            src={item.src}
            alt={item.alt}
            title={item.title}
            large={index === 2}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
