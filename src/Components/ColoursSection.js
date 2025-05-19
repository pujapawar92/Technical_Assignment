import React from "react";

export default function ColoursSection({ colourCategory }) {
  if (!colourCategory) return null;

  return (
    <section className="max-w-7xl mx-auto p-6 my-12 bg-gray-50 rounded shadow-md">
      <h2 className="text-3xl font-semibold mb-6">{colourCategory.name}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {colourCategory.colours.nodes.map((colour, idx) => (
          <div key={idx} className="text-center p-3 bg-white rounded shadow-md">
            <div
              className="w-12 h-12 mx-auto rounded-full mb-2 border border-gray-300"
              style={{ backgroundColor: colour.colourInfo.colourRgb }}
            />
            <p className="text-sm font-medium">{colour.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
