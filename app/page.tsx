"use client";
import Image from "next/image";
import { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Testimonials from './Testimonials/Testimonials';
import Section from './Section/Section'
import JobSeekerComponent from "./JobSeekerComponent"
import DemandStep  from './DemandStep'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
       <Header />
       <DemandStep />
       <Testimonials />
       <Section/>
       <JobSeekerComponent />
      <Footer />
       
    </div>
  );
}
