import React from "react";

const Professionals = () => {
  const cardData = [
    { Maskgroup: 1, title: "Craig Tiley", subtitle: "CEO Tennis Australia & Australian Open" },
    { Maskgroup: 2, title: "Stephen Farrow", subtitle: "Director - Tournament, Players & International Relations" },
    { Maskgroup: 3, title: "Cameron Pearson", subtitle: "Head Major Events - Tennis Australia" },
  ];

  return (
    <section className="w-full bg-transparent py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center md:text-left">
            Meet our professionals
          </h1>
        </div>

        {/* Description and Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-11/12 md:w-2/3">
            <p className="text-gray-600 text-base sm:text-lg text-center md:text-left">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          <div className="w-full md:w-auto text-center md:text-right">
            <button className="bg-lime-600 text-white px-6 py-2 rounded-full text-sm hover:bg-lime-700 transition-all">
              View All
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="flex flex-col md:flex-row gap-6">
          {cardData.map(({ Maskgroup }, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={`/Maskgroup${Maskgroup}.jpg`}
                alt={`Maskgroup ${Maskgroup}`}
                className="w-full h-auto object-contain" // changed from object-cover and fixed height
              />
            </div>
          ))}
        </div>

        {/* Titles + Subtitles right below images */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {cardData.map(({ title, subtitle }, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
              <p className="text-sm text-gray-600">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Professionals;
