import React from "react";

export default function LaunchingSection() {
  const connectivityData = [
    { place: "Hunter Valley Golf And Country Club", distance: "220m" },
    { place: "Rydges Resort Hunter Valley", distance: "550m" },
    { place: "Cressnock Airport", distance: "1.7km" },
    { place: "Cressnock CBD", distance: "7km" },
    { place: "Nulkaba Public School", distance: "4.8km" },
  ];

  const generateDashes = (leftText, rightText, maxLength = 70) => {
    const totalLength = maxLength;
    const usedLength = leftText.length + rightText.length;
    const dashCount = Math.max(totalLength - usedLength, 5);
    return "-".repeat(dashCount);
  };

  return (
    <section className="flex flex-col md:flex-row max-w-[1366px] w-full mx-auto">
      {/* Left Section with gradient background */}
      <div
        className="w-full md:w-[581px] h-[725px] p-10 text-white border"
        style={{
          background: "linear-gradient(148.19deg, #003A5D 3.49%, #99B81B 113.07%)",
        }}
      >
        <h4 className="text-[20px] uppercase tracking-widest">Launching</h4>
        <h2 className="text-4xl font-bold mt-2 leading-tight">
          Signature Slam Academy <br /> Hunter Valley
        </h2>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">SSA Connectivity</h3>

          <ul className="space-y-8 text-white font-[2px] text-base">
            {connectivityData.map((item, index) => (
              <li key={index}>
                {item.place}{generateDashes(item.place, item.distance)}{item.distance}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-[785px] h-[725px]">
        <img
          src="/img5.png"
          alt="SSA Hunter Valley Campus"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
