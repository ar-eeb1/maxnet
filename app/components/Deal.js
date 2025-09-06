"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function Deal() {
    const router = useRouter()
    const handleChooseDeal = (dealValue) => {
        router.push(`/getConnected?deal=${dealValue}`)
    }
    return (
        <div>
            <div id="deals" className="dealsContainer flex justify-center items-center flex-col gap-10 pb-40 bg-white">
                <h1 className="text-5xl font-bold mt-10 ">DEALS</h1>
                <div className="deals flex items-center justify-center  flex-wrap gap-10 ">
                    <div className="DealOne bg-white flex flex-col w-[320px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300  overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white text-center font-bold py-2 italic">
                            DEAL ONE
                        </div>
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-800">CABLE CONNECT DEAL</h2>
                            <h5 className="text-2xl font-semibold text-gray-700 mt-2">
                                Rs6500
                            </h5>
                        </div>

                        <ul className="space-y-1 text-gray-700 px-8 pb-6 text-left">
                            <li className="decoration-1">Dlink DIR-850L ~ 5Ghz (USED)</li>
                            <li className="decoration-1">CAT-6 Ethernet</li>
                            <li className="decoration-1">GPON-Pure-17Mb</li>
                            <li className="decoration-1">Connection Charges</li>
                        </ul>


                        <div className="flex justify-center pb-6">
                            <button 
                            onClick={()=>handleChooseDeal("d1")}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg hover:scale-110 transition">
                                Select
                            </button>
                        </div>
                    </div>

                    <div className="DealTwo bg-white flex flex-col w-[320px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300  overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white text-center font-bold py-2 italic">
                            DEAL TWO
                        </div>
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-800">Fiber OPTIC DEAL</h2>
                            <h5 className="text-2xl font-semibold text-gray-700 mt-2">
                                Rs8000
                            </h5>
                        </div>

                        <ul className="space-y-1 text-gray-700 px-8 pb-6 text-left">
                            <li className="decoration-1">Huawei HG145v5 ~ 5Dbi (USED)</li>
                            <li className="decoration-1">Fiber Optic</li>
                            <li className="decoration-1">GPON-Pure-17Mb</li>
                            <li className="decoration-1">Connection Charges</li>
                        </ul>


                        <div className="flex justify-center pb-6">
                            <button 
                            onClick={()=>handleChooseDeal("d2")}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg hover:scale-110 transition">
                                Select
                            </button>
                        </div>
                    </div>

                    <div className="DealThree bg-white flex flex-col w-[320px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300  overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white text-center font-bold py-2 italic">
                            DEAL THREE
                        </div>
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-800">Fiber OPTIC DEAL</h2>
                            <h5 className="text-2xl font-semibold text-gray-700 mt-2">
                                Rs9000
                            </h5>
                        </div>

                        <ul className="space-y-1 text-gray-700 px-8 pb-6 text-left">
                            <li className="decoration-1">Huawei HG8245Q2 ~ 5Ghz (USED)</li>
                            <li className="decoration-1">Fiber Optic</li>
                            <li className="decoration-1">GPON-Pure-17Mb</li>
                            <li className="decoration-1">Connection Charges</li>
                        </ul>


                        <div className="flex justify-center pb-6">
                            <button 
                            onClick={()=>handleChooseDeal("d3")}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg hover:scale-110 transition">
                                Select
                            </button>
                        </div>
                    </div>

                    <div className="DealFour bg-white flex flex-col w-[320px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300  overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white text-center font-bold py-2 italic">
                            DEAL FOUR
                        </div>
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-800">Fiber OPTIC DEAL</h2>
                            <h5 className="text-2xl font-semibold text-gray-700 mt-2">
                                Rs10500
                            </h5>
                        </div>

                        <ul className="space-y-1 text-gray-700 px-8 pb-6 text-left">
                            <li className="decoration-1">VSOL V2804 5Ghz ~ NEW</li>
                            <li className="decoration-1">Fiber Optic</li>
                            <li className="decoration-1">GPON-Pure-17Mb</li>
                            <li className="decoration-1">Connection Charges</li>
                        </ul>


                        <div className="flex justify-center pb-6">
                            <button 
                            onClick={()=>handleChooseDeal("d4")}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg hover:scale-110 transition">
                                Select
                            </button>
                        </div>
                    </div>

                    <div className="DealFive bg-white flex flex-col w-[320px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300  overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white text-center font-bold py-2 italic">
                            DEAL FIVE
                        </div>
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-800">Fiber OPTIC DEAL</h2>
                            <h5 className="text-2xl font-semibold text-gray-700 mt-2">
                                Rs8500
                            </h5>
                        </div>

                        <ul className="space-y-1 text-gray-700 px-8 pb-6 text-left">
                            <li className="decoration-1">VSOL V2802 2.4Ghz ~ NEW</li>
                            <li className="decoration-1">Fiber Optic</li>
                            <li className="decoration-1">GPON-Pure-17Mb</li>
                            <li className="decoration-1">Connection Charges</li>
                        </ul>


                        <div className="flex justify-center pb-6">
                            <button 
                            onClick={()=>handleChooseDeal("d5")}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg hover:scale-110 transition">
                                Select
                            </button>
                        </div>
                    </div>

                    <div className="DealSix bg-white flex flex-col w-[320px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300  overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white text-center font-bold py-2 italic">
                            DEAL SIX
                        </div>
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-800">Fiber OPTIC DEAL</h2>
                            <h5 className="text-2xl font-semibold text-gray-700 mt-2">
                                Rs7000
                            </h5>
                        </div>

                        <ul className="space-y-1 text-gray-700 px-8 pb-6 text-left">
                            <li className="decoration-1">Huawei C5 ~ 2.4Ghz (USED)</li>
                            <li className="decoration-1">Fiber Optic</li>
                            <li className="decoration-1">GPON-Pure-17Mb</li>
                            <li className="decoration-1">Connection Charges</li>
                        </ul>


                        <div className="flex justify-center pb-6">
                            <button 
                            onClick={()=>handleChooseDeal("d6")}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg hover:scale-110 transition">
                                Select
                            </button>
                        </div>
                    </div>

                    <div className="DealSeven bg-white flex flex-col w-[320px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300  overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white text-center font-bold py-2 italic">
                            DEAL SEVEN
                        </div>
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-800">CABLE CONNECT DEAL</h2>
                            <h5 className="text-2xl font-semibold text-gray-700 mt-2">
                                Rs7000
                            </h5>
                        </div>

                        <ul className="space-y-1 text-gray-700 px-8 pb-6 text-left">
                            <li className="decoration-1">TP-Link 841n ~ 2.4Ghz (NEW)</li>
                            <li className="decoration-1">CAT-6 Ethernet</li>
                            <li className="decoration-1">GPON-Pure-17Mb</li>
                            <li className="decoration-1">Connection Charges</li>
                        </ul>


                        <div className="flex justify-center pb-6">
                            <button 
                            onClick={()=>handleChooseDeal("d7")}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg hover:scale-110 transition">
                                Select
                            </button>
                        </div>
                    </div>

                </div>
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Maxnet. All rights reserved. Rates and offers are subject to change without notice.
                </p>
            </div>
        </div>
    )
}

export default Deal
