import React from "react";

export default function CoachesEvents() {
  return (
    <section className="flex flex-col md:flex-row w-full">
      {/* Coaches Section */}
     <div
  className="w-full md:w-1/2 relative h-[320px] md:h-[450px] text-white flex items-center p-10 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/Rectangle34.png')",
  }}
>
  <div className="text-left mt-1" style={{ marginTop: '150px' }}>

    <h2 className="text-5xl font-bold mb-2">Our Coaches</h2>
    <p className="mb-4 text-2xl max-w-sm">
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    </p>
    <a
      href="#"
      className="inline-flex items-center gap-1 w-fit text-2xl"
    >
      Read More <span className="ml-1">&rarr;</span>
    </a>
  </div>
</div>


      {/* Events Section */}
<div className="w-full md:w-1/2 bg-[#99B81B] text-white flex items-center p-10 relative h-[320px] md:h-[450px]">
  <div className="absolute right-4 bottom-0 opacity-90">
    <img
      src="/image1.png"
      alt="Event Graphic"
      className="w-[300px] border-none outline-none shadow-none"
    />
  </div>

  <div className="mt-32"> {/* mt-32 = marginTop ~128px */}
    <h2 className="text-5xl font-bold mb-2">Events</h2>
    <p className="mb-4 text-2xl max-w-sm">
      Lorem Ipsum has been the industry's standard dummy text ever since
      the 1500s,
    </p>
    <a
      href="#"
      style={{ textDecoration: 'none' }}
      className="inline-flex items-center gap-1 w-fit text-2xl"
    >
      Read More <span className="ml-1">&rarr;</span>
    </a>
  </div>


      </div>
    </section>
  );
}
