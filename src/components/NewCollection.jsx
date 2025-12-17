import React, { useState } from "react";
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

const collectionData = {
  Men: [p1, p2, p3, p4],
  Women: [p5, p6, p7, p8],
  Accessories: [p1, p3, p5, p7],
};

export default function NewCollection() {
  const [activeTabRow1, setActiveTabRow1] = useState("Men");
  const [activeTabRow2, setActiveTabRow2] = useState("Women");

  const tabs = ["Men", "Women", "Accessories"];

  return (
    <section id="collections" className="py-20 bg-elysian-cream">
      <div className="max-w-7xl mx-auto px-4 space-y-16">

        {/* Row 1: Left text, Right images */}
        <div className="lg:flex lg:items-stretch gap-6">
          {/* Left Text */}
          <div className="lg:w-2/5 bg-elysian-burgundy text-elysian-cream flex flex-col justify-center p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/src/assets/pattern.png')] bg-repeat"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">New Men Collection</h2>
            <p className="text-elysian-cream/90 text-lg relative z-10">
              Explore the latest styles designed for the modern man. Premium fabrics and elegant designs for every occasion.
            </p>
          </div>

          {/* Right Images */}
          <div className="lg:w-3/5">
            {/* Tabs */}
            <div className="flex border-b border-elysian-burgundy mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTabRow1(tab)}
                  className={`flex-1 py-2 text-center font-medium transition ${
                    activeTabRow1 === tab
                      ? "border-b-4 border-elysian-burgundy text-elysian-burgundy"
                      : "text-elysian-burgundy/70"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Images with hover icons */}
            <div className="grid grid-cols-2 gap-2">
              {collectionData[activeTabRow1].map((img, index) => (
                <div key={index} className="relative group rounded-xl overflow-hidden">
                  <img src={img} alt={`Collection ${index + 1}`} className="w-full h-48 object-cover" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-elysian-burgundy/60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
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
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Left images, Right text */}
        <div className="lg:flex lg:items-stretch gap-6 flex-col-reverse lg:flex-row">
          {/* Left Images */}
          <div className="lg:w-3/5">
            {/* Tabs */}
            <div className="flex border-b border-elysian-burgundy mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTabRow2(tab)}
                  className={`flex-1 py-2 text-center font-medium transition ${
                    activeTabRow2 === tab
                      ? "border-b-4 border-elysian-burgundy text-elysian-burgundy"
                      : "text-elysian-burgundy/70"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Images with hover icons */}
            <div className="grid grid-cols-2 gap-2">
              {collectionData[activeTabRow2].map((img, index) => (
                <div key={index} className="relative group rounded-xl overflow-hidden">
                  <img src={img} alt={`Collection ${index + 1}`} className="w-full h-48 object-cover" />

                  <div className="absolute inset-0 bg-elysian-burgundy/60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
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
              ))}
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:w-2/5 bg-elysian-burgundy text-elysian-cream flex flex-col justify-center p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/src/assets/pattern.png')] bg-repeat"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">New Women Collection</h2>
            <p className="text-elysian-cream/90 text-lg relative z-10">
              Discover the elegance of our latest women's collection. Chic designs with unmatched comfort for all occasions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
