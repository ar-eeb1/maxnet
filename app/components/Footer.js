"use client"
import React from 'react'
import Link from 'next/link';

function Footer() {
    return (
        <footer className="bg-[#111] text-gray-300 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Logo / About */}
                <div>
                    <h2 className="text-2xl font-bold text-cyan-500 mb-4">MaxNet</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Seventeen years of excellence in providing reliable, high-speed
                        internet to our community. Alhamdulillah, we stand as the No.1
                        provider in our area, with dedication that never fades.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
                    <ul className="space-y-3">
                        <li><Link href="/" className="hover:text-cyan-400">Home</Link></li>
                        <li><Link href="/about" className="hover:text-cyan-400">About Us</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
                    <p className="mb-2">📍 Maxnet Office, R-324 Block 15  </p>
                    <p className="mb-2">📞 +92 316 2674302</p>
                    <p className="mb-2">📞 +92 345 3619183</p>
                    <p className="mb-4">✉️ maxnetnoman@gmail.com</p>

                    {/* Socials */}
                    <div className="flex space-x-4">
                        <Link href="#" className="hover:text-cyan-400">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.12 8.44 9.88v-7h-2.54v-2.88h2.54V9.42c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78L16.4 14.9h-2.55v7C18.34 21.12 22 17 22 12z" />
                            </svg>
                        </Link>
                        <Link href="#" className="hover:text-cyan-400">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.63 0-4.76 2.13-4.76 4.76 0 .37.04.73.12 1.07C7.69 5.64 4.07 3.75 1.64.9a4.77 4.77 0 0 0-.64 2.39c0 1.65.84 3.1 2.12 3.95a4.52 4.52 0 0 1-2.16-.6v.06c0 2.31 1.64 4.24 3.82 4.68a4.6 4.6 0 0 1-2.15.08c.61 1.91 2.39 3.3 4.5 3.34A9.06 9.06 0 0 1 0 19.54 12.79 12.79 0 0 0 6.92 22c8.32 0 12.87-6.9 12.87-12.88 0-.2 0-.4-.01-.59A9.22 9.22 0 0 0 23 3z" />
                            </svg>
                        </Link>
                        <Link href="#" className="hover:text-cyan-400">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zm-1.8-12.3c-1.15 0-2.1-.95-2.1-2.1s.95-2.1 2.1-2.1 2.1.95 2.1 2.1-.95 2.1-2.1 2.1zM20.4 20.4h-3.6v-5.4c0-1.29-.03-2.94-1.8-2.94-1.8 0-2.08 1.4-2.08 2.85v5.49h-3.6V9.6h3.45v1.48h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v5.64z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
                <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Maxnet. All rights reserved. Rates and offers are subject to change without notice.
          </p>
            </div>
        </footer>
    );
}

export default Footer
