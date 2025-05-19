import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div>
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold font-matter relative mb-4">
            About Us
            <span className="absolute -top-1 -right-3 w-2 h-2 bg-lime-600 rounded-full inline-block"></span>
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base mb-6 max-w-md">
            To be the first venue in the world to have 60 multi surface courts at one
            location and establish first one stop tennis academy in the Asia Pacific
            producing grand slam champions.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-8">
            {[
              { number: "20", label: "courts" },
              { number: "12", label: "coaches" },
              { number: "17", label: "years" },
              { number: "10", label: "clubs" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-lime-600 text-2xl font-bold">{item.number}</p>
                <p className="text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="bg-lime-600 text-white px-6 py-2 rounded-full text-sm hover:bg-lime-700 transition-all">
            Read More
          </button>
        </div>

        {/* Right Side Images Grid */}
     <div className="w-full max-w-[400px] space-y-4">
  {/* Top Row: img1 (70%) and img2 (30%) */}
  <div className="flex gap-4 h-[200px]">
    <img
      src="/img1.jpg"
      alt="about1"
      className="w-[70%] h-full object-cover rounded-lg"
    />
    <img
      src="/img2.jpg"
      alt="about2"
      className="w-[30%] h-full object-cover rounded-lg"
    />
  </div>

  {/* Bottom Row: img3 and img4 (equal width) */}
  <div className="grid grid-cols-2 gap-4 h-[150px]">
    <img
      src="/img3.jpg"
      alt="about3"
      className="w-full h-full object-cover rounded-lg"
    />
    <img
      src="/img4.jpg"
      alt="about4"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>


      </div>
    </section>
  );
};

export default AboutUs;
