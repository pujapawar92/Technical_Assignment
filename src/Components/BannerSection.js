import React from "react";

export default function BannerSection({ banners }) {
  if (!banners?.length) return null;

  return (
    <div className="space-y-6 px-4 py-8 max-w-7xl mx-auto">
      {banners.map((banner, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={banner.bannerImage.node.sourceUrl}
            alt={banner.bannersTitle}
            className="w-full md:w-1/3 object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold">{banner.bannersTitle}</h2>
            <p className="mt-2 text-gray-700">{banner.bannerDescription}</p>
            {banner.bannerButton && (
              <a
                href={banner.bannerButton.url}
                target={banner.bannerButton.target || "_self"}
                rel="noopener noreferrer"
                className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {banner.bannerButton.title}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
