import React from "react";
import { Heart, Eye } from "lucide-react";

// Blog Images
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";

const blogs = [
  {
    id: 1,
    image: blog1,
    title: "Top 10 Winter Fashion Trends",
    snippet: "Discover the hottest winter styles to keep you warm and trendy this season.",
    date: "Dec 12, 2025",
    author: "Umme Aiman",
    likes: 24,
    views: 120,
  },
  {
    id: 2,
    image: blog2,
    title: "Sustainable Fashion Tips",
    snippet: "Learn how to make your wardrobe eco-friendly without compromising style.",
    date: "Nov 25, 2025",
    author: "Amna Razzaq",
    likes: 18,
    views: 95,
  },
  {
    id: 3,
    image: blog3,
    title: "Accessorizing Like a Pro",
    snippet: "Simple tips to elevate your outfits with the perfect accessories.",
    date: "Oct 10, 2025",
    author: "Eman Fatima",
    likes: 32,
    views: 140,
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-elysian-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-elysian-burgundy text-center mb-12">
          From Our Blog
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2 relative"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover"
                />
                {/* Date Badge */}
                <span className="absolute top-3 left-3 bg-elysian-burgundy text-elysian-cream text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  {blog.date}
                </span>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-elysian-burgundy text-xl font-semibold mb-3">
                  {blog.title}
                </h3>
                <p className="text-elysian-burgundy/80 mb-4">{blog.snippet}</p>

                {/* Author, Likes, Views */}
                <div className="flex items-center justify-between text-elysian-burgundy/80 text-sm mb-4">
                  <span>By {blog.author}</span>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-elysian-pink" /> {blog.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" /> {blog.views}
                    </span>
                  </div>
                </div>

                <button className="px-6 py-2 bg-elysian-burgundy text-elysian-cream rounded-full font-medium hover:bg-elysian-pink hover:text-elysian-burgundy transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
