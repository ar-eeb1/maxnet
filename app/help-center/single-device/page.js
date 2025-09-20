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
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Other devices working but yours isn&apos;t? Follow these steps to fix common connection issues
          </p>
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
                <h2 className='text-3xl font-bold text-white mb-4'>Verify Other Devices Are Working</h2>
                <p className='text-gray-300 text-lg mb-4'>Confirm that other devices (phones, tablets, laptops) can access the internet successfully.</p>
                <div className='bg-green-500/10 border border-green-500/20 rounded-lg p-4'>
                  <div className='flex items-center gap-2'>
                    <CheckCircle className='w-5 h-5 text-green-400' />
                    <span className='text-green-300 font-medium'>If other devices work fine</span>
                  </div>
                  <p className='text-gray-300 mt-2'>The issue is specific to your device, not the internet connection. Proceed to the next steps.</p>
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
                <h2 className='text-3xl font-bold text-white mb-4'>Check Time and Date Settings</h2>
                <p className='text-gray-300 text-lg mb-6'>
                  The most common cause when only your device can&apos;t connect is incorrect time and date settings.
                </p>
                <div className='bg-red-500/10 border border-red-500/20 rounded-xl p-6'>
                  <div className='flex items-center gap-3 mb-4'>
                    <AlertTriangle className='w-6 h-6 text-red-400' />
                    <p className='text-red-400 font-semibold text-lg'>Why Time Matters:</p>
                  </div>
                  <p className='text-gray-300 mb-4'>
                    SSL certificates and network authentication require accurate time synchronization. Wrong date/time prevents secure connections.
                  </p>
                  
                  <div className='bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4'>
                    <h4 className='text-cyan-300 font-semibold mb-2'>Quick Fix</h4>
                    <ul className='text-gray-300 space-y-1 ml-4'>
                      <li>&bull; Go to your device&apos;s Settings</li>
                      <li>&bull; Find &quot;Date &amp; Time&quot; or &quot;Time &amp; Date&quot;</li>
                      <li>&bull; Enable &quot;Automatic Date &amp; Time&quot;</li>
                      <li>&bull; Or manually set the correct date and time</li>
                    </ul>
                  </div>
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
                <h2 className='text-3xl font-bold text-white mb-4'>Platform-Specific Instructions</h2>
                <p className='text-gray-300 text-lg mb-6'>
                  Follow these steps based on your device type to fix time and date settings.
                </p>
                
                <div className='grid md:grid-cols-2 gap-6'>
                  {/* Windows */}
                  <div className='bg-blue-500/10 border border-blue-500/20 rounded-xl p-6'>
                    <h3 className='text-xl font-bold text-blue-300 mb-4'>🪟 Windows</h3>
                    <div className='space-y-2 text-sm text-gray-300'>
                      <p>&bull; Right-click on time in taskbar</p>
                      <p>&bull; Select &quot;Adjust date/time&quot;</p>
                      <p>&bull; Turn ON &quot;Set time automatically&quot;</p>
                      <p>&bull; Click &quot;Sync now&quot;</p>
                    </div>
                  </div>

                  {/* Mac */}
                  <div className='bg-gray-500/10 border border-gray-500/20 rounded-xl p-6'>
                    <h3 className='text-xl font-bold text-gray-300 mb-4'>🍎 macOS</h3>
                    <div className='space-y-2 text-sm text-gray-300'>
                      <p>&bull; System Preferences → Date &amp; Time</p>
                      <p>&bull; Check &quot;Set date and time automatically&quot;</p>
                      <p>&bull; Restart if needed</p>
                    </div>
                  </div>

                  {/* Android */}
                  <div className='bg-green-500/10 border border-green-500/20 rounded-xl p-6'>
                    <h3 className='text-xl font-bold text-green-300 mb-4'>🤖 Android</h3>
                    <div className='space-y-2 text-sm text-gray-300'>
                      <p>&bull; Settings → System → Date &amp; time</p>
                      <p>&bull; Enable &quot;Use network-provided time&quot;</p>
                      <p>&bull; Toggle airplane mode on/off</p>
                    </div>
                  </div>

                  {/* iOS */}
                  <div className='bg-gray-600/10 border border-gray-600/20 rounded-xl p-6'>
                    <h3 className='text-xl font-bold text-gray-300 mb-4'>📱 iOS</h3>
                    <div className='space-y-2 text-sm text-gray-300'>
                      <p>&bull; Settings → General → Date &amp; Time</p>
                      <p>&bull; Turn ON &quot;Set Automatically&quot;</p>
                      <p>&bull; Restart device if needed</p>
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
                <div className='w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg'>
                  04
                </div>
              </div>
              <div className='flex-1'>
                <h2 className='text-3xl font-bold text-white mb-4'>Additional Troubleshooting</h2>
                <p className='text-gray-300 text-lg mb-6'>
                  If time and date correction doesn&apos;t solve the issue, try these additional steps.
                </p>
                
                <div className='space-y-4'>
                  <div className='bg-purple-500/10 border border-purple-500/20 rounded-xl p-4'>
                    <div className='flex items-center gap-3 mb-2'>
                      <Router className='w-5 h-5 text-purple-400' />
                      <span className='text-purple-300 font-semibold'>Network Reset</span>
                    </div>
                    <p className='text-gray-300 text-sm'>Forget and reconnect to your Wi-Fi network with the correct password.</p>
                  </div>
                  
                  <div className='bg-orange-500/10 border border-orange-500/20 rounded-xl p-4'>
                    <div className='flex items-center gap-3 mb-2'>
                      <Globe className='w-5 h-5 text-orange-400' />
                      <span className='text-orange-300 font-semibold'>DNS Settings</span>
                    </div>
                    <p className='text-gray-300 text-sm'>Try changing DNS to 8.8.8.8 and 8.8.4.4 (Google DNS) or 1.1.1.1 (Cloudflare).</p>
                  </div>
                  
                  <div className='bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4'>
                    <div className='flex items-center gap-3 mb-2'>
                      <AlertTriangle className='w-5 h-5 text-cyan-400' />
                      <span className='text-cyan-300 font-semibold'>Device Restart</span>
                    </div>
                    <p className='text-gray-300 text-sm'>
                      Restart your device after making time/date changes to ensure all services reload properly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 text-center'>
            <Contact className='w-12 h-12 text-cyan-400 mx-auto mb-4' />
            <h3 className='text-2xl font-bold text-white mb-2'>Still Need Help?</h3>
            <p className='text-gray-300 mb-4'>If problems persist, our technical support team is here to help.</p>
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
