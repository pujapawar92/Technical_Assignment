// Coaches.js
import React from "react";
import { Element } from "react-scroll";

const Coaches = () => {
  return (
    <Element name="aboutSection">
      <section className="w-full px-6 sm:px-12 lg:px-20 py-16 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-matter mb-4">
                Coaches
            </h2>

            <p className="text-gray-700 text-sm sm:text-base mb-6 max-w-md">
              To be the first venue in the world to have 60 multi surface courts at one
              location and establish first one stop tennis academy in the Asia Pacific
              producing grand slam champions.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              {[{ number: "20", label: "courts" }, { number: "12", label: "coaches" }, { number: "17", label: "years" }, { number: "10", label: "clubs" }].map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-lime-600 text-2xl font-bold">{item.number}</p>
                  <p className="text-sm">{item.label}</p>
                </div>
              ))}
            </div>
            <button className="bg-lime-600 text-white px-6 py-2 rounded-full text-sm hover:bg-lime-700 transition-all">
              Read More
            </button>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Coaches;