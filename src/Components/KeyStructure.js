import React from "react";

const KeyStructure = () => {
  const leftItems = [
    "First venue in the world",
    "60 multi-surface courts (20 clay, 30 hard, 10 grass)",
    "Hold WTA & ATP events on any three surfaces",
    "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
    "First one stop tennis acaderny inAsia Pacific"
  ];

  const rightItems = [
    "Tennis academy with event staging",
    "Venue with academy, equestrian, golf, resort, and airport",
    "One-stop tennis academy in Asia Pacific",
    "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
    "First one stop tennis acaderny inAsia Pacific"
  ];

  return (
    <section className="w-full bg-transparent py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading + Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center md:text-left">
            key Features
          </h1>
          <button className="bg-lime-600 text-white px-6 py-2 rounded-full text-sm hover:bg-lime-700 transition-all">
            Register Now
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg mb-8 text-center md:text-left">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
              {leftItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <img src="/Arrow 2.svg" alt="arrow" className="w-5 h-5 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
              {rightItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <img src="/Arrow 2.svg" alt="arrow" className="w-5 h-5 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyStructure;
