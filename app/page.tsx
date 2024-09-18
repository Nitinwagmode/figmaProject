"use client";
import Image from "next/image";
import { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Testimonials from './Testimonials/Testimonials';
import Section from './Section/Section'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
       <Header />;
       <Testimonials />
       <Section/>
      <Footer />; 
       
    </div>
  );
}
