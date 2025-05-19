import React from "react";

const Program = () => {
  return (
    <section className="w-full bg-transparent py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center md:text-left">
            Program 
          </h1>
        </div>

        {/* Description and Button in a row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-11/12 md:w-2/3">
  <p className="text-gray-600 text-base sm:text-lg text-center md:text-left">
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  </p>
</div>

          <div className="w-full md:w-auto text-center md:text-right">
            <button className="bg-lime-600 text-white px-6 py-2 rounded-full text-sm hover:bg-lime-700 transition-all">
              Register Now
            </button>
          </div>
        </div>

        {/* Image Section */}
      <div className="flex flex-col md:flex-row gap-6">
  {[
    { img: 12, title: "Academy", subtitle: "Live and train with us" },
    { img: 13, title: "Camps", subtitle: "Train like a pro with us" },
    { img: 14, title: "Performance", subtitle: "Elevate your game with us" },
  ].map(({ img, title, subtitle }, index) => (
    <div
      key={index}
      className="w-full md:w-1/3 bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer relative"
    >
      {/* Image */}
      <img
        src={`/img${img}.jpg`}
        alt={title}
        className="w-full h-64 object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Program;
