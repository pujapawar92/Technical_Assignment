import React from "react";

export default function JoinSection({ joinData }) {
  if (!joinData) return null;

  return (
    <section
      className="my-12 p-10 rounded-lg text-white"
      style={{
        backgroundImage: `url(${joinData.homeJoinBackgroundImage?.node?.sourceUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto bg-black bg-opacity-60 p-8 rounded">
        <h2 className="text-3xl font-bold mb-2">{joinData.homeJoinTitle}</h2>
        <h3 className="text-xl mb-4">{joinData.homeJoinSubtitle}</h3>
        <p className="mb-6">{joinData.homeJoinDescription}</p>
        {joinData.homeJoinButton && (
          <a
            href={joinData.homeJoinButton.url}
            target={joinData.homeJoinButton.target || "_self"}
            className="inline-block bg-red-600 px-6 py-3 rounded hover:bg-red-700"
          >
            {joinData.homeJoinButton.title}
          </a>
        )}
      </div>
    </section>
  );
}
