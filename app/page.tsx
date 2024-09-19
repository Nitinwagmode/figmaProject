"use client";
import Image from "next/image";
import { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import TestimonialSection from './Testimonials/Testimonials';
import Section from './Section/Section'
import JobSeekerComponent from "./JobSeekerComponent"
import DemandStep  from './DemandStep';
import Modern from './Modern';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
       <Header />
       <Modern/>
       <DemandStep />
       <TestimonialSection />
       <Section/>
       <JobSeekerComponent />
      <Footer />
       
    </div>
  );
}
