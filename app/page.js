"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import BusinessPlan from "./components/BusinessPlan";
import ConsumerPlan from "./components/ConsumerPlan";
import BasicPlan from "./components/BasicPlan";
import Deal from "./components/Deal";
import Link from "next/link";
import ContactPopup from "./components/ContactPopup";
import { AiOutlineThunderbolt } from "react-icons/ai";


export default function Home() {

  const countRef = useRef();
  useGSAP(() => {
    gsap.from(".hero", {
      opacity: 0,
      y: -100,
      delay: 1.5
    })
  })
  useEffect(() => {
    let counterObj = { val: 0 }

    gsap.to(counterObj, {

      val: 1400,
      duration: 8,
      delay: 2,
      ease: "expoScale(0.5,7,none)",
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.innerText = Math.floor(counterObj.val);
        }
      }
    })
  }, [])


  return (
    <div>
      <div className="hero flex items-center justify-center h-[650px] md:h-[800px] flex-col md:p-[430px] mt-3  ">
        <h1 className=" font-bold text-white  flex flex-col text-center text-5xl md:text-8xl md:font-extrabold ">Maxnet <span className="custom-blue">Internet Service Provider</span></h1>
        <div className="flex flex-col items-center text-center text-white w-[400px] md:w-[800px] text-xl md:text-2xl pt-10">Powering connections for 17 years. Delivering reliable, high-speed internet solutions that keep you connected to what matters most — trusted by More than
          <p className="pt-5 pb-1"><span className="text-blue-600 font-bold text-7xl" ref={countRef}>0</span>+</p>customers.</div>

        <div className="flex gap-4 nav-btn mt-5">
          <Link href="/getConnected">
            <button title="get connected" className=" bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:scale-105 hover:shadow-lg transition">
              <AiOutlineThunderbolt /> GET CONNECTED
            </button>
          </Link>
          <ContactPopup />
        </div>

      </div>
      <div className="plans flex flex-col bg-white">

        <div className="plan-head flex text-center w-full justify-center items-center flex-col">
          <h1 className="text-5xl font-bold mt-10">Choose Your Perfect Plan</h1>
          <h6 className="text-gray-500 font-medium text-xl md:text-2xl pt-5">Fast, reliable internet plans designed for every need. From home users to enterprises, we&apos;ve got you covered.</h6>

          <BusinessPlan />
          <ConsumerPlan />
          <BasicPlan />


        </div>
      </div>
      <div id="coverage" className="bg-black flex flex-col items-center p-10">
        <h1 className="text-3xl md:text-5xl font-bold  text-white ">COVERAGE</h1>
        <h2 className="text-gray-500 font-medium text-2xl p-4">Federal B Area</h2>
        <h1 className="text-3xl md:text-5xl font-bold mt-1 text-white">BLOCKS</h1>
        <div className="blocks flex justify-around w-screen mt-5">
          {["09", "14", "15"].map((block) => (
            <p
              key={block}
              className="text-4xl md:text-5xl bg-gradient-to-b from-cyan-400 to-fuchsia-500 text-white font-bold p-4 md:p-8 rounded-full animate-pulse"
            >
              {block}
            </p>
          ))}
        </div>

      </div>

      <Deal />


    </div>
  );
}
