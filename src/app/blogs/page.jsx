"use client";
import Link from "next/link";

// Blog data
const blogs = [
  {
    id: 1,
    title: "The Art of Perfume Making",
    desc: "Perfume making is a delicate art that blends science and creativity. Master perfumers carefully select natural and synthetic ingredients to craft unique scents. From floral notes to woody bases, every layer contributes to the final fragrance experience.",
    date: "March 10, 2026",
    author: "PerfumeHub Team",
    category: "Fragrance Guide",
    readTime: "4 min read",
  },
  {
    id: 2,
    title: "Top 5 Unisex Scents for 2026",
    desc: "Unisex fragrances are gaining massive popularity in 2026. These scents combine balanced notes that appeal to everyone. From fresh citrus blends to warm amber tones, these perfumes offer versatility and elegance for any occasion.",
    date: "March 8, 2026",
    author: "PerfumeHub Team",
    category: "Trending",
    readTime: "3 min read",
  },
  {
    id: 3,
    title: "Choosing the Perfect Gift",
    desc: "Selecting the perfect perfume as a gift can be challenging. Consider the recipient’s personality, preferred scent families, and the occasion. A carefully chosen fragrance can create a memorable and meaningful gift experience.",
    date: "March 5, 2026",
    author: "PerfumeHub Team",
    category: "Tips",
    readTime: "5 min read",
  },
];

export default function BlogSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600">
          From Our Blog
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Latest news, tips, and insights about fragrances and lifestyle
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-3xl shadow-lg p-7 hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Category */}
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wide">
              {blog.category}
            </span>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mt-2">
              {blog.title}
            </h3>

            {/* Meta Info */}
            <div className="flex items-center gap-3 text-sm text-gray-400 mt-2">
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              {blog.desc}
            </p>

            {/* Author */}
            <div className="mt-6 pt-4 border-t text-sm text-gray-500">
              Written by <span className="font-semibold">{blog.author}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
