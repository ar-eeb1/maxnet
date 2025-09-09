"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IoCallOutline, IoClose } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa";

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      {/* Contact Button */}
      <button
        onClick={handleOpen}
        className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:scale-105 hover:shadow-lg transition cursor-pointer"
      >
        <IoCallOutline />
        CONTACT US
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 h-screen w-screen backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl w-80 relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-600 text-2xl hover:text-red-500 transition"
            >
              <IoClose />
            </button>

            {/* Header */}
            <h2 className="text-xl font-bold mb-6 text-center">
              CONTACT NUMBERS
            </h2>

            {/* Contact Items */}
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
                  <button
                    className="text-gray-500 hover:text-gray-700 transition text-lg"
                  >
                    <FaRegCopy />
                  </button>
                </div>
              </div>

              {/* Adnan */}
              <div className="flex items-center justify-between bg-cyan-50 p-3 rounded-md shadow-sm hover:shadow-md transition">
                <div>
                  <p className="font-semibold">ADNAN</p>
                  <a
                    href="tel:+923453619183"
                    className="text-cyan-700 hover:underline"
                  >
                    0345-3619183
                  </a>
                </div>
                <div className="flex gap-2">
                  <a
                    href="tel:+923453619183"
                    className="text-cyan-600 hover:text-cyan-800 text-lg"
                  >
                    <IoCallOutline />
                  </a>
                  <button
                    className="text-gray-500 hover:text-gray-700 transition text-lg"
                  >
                    <FaRegCopy />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}