"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IoCallOutline, IoClose } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa";
import { Button } from "react-scroll";

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      {/* Contact Button */}
      <Button
        onClick={handleOpen}
        className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:scale-105 hover:shadow-lg transition cursor-pointer"
      >
        <IoCallOutline />
        CONTACT US
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 h-screen w-screen backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl w-80 relative">

            <Button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-600 text-2xl hover:text-red-500 transition"
            >
              <IoClose />
            </Button>

            <h2 className="text-xl font-bold mb-6 text-center">
              CONTACT NUMBERS
            </h2>

            <div className="flex flex-col gap-4">
              {/* Noman */}
              <div className="flex items-center justify-between bg-cyan-50 p-3 rounded-md shadow-sm hover:shadow-md transition">
                <div>
                  <p className="font-semibold">NOMAN</p>
                  <a
                    href="tel:+923162674302"
                    className="text-cyan-700 hover:underline"
                  >
                    0316-2674302
                  </a>
                </div>
                <div className="flex gap-2">
                  <a
                    href="tel:+923162674302"
                    className="text-cyan-600 hover:text-cyan-800 text-lg"
                  >
                    <IoCallOutline />
                  </a>
                  <Button
                    className="text-gray-500 hover:text-gray-700 transition text-lg"
                  >
                    <FaRegCopy />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}