"use client"
import React, { useState , useEffect } from 'react'
import Link from 'next/link';
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp,FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    useGSAP(() => {
    gsap.from(".logo", {
      y: -100,
      opacity: 0,
      duration: 2,
      delay: 1,
      color: "#25cef4",
    });

    gsap.from(".nav-components a", {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.3,
    });

    gsap.from(".nav-btn", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.3,
    });
    
  });
  useEffect(() => {
    if (isOpen) {
      gsap.from(".mob-nav a", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
      });
    }
  }, [isOpen]);

  return (
    <div className='w-full h-[90px]'>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#111]/70 backdrop-blur-md shadow-md ">
        {/* Mobile Menu Button */}
        <div
          className="flex md:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        {/* LOGO */}
        <div className="logo text-white pt-2 text-5xl md:text-7xl font-bold ">
          <Link href="/">Maxnet</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-white text-lg font-medium nav-components">
          <Link href='/'>Home</Link>
          <Link href='/#plan'>Plan</Link>
          <Link href='/#coverage'>Coverage</Link>
          <Link href='/#deals'>Deals</Link>
          <Link href='/about'>About Us</Link>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 nav-btn">
          <a
            title="contact"
            href="https://wa.me/923162674302?text=Hi%2C%20I%20saw%20your%20number%20on%20your%20website%20i%20have%20some%20queries"
            target="_blank"
            rel="noopener noreferrer">
            <button className=" bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:scale-105 hover:shadow-lg transition cursor-pointer">
              <FaWhatsapp />
            </button>
          </a>
          <Link href="/getConnected">
            <button title="get connected" className=" bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:scale-105 hover:shadow-lg transition cursor-pointer">
              <AiOutlineThunderbolt />
            </button>
          </Link>
        </div>

      </nav>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="top-[90px] left-0 w-full bg-[#111]/70 backdrop-blur-md flex flex-col items-center gap-6 py-6 md:hidden text-white z-40 nav-components mob-nav fixed transition-all">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/#plan" onClick={() => setIsOpen(false)}>Plan</Link>
          <Link href="/#coverage" onClick={() => setIsOpen(false)}>Coverage</Link>
          <Link href="/#deals" onClick={() => setIsOpen(false)}>Deals</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
