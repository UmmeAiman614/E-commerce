import React from "react";
import { ShoppingCart, Heart, Eye } from "lucide-react";

// Product Images
import p1 from "../assets/product-1.jpg";
import p2 from "../assets/product-2.jpg";
import p3 from "../assets/product-3.jpg";
import p4 from "../assets/product-4.jpg";
import p5 from "../assets/product-5.jpg";
import p6 from "../assets/product-6.jpg";
import p7 from "../assets/product-7.jpg";
import p8 from "../assets/product-8.jpg";
import p9 from "../assets/product-9.jpg";
import p10 from "../assets/product-10.jpg";


const specialProducts = [
  { id: 1, image: p1, name: "Classic Jacket", price: "$120", rating: 4 },
  { id: 2, image: p2, name: "Casual Shirt", price: "$80", rating: 5 },
  { id: 3, image: p3, name: "Slim Jeans", price: "$95", rating: 4 },
  { id: 4, image: p4, name: "Winter Hoodie", price: "$110", rating: 5 },
  { id: 5, image: p5, name: "Formal Blazer", price: "$150", rating: 4 },
  { id: 6, image: p6, name: "Elegant Dress", price: "$140", rating: 5 },
  { id: 7, image: p7, name: "Stylish Top", price: "$70", rating: 4 },
  { id: 8, image: p8, name: "Long Coat", price: "$160", rating: 5 },
{ id: 9, image: p9, name: "Chic Skirt", price: "$85", rating: 4 },
{ id: 10, image: p10, name: "Casual Jeans", price: "$90", rating: 4 },
];

export default function SpecialProducts() {
  return (
    <section className="bg-elysian-cream py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-elysian-burgundy text-center">
          Special Products
        </h2>
        <p className="text-elysian-burgundy/90 mt-4 text-center max-w-2xl mx-auto">
          Handpicked exclusive products just for you. Premium quality and limited stock!
        </p>

        {/* Products Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {specialProducts.slice(0, 10).map((product) => (
            <div
              key={product.id}
              className="group relative border border-elysian-burgundy/20 rounded-2xl overflow-hidden bg-elysian-cream transition hover:shadow-lg hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
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

              {/* Product Info */}
              <div className="p-4 text-center">
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
                <h3 className="text-elysian-burgundy font-medium">{product.name}</h3>
                <p className="mt-1 font-semibold text-elysian-burgundy">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="px-10 py-3 bg-elysian-burgundy text-elysian-cream rounded-full font-medium hover:bg-elysian-pink hover:text-elysian-burgundy transition">
            Shop All Specials
          </button>
        </div>

      </div>
    </section>
  );
}
