import React from 'react'
import { WifiOff, Globe, Contact, Dot, Router, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import ContactPopup from '@/app/components/ContactPopup';

function Internet() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900'>
      {/* Header */}
      <div className='pt-12 pb-8 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center justify-center p-3 bg-red-500/20 rounded-full mb-6'>
            <WifiOff className='w-12 h-12 text-red-400' />
          </div>
          <h1 className='text-5xl font-bold text-white mb-4'>Internet Troubleshooting</h1>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>Follow these steps to diagnose and fix your internet connection issues</p>
        </div>
      </div>

      {/* Steps Container */}
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
                <h2 className='text-3xl font-bold text-white mb-4'>Check Internet Connection</h2>
                <p className='text-gray-300 text-lg mb-4'>Verify that your Wi-Fi is properly connected to your device.</p>
                <div className='bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4'>
                  <div className='flex items-center gap-2'>
                    <AlertTriangle className='w-5 h-5 text-yellow-400' />
                    <span className='text-yellow-300 font-medium'>Wi-Fi Not Connected?</span>
                  </div>
                  <a
                    className="inline-flex items-center gap-2 mt-2 text-cyan-400 hover:text-cyan-300 underline font-medium transition-colors"
                    href="/help-center/not-connected"
                  >
                    Get Wi-Fi Connection Help <ExternalLink className='w-4 h-4' />
                  </a>
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
                <h2 className='text-3xl font-bold text-white mb-4'>Verify WAN Port Connection</h2>
                <p className='text-gray-300 text-lg mb-6'>
                  Ensure the WAN port is properly connected. Each router has one WAN port (usually a different color) and 2-4 LAN ports.
                </p>
                <div className='bg-white/5 rounded-xl p-4 border border-cyan-400/30'>
                  <img 
                    className='w-full max-w-md mx-auto rounded-lg shadow-lg' 
                    src="/wan.jpg" 
                    alt="WAN Port Connection Example" 
                  />
                  <p className='text-center text-sm text-gray-400 mt-2'>Example of WAN port connection</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300'>
            <div className='flex items-start gap-6'>
              <div className='flex-shrink-0'>
                <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg'>
                  03
                </div>
              </div>
              <div className='flex-1'>
                <h2 className='text-3xl font-bold text-white mb-4'>Check WAN Indicator</h2>
                <div className='flex items-center gap-3 text-gray-300 text-lg'>
                  <p>Look for the WAN port indicator on your modem/router. It usually has a</p>
                  <Globe className='w-6 h-6 text-cyan-400' />
                  <p>icon showing connection status.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300'>
            <div className='flex items-start gap-6'>
              <div className='flex-shrink-0'>
                <div className='w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg'>
                  04
                </div>
              </div>
              <div className='flex-1'>
                <h2 className='text-3xl font-bold text-white mb-6'>Router-Specific Instructions</h2>
                
                <div className='grid md:grid-cols-2 gap-8'>
                  {/* TP-Link/Tenda */}
                  <div className='bg-white/5 rounded-xl p-6 border border-white/10'>
                    <div className='flex items-center gap-3 mb-4'>
                      <Router className='w-6 h-6 text-blue-400' />
                      <h3 className='text-2xl font-bold text-white'>TP-Link / Tenda</h3>
                    </div>
                    <div className='space-y-3'>
                      <div className='flex items-start gap-3'>
                        <Dot className='w-6 h-6 text-red-400 flex-shrink-0 mt-0.5' />
                        <p className='text-gray-300'>If WAN indicator is <span className='text-red-400 font-semibold'>blinking</span> while connected, contact your ISP</p>
                      </div>
                      <div className='flex items-start gap-3'>
                        <Dot className='w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5' />
                        <p className='text-gray-300'>If <span className='text-orange-400 font-semibold'>orange stable</span> indicator, restart your router</p>
                      </div>
                      <div className='flex items-start gap-3'>
                        <Dot className='w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5' />
                        <p className='text-gray-300'>If <span className='text-yellow-400 font-semibold'>yellow stable</span> indicator, your plan may be expired</p>
                      </div>
                      <div className='flex items-start gap-3'>
                        <Dot className='w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5' />
                        <p className='text-gray-300'>If still not working, contact your ISP</p>
                      </div>
                    </div>
                  </div>

                  {/* D-Link */}
                  <div className='bg-white/5 rounded-xl p-6 border border-white/10'>
                    <div className='flex items-center gap-3 mb-4'>
                      <Router className='w-6 h-6 text-green-400' />
                      <h3 className='text-2xl font-bold text-white'>D-Link</h3>
                    </div>
                    <div className='space-y-3'>
                      <div className='flex items-start gap-3'>
                        <Dot className='w-6 h-6 text-green-400 flex-shrink-0 mt-0.5' />
                        <p className='text-gray-300'>If indicator is <span className='text-green-400 font-semibold'>Green</span>/<span className='text-red-400 font-semibold'>Red</span>, restart may help</p>
                      </div>
                      <div className='flex items-start gap-3'>
                        <Dot className='w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5' />
                        <p className='text-gray-300'>If there's no indicator, contact your ISP</p>
                      </div>
                    </div>
                  </div>
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

export default Internet