import React, { useState } from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";

// PRODUCT IMAGES
import p1 from "../assets/product-1.jpg";
import p2 from "../assets/product-2.jpg";
import p3 from "../assets/product-3.jpg";
import p4 from "../assets/product-4.jpg";
import p5 from "../assets/product-5.jpg";
import p6 from "../assets/product-6.jpg";
import p7 from "../assets/product-7.jpg";
import p8 from "../assets/product-8.jpg";

const productsData = {
  Men: [
    { id: 1, image: p1, name: "Classic Jacket", price: "$120", rating: 4 },
    { id: 2, image: p2, name: "Casual Shirt", price: "$80", rating: 5 },
    { id: 3, image: p3, name: "Slim Jeans", price: "$95", rating: 4 },
    { id: 4, image: p4, name: "Winter Hoodie", price: "$110", rating: 5 },
    { id: 5, image: p5, name: "Formal Blazer", price: "$150", rating: 4 },
  ],
  Women: [
    { id: 6, image: p6, name: "Elegant Dress", price: "$140", rating: 5 },
    { id: 7, image: p7, name: "Stylish Top", price: "$70", rating: 4 },
    { id: 8, image: p8, name: "Long Coat", price: "$160", rating: 5 },
    { id: 9, image: p2, name: "Casual Wear", price: "$90", rating: 4 },
    { id: 10, image: p3, name: "Premium Jacket", price: "$130", rating: 5 },
  ],
  Accessories: [
    { id: 11, image: p4, name: "Leather Bag", price: "$110", rating: 5 },
    { id: 12, image: p5, name: "Classic Belt", price: "$45", rating: 4 },
    { id: 13, image: p6, name: "Luxury Watch", price: "$220", rating: 5 },
    { id: 14, image: p7, name: "Stylish Cap", price: "$35", rating: 4 },
    { id: 15, image: p8, name: "Sunglasses", price: "$60", rating: 4 },
  ],
};

export default function NewArrivals() {
  const [activeTab, setActiveTab] = useState("Men");

  return (
    <section id="new-arrivals" className="bg-elysian-cream py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-elysian-burgundy text-center">
          New Arrivals
        </h2>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mt-8">
  {Object.keys(productsData).map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`px-4 sm:px-6 py-2 rounded-full font-medium transition text-sm sm:text-base ${
        activeTab === tab
          ? "bg-elysian-burgundy text-elysian-cream"
          : "border border-elysian-burgundy text-elysian-burgundy"
      }`}
    >
      {tab}
    </button>
  ))}
</div>


        {/* Products Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {productsData[activeTab].map((product) => (
            <div
              key={product.id}
              className="group bg-elysian-cream border border-elysian-burgundy/20 rounded-2xl overflow-hidden relative"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover"
                />

                {/* Hover Icons */}
                <div className="absolute inset-0 bg-elysian-burgundy/70 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                  <button className="p-2 bg-elysian-cream rounded-full">
                    <ShoppingCart className="w-5 h-5 text-elysian-burgundy" />
                  </button>
                  <button className="p-2 bg-elysian-cream rounded-full">
                    <Heart className="w-5 h-5 text-elysian-burgundy" />
                  </button>
                  <button className="p-2 bg-elysian-cream rounded-full">
                    <Eye className="w-5 h-5 text-elysian-burgundy" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 text-center">
                {/* Rating */}
                <div className="flex justify-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < product.rating
                          ? "text-elysian-pink"
                          : "text-elysian-burgundy/30"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <h3 className="text-elysian-burgundy font-medium">
                  {product.name}
                </h3>

                <p className="mt-1 font-semibold text-elysian-burgundy">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-12 text-center">
          <button className="px-10 py-3 bg-elysian-burgundy text-elysian-cream rounded-full hover:bg-elysian-pink hover:text-elysian-burgundy transition font-medium">
            View More
          </button>
        </div>

      </div>
    </section>
  );
}
