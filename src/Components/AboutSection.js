import React, { useState } from "react";
import AboutUs from "./AboutUs";
import { scroller, Element } from "react-scroll";
import Mission from "./Mission";
import Vision from "./Vision";
import Coaches from "./Coaches";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(null);

  const tabs = ["About Us", "Coaches", "Vision", "Mission"];

  const handleTabClick = (text) => {
  setActiveTab(text);
  const scrollTargets = {
    "About Us": "aboutUsScrollTarget",
    Mission: "missionScrollTarget",
    Vision:"visionScrollTarget",
    Coaches: "coachesScrollTarget"
  };

  if (scrollTargets[text]) {
    setTimeout(() => {
      scroller.scrollTo(scrollTargets[text], {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -80, // Adjust based on header height
      });
    }, 100);
  }
};


  return (
    <section className="relative w-full pt-[83px] pb-12 bg-white">
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 px-4 sm:px-8 lg:px-16">
    {/* Left Image */}
    <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[300px] h-[300px] flex justify-center lg:justify-start">
      <img
        src="/a 1.svg"
        alt="About SSA"
        className="w-full h-full object-contain mt-1"
      />
    </div>

    {/* Right Text */}
    <div className="flex-1 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-4 sm:px-6 lg:mr-[60px] mb-8 lg:mb-0">
      <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-popince font-medium leading-relaxed tracking-wide text-center">
        To be the first venue in the world to have{" "}
        <span className="font-semibold" style={{ color: "rgba(153, 184, 27, 1)" }}>
          60 multi-surface courts
        </span>{" "}
        at one location and establish the first one-stop tennis academy in the Asia Pacific producing{" "}
        <span className="font-semibold" style={{ color: "rgba(153, 184, 27, 1)" }}>
          Grand Slam champions
        </span>.
      </p>

      {/* Navigation */}
      <nav className="w-full mt-12 bg-transparent py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <ul className="flex gap-x-6 sm:gap-x-12 md:gap-x-16 lg:gap-x-10 font-semibold text-sm sm:text-base md:text-lg items-center">
            {tabs.map((text, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleTabClick(text)}
                  className="px-2 py-1 transition duration-200"
                  style={{
                    background: "transparent",
                    color: activeTab === text ? "#000" : "rgba(193, 193, 193, 1)",
                    borderBottom: activeTab === text ? "2.5px solid rgba(153, 184, 27, 1)" : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== text) {
                      e.currentTarget.style.color = "rgba(0,0,0,1)";
                      e.currentTarget.style.borderBottom = "2.5px solid rgba(153, 184, 27, 1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== text) {
                      e.currentTarget.style.color = "rgba(193, 193, 193, 1)";
                      e.currentTarget.style.borderBottom = "none";
                    }
                  }}
                >
                  {text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  </div>

  {/* Conditional rendering of content */}
  {activeTab === "About Us" && (
    <Element name="aboutUsScrollTarget">
      <AboutUs />
    </Element>
  )}
  {activeTab === "Mission" && (
    <Element name="missionScrollTarget">
      <Mission />
    </Element>
  )}
  {activeTab === "Vision" && (
    <Element name="visionScrollTarget">
      <Vision />
    </Element>
  )}
  {activeTab === "Coaches" && (
    <Element name="coachesScrollTarget">
      <Coaches />
    </Element>
  )}
</section>

    
  );
};

export default AboutSection;




///////////////////////////////////////////////// new About section realated to Api /////////////////


// import React from "react";

// export default function AboutSection({ about }) {
//   if (!about) return null;

//   return (
//     <section className="max-w-6xl mx-auto p-6 my-12 bg-white rounded shadow-md">
//       <h2 className="text-3xl font-semibold mb-2">{about.homeAboutTitle}</h2>
//       <h3 className="text-xl text-gray-600 mb-6">{about.homeAboutSubtitle}</h3>
//       <div className="flex flex-col md:flex-row items-center gap-6">
//         <img
//           src={about.homeAboutVideoImage?.node?.sourceUrl}
//           alt="About Video"
//           className="w-full md:w-1/2 rounded-lg object-cover"
//         />
//         <div>
//           <p className="mb-4">{about.homeAboutDescription}</p>
//           {about.homeAboutVideoUrl && (
//             <a
//               href={about.homeAboutVideoUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline"
//             >
//               Watch Video
//             </a>
//           )}
//           {about.homeAboutButton && (
//             <a
//               href={about.homeAboutButton.url}
//               target={about.homeAboutButton.target || "_self"}
//               className="inline-block mt-4 px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//             >
//               {about.homeAboutButton.title}
//             </a>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
