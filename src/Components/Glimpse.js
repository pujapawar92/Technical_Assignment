import React from "react";

const Glimpse = () => {
  return (
    <section className="w-full bg-transparent py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading + Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center md:text-left">
            A Glimpse of Excellence
          </h1>
          <button className="bg-lime-600 text-white px-6 py-2 rounded-full text-sm hover:bg-lime-700 transition-all">
            Register Now
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg mb-8 text-center md:text-left">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image 1 - 30% width with hover */}
          <div className="w-full md:w-1/3 bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
            <img
              src="/img12.jpg"
              alt="Image 12"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 - 70% width with hover */}
          <div className="w-full md:w-2/3 bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
            <img
              src="/img13.jpg"
              alt="Image 13"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glimpse;
