"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


function BusinessPlan() {
const router = useRouter()
const handleChoosePlan = (planValue) =>{
  router.push(`/getConnected?plan=${planValue}`)
}


  return (
    <div id='plan'>
       <div className="businessPlans w-screen hover:bg-gray-50 duration-500 mb-10 ">
            <h1 className="text-5xl md:text-7xl font-bold text-black p-10 ">Business Plans</h1>
            {/* cards div */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 ">
              <div className="card1 bg-white flex flex-col w-[320px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300  overflow-hidden ">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-bold py-2 italic">
                  Extreme Pro
                </div>
                <div className="bg-gradient-to-r  from-cyan-400 to-fuchsia-700 text-white text-center mt-3 font-bold py-2 italic">
                            RECOMMENDED FOR SOFTWARE HOUSE
                        </div>
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold text-gray-800">GPON-Pure-52</h2>
                  <h5 className="text-2xl font-semibold text-gray-700 mt-2">
                    Rs4500
                    <sub className="text-sm text-gray-500">/month</sub>
                  </h5>
                </div>

                <ul className="space-y-1 text-gray-700 px-8 pb-6 text-left">
                  <li className="decoration-1">4K Streaming</li>
                  <li className="decoration-1">Great for Gaming</li>
                  <li className="decoration-1">Unlimited Data</li>
                  <li className="decoration-1">Supports 11–13 Devices</li>
                  <li className="decoration-1">Free Streaming Website</li>
                  
                </ul>

                <div className="flex justify-center pb-6">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg hover:scale-110 transition"
                  onClick={()=>handleChoosePlan("p2")}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
              <div className="card2 bg-white flex flex-col w-[320px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300  overflow-hidden">
                <div className="bg-gradient-to-r from-red-500 to-blue-600 text-white text-center font-bold py-2 italic">
                  Extreme Pro Plus
                </div>
                <div className="bg-gradient-to-r mt-3 from-cyan-400 to-fuchsia-700 text-white text-center font-bold py-2 italic">
                            RECOMMENDED FOR GAMING ZONES
                        </div>
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold text-gray-800">GPON-Pure-102</h2>
                  <h5 className="text-2xl font-semibold text-gray-700 mt-2">
                    Rs8000
                    <sub className="text-sm text-gray-500">/month</sub>
                  </h5>
                </div>

                <ul className="space-y-1 text-gray-700 px-8 pb-6 text-left">
                  <li className="decoration-1">4K Streaming</li>
                  <li className="decoration-1">Great for Gaming</li>
                  <li className="decoration-1">Unlimited Data</li>
                  <li className="decoration-1">Supports 12–15 Devices</li>
                  <li className="decoration-1">1 GB Download ≈ 1 Minute</li>
                  <li className="decoration-1">Free Streaming Website</li>
                  
                </ul>

                <div className="flex justify-center pb-6">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg hover:scale-110 transition"
                  onClick={()=>handleChoosePlan("p1")}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default BusinessPlan
