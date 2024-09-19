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
import Employee from './Employee';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
       <Header />
       <Modern/>
       <DemandStep />
       <Section/>
       <Employee/>
       <TestimonialSection />
       <Footer />
       
    </div>
  );
}
