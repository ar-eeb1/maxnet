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
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>Follow these steps to diagnose and fix your fiber internet connection issues</p>
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
                <h2 className='text-3xl font-bold text-white mb-4'>Check PON Indicator</h2>
                <p className='text-gray-300 text-lg mb-6'>
                  Look for the PON indicator light on your ONT (Optical Network Terminal). This shows the status of your fiber connection.
                </p>
                <div className='bg-white/5 rounded-xl p-4 border border-green-400/30'>
                  <div className='flex items-center gap-3 mb-2'>
                    <CheckCircle className='w-6 h-6 text-green-400' />
                    <p className='text-green-400 font-semibold'>PON Light Status:</p>
                  </div>
                  <ul className='text-gray-300 space-y-2 ml-9'>
                    <li>• <span className='text-green-400 font-medium'>Solid Green:</span> Connection is good</li>
                    <li>• <span className='text-red-400 font-medium'>Red/Off:</span> Check LOS indicator next</li>
                    <li>• <span className='text-orange-400 font-medium'>Blinking:</span> Authentication in progress</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300'>
            <div className='flex items-start gap-6'>
              <div className='flex-shrink-0'>
                <div className='w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg'>
                  03
                </div>
              </div>
              <div className='flex-1'>
                <h2 className='text-3xl font-bold text-white mb-4'>Check LOS Indicator</h2>
                <p className='text-gray-300 text-lg mb-6'>
                  If PON light is not green, check the LOS (Loss of Signal) indicator on your ONT device.
                </p>
                <div className='bg-red-500/10 border border-red-500/20 rounded-xl p-4'>
                  <div className='flex items-center gap-3 mb-3'>
                    <AlertTriangle className='w-6 h-6 text-red-400' />
                    <p className='text-red-400 font-semibold'>LOS Light Status:</p>
                  </div>
                  <ul className='text-gray-300 space-y-2 ml-9'>
                    <li>• <span className='text-green-400 font-medium'>Off/No Light:</span> Signal is good</li>
                    <li>• <span className='text-red-400 font-medium'>Red/On:</span> Loss of Signal - proceed to Step 4</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300'>
            <div className='flex items-start gap-6'>
              <div className='flex-shrink-0'>
                <div className='w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg'>
                  04
                </div>
              </div>
              <div className='flex-1'>
                <h2 className='text-3xl font-bold text-white mb-4'>Check Pigtail for Bends</h2>
                <p className='text-gray-300 text-lg mb-6'>
                  If LOS indicator is red/on, inspect the fiber pigtail cable for any bends or damage.
                </p>

                <div className='bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6'>
                  <h3 className='text-xl font-bold text-yellow-300 mb-4'>What to Look For:</h3>
                  <div className='space-y-3'>
                    <div className='flex items-start gap-3'>
                      <Dot className='w-6 h-6 text-red-400 flex-shrink-0 mt-0.5' />
                      <p className='text-gray-300'><span className='text-red-400 font-semibold'>Sharp bends</span> in the fiber cable (bend radius should be &lt; 30mm)</p>
                    </div>
                    <div className='flex items-start gap-3'>
                      <Dot className='w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5' />
                      <p className='text-gray-300'><span className='text-orange-400 font-semibold'>Twisted or kinked</span> sections of the pigtail</p>
                    </div>
                    <div className='flex items-start gap-3'>
                      <Dot className='w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5' />
                      <p className='text-gray-300'><span className='text-yellow-400 font-semibold'>Crushed or pinched</span> areas under furniture or doors</p>
                    </div>
                    <div className='flex items-start gap-3'>
                      <Dot className='w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5' />
                      <p className='text-gray-300'><span className='text-blue-400 font-semibold'>Loose connectors</span> at the ONT or wall outlet</p>
                    </div>
                  </div>

                  <div className='mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg'>
                    <div className='flex items-center gap-2 mb-2'>
                      <CheckCircle className='w-5 h-5 text-green-400' />
                      <span className='text-green-300 font-medium'>Solution:</span>
                    </div>
                    <p className='text-gray-300'>Gently straighten any bends and ensure the pigtail has smooth curves. If the cable is damaged, contact technical support for replacement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 text-center'>
            <Contact className='w-12 h-12 text-cyan-400 mx-auto mb-4' />
            <h3 className='text-2xl font-bold text-white mb-2'>Still Need Help?</h3>
            <p className='text-gray-300 mb-4'>If PON/LOS indicators show issues or pigtail problems persist, our technical support team is here to help.</p>
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