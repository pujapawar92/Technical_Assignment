import React from "react";

export default function BlogsSection({ blogs, title, subtitle }) {
  if (!blogs?.length) return null;

  return (
    <section className="max-w-7xl mx-auto p-6 my-12">
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">{subtitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, idx) => (
          <a
            key={idx}
            href={`/blog/${blog.slug}`}
            className="block rounded overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={blog.featuredImage?.node?.sourceUrl}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-gray-500 text-sm">
                {new Date(blog.date).toLocaleDateString()}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
