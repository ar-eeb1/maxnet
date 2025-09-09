"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function ConsumerPlan() {
    const router = useRouter()
    const handleChoosePlan = (planValue)=>{
        router.push(`/getConnected?plan=${planValue}`)
    }
    return (
        <div>
            <div className="consumerPlans w-screen hover:bg-gray-50 duration-500 mb-10 bg-gray-100">
                <h1 className="text-5xl md:text-7xl font-bold text-black p-10 ">Consumer Plans</h1>
                {/* cards div */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-5 ">
                    <div className="card3 bg-white flex flex-col w-[320px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300  overflow-hidden ">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white text-center font-bold py-2 italic">
                            Turbo Max
                        </div>
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-800">GPON-Pure-32</h2>
                            <h5 className="text-2xl font-semibold text-gray-700 mt-2">
                                Rs3200
                                <sub className="text-sm text-gray-500">/month</sub>
                            </h5>
                        </div>

                        <ul className="space-y-1 text-gray-700 px-8 pb-6 text-left">
                            <li className="decoration-1">Full HD streaming 1080p 1440p</li>
                            <li className="decoration-1">Good for Class + Meets + Calls </li>
                            <li className="decoration-1">Great for Gaming</li>
                            <li className="decoration-1">Unlimited Data</li>
                            <li className="decoration-1">Supports 10–12 Devices</li>
                            <li className="decoration-1">Free Streaming Website</li>
                        </ul>

                        <div className="flex justify-center pb-6">
                            <button
                            onClick={()=>handleChoosePlan("p3")}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg hover:scale-110 transition">
                                Choose Plan
                            </button>
                        </div>
                    </div>

                    <div className="card5 bg-white flex flex-col w-[320px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300  overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white text-center font-bold py-2 italic">
                            Power Connect
                        </div>
                        <div className="bg-gradient-to-r mt-3 from-cyan-400 to-fuchsia-700 text-white text-center font-bold py-2 italic">
                            MOST POPULAR
                        </div>
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-800">GPON-Pure-22</h2>
                            <h5 className="text-2xl font-semibold text-gray-700 mt-2">
                                Rs2200
                                <sub className="text-sm text-gray-500">/month</sub>
                            </h5>
                        </div>

                        <ul className="space-y-1 text-gray-700 px-8 pb-6 text-left">
                            <li className="decoration-1">HD streaming 720p–1080p</li>
                            <li className="decoration-1">Stable for work-from-home & online study</li>
                            <li className="decoration-1">Good for Gaming</li>
                            <li className="decoration-1">Unlimited Data</li>
                            <li className="decoration-1">Supports 7–9 Devices</li>
                            <li className="decoration-1">1 GB Download &gt; 8 Minute</li>
                            <li className="decoration-1">Free Streaming Website</li>
                        </ul>


                        <div className="flex justify-center pb-6">
                            <button 
                            onClick={()=>handleChoosePlan("p5")}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg hover:scale-110 transition">
                                Choose Plan
                            </button>
                        </div>
                    </div>

                    <div className="card4 bg-white flex flex-col w-[320px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300  overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white text-center font-bold py-2 italic">
                            Ultra Boost
                        </div>
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-800">GPON-Pure-27</h2>
                            <h5 className="text-2xl font-semibold text-gray-700 mt-2">
                                Rs2700
                                <sub className="text-sm text-gray-500">/month</sub>
                            </h5>
                        </div>

                        <ul className="space-y-1 text-gray-700 px-8 pb-6 text-left">
                            <li className="decoration-1">Full HD Streaming 1080p</li>
                            <li className="decoration-1">Smooth browsing & video calls</li>
                            <li className="decoration-1">Good For Gaming</li>
                            <li className="decoration-1">Unlimited Data</li>
                            <li className="decoration-1">Supports 8–11 Devices</li>
                            <li className="decoration-1">1 GB Download &gt; 5 Minute</li>
                            <li className="decoration-1">Free Streaming Website</li>
                        </ul>


                        <div className="flex justify-center pb-6">
                            <button 
                            onClick={()=>handleChoosePlan("p4")}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg hover:scale-110 transition">
                                Choose Plan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsumerPlan
