import React from "react";

export default function CategorySection({ categories, title, subtitle }) {
  if (!categories?.length) return null;

  return (
    <section className="max-w-7xl mx-auto p-6 my-12">
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">{subtitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <a
            key={idx}
            href={cat.link}
            className="block bg-white rounded shadow hover:shadow-lg transition p-4 text-center"
          >
            <img
              src={cat.image.node.sourceUrl}
              alt={cat.title}
              className="mx-auto mb-3 w-20 h-20 object-cover rounded-full"
            />
            <h3 className="text-lg font-medium">{cat.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
