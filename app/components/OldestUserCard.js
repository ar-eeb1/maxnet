"use client";

export default function OldestUserCard({ username, address, badge = "Founding Member" }) {
  return (
    <div className="m-4 w-72 rounded-xl bg-white/10 backdrop-blur-md 
                    border border-white/20 shadow-md 
                    hover:scale-105 hover:shadow-xl 
                    transition-all duration-300 ease-in-out">
      <div className="p-6 flex flex-col items-center text-center">
        
        {/* Badge */}
        <span className="mb-3 text-xs font-semibold px-3 py-1 
                         bg-cyan-500/80 text-white rounded-full shadow-sm">
          {badge}
        </span>

        {/* Username */}
        <h3 className="text-lg font-bold text-white">
          {username}
        </h3>

        {/* Address */}
        <p className="mt-1 text-sm text-gray-200">
          {address}
        </p>
      </div>
    </div>
  );
}
