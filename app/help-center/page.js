"use client";
import React, { useState } from "react";
import ContactPopup from "../components/ContactPopup";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Wifi,
  Router,
  Zap,
  HelpCircle,
  CheckCircle,
  AlertCircle,
  WifiOff,
  EthernetPort,
  TabletSmartphone,
} from "lucide-react";

const HelpCenter = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Help Center</h1>
          <p className="text-gray-400 text-lg">
            Get help with your internet connection and find answers to common
            questions
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
            <Router className="w-6 h-6 text-blue-400" />
            Troubleshoot Internet
          </h2>

          <div className="bg-gray-800 border border-red-500/40 rounded-lg p-6">
            <div className="flex items-center gap-3">
              <EthernetPort className="w-6 h-6 text-red-400" />
              <Link
                href="/help-center/internet-not-working"
                className="text-lg font-medium text-red-300 hover:text-red-200 transition-colors"
              >
                Cable Internet Not Working
              </Link>
            </div>
            <p className="text-gray-400 mt-2 ml-9">
              Click here for step-by-step internet troubleshoot guide
            </p>
          </div>

          <div className="bg-gray-800 border border-green-500/40 rounded-lg p-6 mt-2">
            <div className="flex items-center gap-3">
              <Wifi className="w-6 h-6 text-green-400" />
              <Link
                href="/help-center/change-wifi-password"
                className="text-lg font-medium text-green-300 hover:text-green-200 transition-colors"
              >
                Change Wi-Fi Password
              </Link>
            </div>
            <p className="text-gray-400 mt-2 ml-9">
              Click here for step-by-step change password guide
            </p>
          </div>

          <div className="bg-gray-800 border border-orange-500/40 rounded-lg p-6 mt-2">
            <div className="flex items-center gap-3">
              <Wifi className="w-6 h-6 text-orange-400" />
              <Link
                href="/help-center/fiber-not-working"
                className="text-lg font-medium text-orange-300 hover:text-orange-200 transition-colors"
              >
                Fibre-Optic Internet Not Working
              </Link>
            </div>
            <p className="text-gray-400 mt-2 ml-9">
              Click here for step-by-step internet troubleshoot guide
            </p>
          </div>

          <div className="bg-gray-800 border border-purple-500/40 rounded-lg p-6 mt-2">
            <div className="flex items-center gap-3">
              <TabletSmartphone className="w-6 h-6 text-purple-400" />
              <Link
                href="/help-center/single-device"
                className="text-lg font-medium text-purple-300 hover:text-purple-200 transition-colors"
              >
                Only Single Device Internet Is Not Working
              </Link>
            </div>
            <p className="text-gray-400 mt-2 ml-9">
              Click here for step-by-step troubleshoot guide
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-purple-400" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors">
              <button
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                onClick={() => toggleFAQ(0)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white text-lg pr-4">
                    Why should I restart my router?
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === 0 ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>
              {openIndex === 0 && (
                <div className="px-6 pb-6 text-gray-300">
                  <div className="border-t border-gray-700 pt-4 space-y-3">
                    <p>
                      Restarting your router is a simple but powerful way to fix
                      internet problems. It clears temporary glitches, refreshes
                      your network connection, and can even improve your speed.
                    </p>
                    <div className="bg-blue-900/30 border-l-4 border-blue-500 p-3 rounded-r">
                      <p className="text-sm">
                        Restarting helps overloaded routers remove temporary
                        glitches, memory buildup, or slow connections. This
                        gives your router a clean slate so your internet works
                        faster and more reliably.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors">
              <button
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                onClick={() => toggleFAQ(1)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white text-lg pr-4">
                    What&apos;s the difference between 2.4 GHz and 5 GHz?
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === 1 ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>
              {openIndex === 1 && (
                <div className="px-6 pb-6 text-gray-300">
                  <div className="border-t border-gray-700 pt-4 space-y-4">
                    <p>
                      Both 2.4 GHz and 5 GHz bands have pros and cons depending
                      on your situation:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-700/50 border border-purple-500/30 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-purple-300 mb-3 flex items-center gap-2">
                          <Wifi className="w-5 h-5" />
                          2.4 GHz
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Better range and wall penetration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span>Slower speeds, more interference</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Compatible with all devices</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Best for IoT devices and long distances</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gray-700/50 border border-cyan-500/30 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                          <Zap className="w-5 h-5" />
                          5 GHz
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Higher speeds and more bandwidth</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span>Shorter range, struggles through walls</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Less crowded, cleaner signal</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>Perfect for streaming and gaming</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-emerald-900/30 border-l-4 border-emerald-500 rounded-r p-4">
                      <h4 className="font-semibold text-emerald-300 mb-2">
                        💡 Best Practice: Dual Band Router
                      </h4>
                      <p className="text-sm text-emerald-200/80">
                        Use a dual-band router to get the best of both worlds -
                        let speed-hungry devices use 5 GHz while distant devices
                        connect via 2.4 GHz.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors">
              <button
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                onClick={() => toggleFAQ(2)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white text-lg pr-4">
                    What types of internet connections are available?
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === 2 ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>
              {openIndex === 2 && (
                <div className="px-6 pb-6 text-gray-300">
                  <div className="border-t border-gray-700 pt-4">
                    <p>
                      Maxnet offers both{" "}
                      <span className="text-blue-300 font-medium">
                        Fiber-optic
                      </span>{" "}
                      and{" "}
                      <span className="text-purple-300 font-medium">Cable</span>{" "}
                      connections, which depend on your usage and requirements.
                      Contact us to find the best option for your location.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors">
              <button
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                onClick={() => toggleFAQ(3)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white text-lg pr-4">
                    How do I choose the best internet plan?
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === 3 ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>
              {openIndex === 3 && (
                <div className="px-6 pb-6 text-gray-300">
                  <div className="border-t border-gray-700 pt-4 space-y-3">
                    <p>
                      Visit our plans section for complete details about all
                      available plans:
                    </p>
                    <Link
                      href="/#plan"
                      className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg font-medium text-white transition-colors"
                    >
                      View Plans
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors">
              <button
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                onClick={() => toggleFAQ(4)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white text-lg pr-4">
                    Can I upgrade or downgrade my plan anytime?
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === 4 ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>
              {openIndex === 4 && (
                <div className="px-6 pb-6 text-gray-300">
                  <div className="border-t border-gray-700 pt-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-green-300">Upgrades</p>
                        <p className="text-sm text-gray-300">
                          Available anytime - instant activation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-yellow-300">
                          Downgrades
                        </p>
                        <p className="text-sm text-gray-300">
                          Takes effect at the end of your current billing cycle
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 6 */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors">
              <button
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                onClick={() => toggleFAQ(5)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white text-lg pr-4">
                    My internet is slow. What should I do?
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === 5 ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>
              {openIndex === 5 && (
                <div className="px-6 pb-6 text-gray-300">
                  <div className="border-t border-gray-700 pt-4 space-y-4">
                    <p className="font-medium text-yellow-300">
                      Try these troubleshooting steps:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                        <Router className="w-5 h-5 text-blue-400" />
                        <span>Restart your modem/router</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                        <HelpCircle className="w-5 h-5 text-purple-400" />
                        <span>Check for background downloads</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                        <Wifi className="w-5 h-5 text-green-400" />
                        <span>Test with a wired connection</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-red-400" />
                        <span>Contact support if problem persists</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <ContactPopup />
    </div>
  );
};

export default HelpCenter;
