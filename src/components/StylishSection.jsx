import React from "react";
import stylish1 from "../assets/stylish-1.jpg";
import stylish2 from "../assets/stylish-2.jpg";

export default function StylishSection() {
  return (
    <section className="bg-elysian-cream py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side: Text -> Image */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-elysian-burgundy">
            Elevate Your Style
          </h2>
          <p className="text-elysian-burgundy/90 text-lg">
            Discover the perfect combination of elegance and comfort. Our
            latest collection redefines fashion with premium quality and
            unique designs.
          </p>
          <img
            src={stylish1}
            alt="Stylish Collection"
            className="rounded-2xl border-2 border-elysian-burgundy/20 mt-4"
          />
        </div>

        {/* Right Side: Image -> Text */}
        <div className="flex flex-col gap-6">
          <img
            src={stylish2}
            alt="Modern Fashion"
            className="rounded-2xl border-2 border-elysian-burgundy/20"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-elysian-burgundy mt-4">
            Modern Fashion Trends
          </h2>
          <p className="text-elysian-burgundy/90 text-lg">
            Step into the world of contemporary fashion. Our curated designs
            bring you the latest trends while keeping the timeless elegance.
          </p>
        </div>

      </div>
    </section>
  );
}
