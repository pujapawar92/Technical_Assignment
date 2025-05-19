import React from "react";

const TrophyHeader = () => {
  return (
    <div className="w-full h-[83px] bg-white flex justify-between items-center px-4 sm:px-8 shadow-sm mx-auto">
      {/* Left: SVG Logo */}
      <div className="w-8 h-8">
        <img src="/trophy.svg" alt="Trophy Logo" className="w-full h-full object-contain" />
      </div>

      {/* Right: Rounded button */}
      <button className="w-10 h-10 sm:w-[120px] sm:h-[40px] rounded-full border border-lime-300 hover:bg-lime-100 transition" />
    </div>
  );
};


export default TrophyHeader;
