"use client";
import React from "react";
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import Link from "next/link";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
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

  return (
    <div className="w-ful h-[90px] ">
      {/* <nav className="flex justify-between p-10 items-center bg-[#111] "> */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between p-6 items-center bg-[#111]/90 backdrop-blur-md shadow-lg">


        <div className="nav-logo text-7xl text-white">
          <Link href='/'>
            <h1 className="logo">Maxnet</h1>
          </Link>
        </div>

        {/* pc view */}
        <div className="nav-components flex gap-10 text-white text-lg font-medium">
          <Link href='/'>Home</Link>
          <Link href='/#plan'>Plan</Link>
          <Link href='/#coverage'>Coverage</Link>
          <Link href='/#deals'>Deals</Link>
          {/* <Link href=''>Support<</Link> */}
          <Link href='/about'>About Us</Link>
        </div>


        <div className="flex gap-4 nav-btn">
          <a href="https://wa.me/923162674302?text=Hi%2C%20I%20saw%20your%20number%20on%20your%20website%20i%20have%20some%20queries"
            target="_blank" rel="noopener noreferrer">
            <button className=" bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:scale-105 hover:shadow-lg transition">
              <IoCallOutline /> Whatsapp
            </button>
          </a>
          <Link href="/getConnected">

            <button className=" bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:scale-105 hover:shadow-lg transition">
              <AiOutlineThunderbolt /> Get Connected
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
