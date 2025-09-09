"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function BasicPlan() {
  const router = useRouter()
  const handleChoosePlan = (planValue) => {
    router.push(`/getConnected?plan=${planValue}`)
  }
  return (
    <div>
      {/* BASIC PLANS */}
          <div className="basicPlans w-screen hover:bg-gray-50 duration-500 mb-10 ">
            <h1 className="text-5xl md:text-7xl font-bold text-black p-10 ">Basic Plans</h1>
            {/* cards div */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 ">
              <div className="card6 bg-white flex flex-col w-[320px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300  overflow-hidden">
                <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white text-center font-bold py-2 italic">
                  Fast Stream
                </div>
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold text-gray-800">GPON-Pure-17</h2>
                  <h5 className="text-2xl font-semibold text-gray-700 mt-2">
                    Rs1700
                    <sub className="text-sm text-gray-500">/month</sub>
                  </h5>
                </div>

                <ul className="space-y-1 text-gray-700 px-8 pb-6 text-left">
                  <li className="decoration-1">HD streaming 720p</li>
                  <li className="decoration-1">Good for social media & online classes</li>
                  <li className="decoration-1">Unlimited Data</li>
                  <li className="decoration-1">Supports 4–7 Devices</li>
                  <li className="decoration-1">1 GB Download &gt; 10 Minute</li>
                  
                  <li className="decoration-1">Free Streaming Website</li>
                </ul>

                <div className="flex justify-center pb-6">
                  <button 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg hover:scale-110 transition"
                  onClick={()=>handleChoosePlan("p6")}
                  >

                    Choose Plan
                  </button>
                </div>
              </div>
              <div className="card7 bg-white flex flex-col w-[320px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300  overflow-hidden">
                <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white text-center font-bold py-2 italic">
                  Basic Surf
                </div>
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold text-gray-800">GPON-Pure-10</h2>
                  <h5 className="text-2xl font-semibold text-gray-700 mt-2">
                    Rs1200
                    <sub className="text-sm text-gray-500">/month</sub>
                  </h5>
                </div>

                <ul className="space-y-1 text-gray-700 px-8 pb-6 text-left">
                  <li className="decoration-1">SD-HD Streaming 720p</li>
                  <li className="decoration-1">Best for light browsing, WhatsApp, YouTube</li>
                  <li className="decoration-1">Unlimited Data</li>
                  <li className="decoration-1">Supports 2–3 Devices</li>
                  <li className="decoration-1">1 GB Download &gt; 30 Minute</li>
                   
                  <li className="decoration-1">Free Streaming Website</li>

                </ul>

                <div className="flex justify-center pb-6"
                onClick={()=>handleChoosePlan("p7")}>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg hover:scale-110 transition">
                    Choose Plan
                  </button>
                </div>
              </div>

            </div>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            © {new Date().getFullYear()} Maxnet. All rights reserved. Rates and offers are subject to change without notice.
          </p>
    </div>
  )
}

export default BasicPlan
