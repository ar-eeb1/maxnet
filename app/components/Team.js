"use client";
import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";


function Team({ name, role, image }) {
  return (
    <div className="flex flex-col items-center text-center p-1 bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
      <div className="flex flex-col items-center p-2 bg-[#111] rounded-xl w-full h-full">

      {image ? (
        <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover border-2 border-cyan-400"
        />
      ) : (
        <IoPersonCircleSharp
        name={name}
        size="96"
        round="true"
        color="#22d3ee"
        fgColor="#fff"
        />
      )}
      <h3 className="mt-4 text-lg font-bold text-white">{name}</h3>
      <p className="text-gray-400">{role}</p>
      </div>
    </div>
  );
}

export default Team;
