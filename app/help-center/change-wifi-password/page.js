import React from 'react'
import { WifiIcon, Globe, Contact, Dot, Router, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import ContactPopup from '@/app/components/ContactPopup';

function Password() {
    return (
        <div className='w-full min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900'>
            {/* Header */}
            <div className='pt-12 pb-8 px-4'>
                <div className='max-w-4xl mx-auto text-center'>
                    <div className='inline-flex items-center justify-center p-3 bg-blue-500/20 rounded-full mb-6'>
                        <WifiIcon className='w-12 h-12 text-blue-400' />
                    </div>
                    <h1 className='text-5xl font-bold text-white mb-4'>Change Your Wi-Fi Password</h1>
                    <p className='text-xl text-gray-300 max-w-2xl mx-auto'>Follow these steps to change your wireless Password </p>
                </div>
            </div>

            <div className='max-w-5xl mx-auto px-4 pb-12'>
                <div className='space-y-8'>

                    {/* Step 1 */}
                    <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300'>
                        <div className='flex items-start gap-6'>
                            <div className='flex-shrink-0'>
                                <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg'>
                                    01
                                </div>
                            </div>
                            <div className='flex-1'>
                                <h2 className='text-3xl font-bold text-white mb-4'>Connect your Wi-Fi</h2>
                                <p className='text-gray-300 text-lg mb-4'>From Settings -&gt; Wireless Settings -&gt; Go to connected Wi-Fi Details and note down IPv4 Gateway/Address </p>
                                <p className='text-gray-300 text-lg mb-4'>Or Convert the last octet of the IPv4 address E.g: 192.168.1.<span className='text-red-500'>***</span> cluster to 192.168.100<span className='text-red-500'>.1</span></p>
                                <div className='bg-white/5 rounded-xl p-4 border border-cyan-400/30'>
                                    <img
                                        className='w-full max-w-md mx-auto rounded-lg shadow-lg'
                                        src="/ipv4.webp"
                                        alt="wifi example"
                                    />
                                    <p className='text-center text-sm text-gray-400 mt-2'>Example of WiFi IPv4 address</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300'>
                        <div className='flex items-start gap-6'>
                            <div className='flex-shrink-0'>
                                <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg'>
                                    02
                                </div>
                            </div>
                            <div className='flex-1'>
                                <h2 className='text-3xl font-bold text-white mb-4'>Use Browser</h2>
                                <p className='text-gray-300 text-lg mb-6'> Paste the address to search bar and press Enter </p>
                                <p className='text-gray-300 text-lg mb-6'> TP-Link default Username <span className='text-green-400'>&quot;admin&quot;</span> and Password <span className='text-green-400'>&quot;admin&quot;</span></p>
                                <p className='text-gray-300 text-lg mb-6'> Tenda default Username <span className='text-green-400'>&quot;admin&quot;</span> and Password <span className='text-green-400'>&quot;admin&quot;</span></p>
                                <p className='text-gray-300 text-lg mb-6'> D-Link Username & Password is printed on Bottom of Routers</p>
                                <p className='text-gray-300 text-lg mb-6'> Huawei default Username <span className='text-green-400'>&quot;telecomadmin&quot;</span> and Password <span className='text-green-400'>&quot;admintelecom&quot;</span></p>

                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300'>
                        <div className='flex items-start gap-6'>
                            <div className='flex-shrink-0'>
                                <div className='w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg'>
                                    03
                                </div>
                            </div>
                            <div className='flex-1'>
                                <h2 className='text-3xl font-bold text-white mb-6'>Router-Specific Instructions</h2>

                                <div className='grid md:grid-cols-2 gap-8'>

                                    {/* TP-Link*/}
                                    <div className='bg-white/5 rounded-xl p-6 border border-white/10'>
                                        <div className='flex items-center gap-3 mb-4'>
                                            <Router className='w-6 h-6 text-blue-400' />
                                            <h3 className='text-2xl font-bold text-white'>TP-Link </h3>
                                        </div>
                                        <div className='space-y-3'>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-red-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-gray-300'>From left Bar go to <span className='text-red-400 font-semibold'>Wireless</span>.</p>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-gray-300'>Navigate to <span className='text-orange-400 font-semibold'>Wireless Security</span>.</p>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-gray-300'>Under the Wireless Security navigate to <span className='text-yellow-400 font-semibold'>WPA/WPA2 - Personal(Recommended)</span></p>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-gray-300'>Change your Password and save</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tenda */}
                                    <div className='bg-white/5 rounded-xl p-6 border border-white/10'>
                                        <div className='flex items-center gap-3 mb-4'>
                                            <Router className='w-6 h-6 text-blue-400' />
                                            <h3 className='text-2xl font-bold text-white'>Tenda</h3>
                                        </div>
                                        <div className='space-y-3'>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-red-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-gray-300'>From left Bar go to <span className='text-red-400 font-semibold'>Wireless Settings</span>.</p>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-gray-300'>Navigate to <span className='text-orange-400 font-semibold'>WiFi Name and Password</span>.</p>
                                            </div>

                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-gray-300'>Change your Password and save</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* D-Link */}
                                    <div className='bg-white/5 rounded-xl p-6 border border-white/10'>
                                        <div className='flex items-center gap-3 mb-4'>
                                            <Router className='w-6 h-6 text-blue-400' />
                                            <h3 className='text-2xl font-bold text-white'>D-Link | Etisalat</h3>
                                        </div>
                                        <div className='space-y-3'>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-red-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-gray-300'>From left Bar go to <span className='text-red-400 font-semibold'>Wireless Settings</span>.</p>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-gray-300'>Navigate to <span className='text-orange-400 font-semibold'>Wireless Security</span>.</p>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-gray-300'>Select 5Ghz or 2.4Ghz <span className='text-blue-400 font-semibold'>Security Settings</span>.</p>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-gray-300'>Under the Wireless Security navigate to <span className='text-yellow-400 font-semibold'>WPA/WPA2 - Personal(Recommended)</span></p>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-red-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-red-300'>Make sure your wireless network names (SSIDs) for 2.4 GHz and 5 GHz are different.
                                                    If both bands use the same name, your devices may fail to connect properly.</p>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-red-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-red-300'>Write Passwords on search bar then copy , there is no option for making Password Visible</p>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-gray-300'>Change your Password and save</p>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Huawei */}
                                    <div className='bg-white/5 rounded-xl p-6 border border-white/10'>
                                        <div className='flex items-center gap-3 mb-4'>
                                            <Router className='w-6 h-6 text-blue-400' />
                                            <h3 className='text-2xl font-bold text-white'>Huawei</h3>
                                        </div>
                                        <div className='space-y-3'>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-red-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-gray-300'>From <span className='text-red-400 font-semibold'>WLAN</span> in some cases <span className='text-red-400 font-semibold'>Advanced/Wireless</span> .</p>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-gray-300'>Navigate to <span className='text-orange-400 font-semibold'>WLAN Basic configurations</span>.</p>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-gray-300'>Select 5Ghz or 2.4Ghz <span className='text-blue-400 font-semibold'>Select your SSID</span>.</p>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-gray-300'>Under the SSID <span className='text-yellow-400 font-semibold'>WPA PreShared key</span></p>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-red-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-red-300'>Make sure your wireless network names (SSIDs) for 2.4 GHz and 5 GHz are different.
                                                    If both bands use the same name, your devices may fail to connect properly.</p>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-red-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-red-300'>Write Passwords on search bar then copy , there is no option for making Password Visible</p>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <Dot className='w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5' />
                                                <p className='text-gray-300'>Change your Password and save</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300'>
                        <div className='flex items-start gap-6'>
                            <div className='flex-shrink-0'>
                                <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg'>
                                    04
                                </div>
                            </div>
                            <div className='flex-1'>
                                <h2 className='text-3xl font-bold text-white mb-4'>Connect</h2>
                                <div className='flex items-center gap-3 text-gray-300 text-lg flex-col'>
                                    <p>Go to Settings -&gt; Wireless Settings -&gt; Long Pres your old Connection -&gt; Click Forget -&gt; Connect with your new Password </p>
                                    <p className='text-red-400 text-center text-sm'>Change your Password following these steps, On failure please contact your ISP and do not make any other changes</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 text-center'>
                        <Contact className='w-12 h-12 text-cyan-400 mx-auto mb-4' />
                        <h3 className='text-2xl font-bold text-white mb-2'>Still Need Help?</h3>
                        <p className='text-gray-300 mb-4'>If these steps didn't resolve your issue, our technical support team is here to help.</p>
                        <button className=''>
                            <ContactPopup />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Password