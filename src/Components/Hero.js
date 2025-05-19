import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden pt-[83px]">
      {/* Background Image */}
      <img
        src="/hero-banner.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover brightness-125"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-83px)] text-center px-4">
        <p className="font-matter uppercase mb-2 tracking-[0.4em] text-sm sm:text-base font-bold">
          SSA HUNTER VALLEY
        </p>
        <h1 className="font-matter text-[32px] sm:text-[50px] leading-tight font-thin">
          GROW YOUR GAME WITH <br />
          <span className="uppercase font-bold text-white">PROFESSIONALS</span>
        </h1>
        <div className="w-12 sm:w-20 h-[2px] bg-white mt-4 mb-6"></div>

        {/* Motto Section */}
        <div
          className="backdrop-blur-sm rounded-full px-4 sm:px-8 py-2 mb-6 w-full max-w-[638px] h-auto bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(205, 237, 78, 0) 3.45%, #D2F24F 50.62%, rgba(210, 242, 79, 0) 91.38%), url('/path/to/bg-image.jpg')`,
          }}
        >
          <div
            className="flex items-center justify-center gap-4 text-sm sm:text-xl tracking-widest uppercase text-white h-full"
            style={{ fontFamily: "Poppins" }}
          >
            <span className="transition-all duration-300 transform hover:scale-105 hover:underline underline-offset-4 cursor-pointer">
              Adopt
            </span>
            <span className="text-white text-xl leading-none">•</span>
            <span className="transition-all duration-300 transform hover:scale-105 hover:underline underline-offset-4 cursor-pointer">
              Nurture
            </span>
            <span className="text-white text-xl leading-none">•</span>
            <span className="transition-all duration-300 transform hover:scale-105 hover:underline underline-offset-4 cursor-pointer">
              Deliver
            </span>
          </div>
        </div>

        {/* Button */}
        <button
          className="border border-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition w-[140px] h-[45px]"
          style={{ fontFamily: "Poppins" }}
        >
          Register Now
        </button>
      </div>

      {/* Side Info Box (Weather + Matches) */}
      
      <div className="w-full flex justify-end">
            <span className="flex items-center gap-2 mt-4 relative z-10 text-white text-sm sm:text-[15px] uppercase tracking-widest mb-5 after:content-[''] after:inline-block after:ml-2 after:w-10 after:h-px after:bg-white after:opacity-50">
                <img src="/arrow-up.png" alt="Arrow Up" className="w-4 h-4" />
                Weather
            </span>
        </div>


        {/* Weather Box */}
   <div className="w-full flex justify-end">
  <div
    className="text-white shadow-md flex flex-col justify-center p-4 rounded-md w-full max-w-[253px]"
    style={{
      background: "rgba(153, 184, 27, 0.28)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
    }}
  >
    <p className="text-[16px] font-poppins font-semibold mb-1">Hunter Valley</p>

    <div className="flex items-start justify-between">
      {/* Temperature */}
      <p className="text-[50px] font-poppins leading-tight">
        19<span className="text-[24px] font-light align-top">°C</span>
      </p>

      {/* Weather & Time */}
      <div className="flex flex-col items-end justify-between ml-2">
        <span className="text-[16px] font-poppins">Weather</span>
        <span className="text-[12px] opacity-50 font-poppins mt-1">Saturday, 8 PM</span>
      </div>
    </div>
  </div>
</div>

        {/* Match Info */}
       
        <div className="w-full flex justify-end">
            <span className="mt-4 flex items-center gap-2 relative z-10 text-white text-sm sm:text-[15px] uppercase tracking-widest after:content-[''] after:inline-block after:ml-2 after:w-10 after:h-px after:bg-white after:opacity-50">
                <img src="\arrow-up.png" alt="Arrow Up" className="w-4 h-4" />
                    Ongoing Matches
            </span>
        </div>

        <div className="w-full flex justify-end">
            <span className="mt-2 flex items-center gap-2 relative z-10 text-white text-sm sm:text-[15px] uppercase tracking-widest after:content-[''] after:inline-block after:ml-2 after:w-10 after:h-px after:bg-white after:opacity-50">
                <img src="/arrow-up.png" alt="Arrow Up" className="w-4 h-4" />
                    Score
            </span>
        </div>

    </section>
  );
};

export default Hero;
