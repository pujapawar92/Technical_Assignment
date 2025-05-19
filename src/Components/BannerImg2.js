import React from "react";

const BannerImg2 = () => {
  return (
    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] flex justify-center items-center overflow-hidden p-0 m-0">
      <img
        src="/Group.svg"
        alt="About SSA"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 px-4 sm:px-6 md:px-8 text-white font-semibold text-center max-w-xl mx-auto py-6">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          ‘’ We have created an environment ideal for building craft. Our goal is to be recognized as the best tennis performance centre in the world. ”
        </p>
        <hr className="border-t-2 border-white w-24 sm:w-32 md:w-48 lg:w-64 mx-auto mt-4" />
      </div>
    </div>
  );
};

export default BannerImg2;
