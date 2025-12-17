import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "../assets/image-1.jpeg";
import image2 from "../assets/image-2.webp";
import image3 from "../assets/image-3.jpg";

const slides = [
  {
    image: image1,
    title: "New Season Collection",
    subtitle: "Redefine your style with premium fashion",
    cta: "Shop Now",
  },
  {
    image: image2,
    title: "Elegance Meets Comfort",
    subtitle: "Designed for modern lifestyle",
    cta: "Explore",
  },
  {
    image: image3,
    title: "Exclusive Arrivals",
    subtitle: "Limited stock. Premium quality.",
    cta: "View Collection",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden bg-elysian-cream">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay (using elysian-burgundy tone) */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-elysian-cream max-w-xl">
                {slide.title}
              </h1>

              <p className="mt-4 text-lg text-elysian-cream/90 max-w-lg">
                {slide.subtitle}
              </p>

              <button className="mt-8 px-8 py-3 bg-elysian-pink text-elysian-burgundy rounded-full font-medium hover:bg-elysian-cream transition">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-elysian-burgundy/70 text-elysian-cream p-3 rounded-full hover:bg-elysian-burgundy">
        <ChevronLeft />
      </button>

      <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-elysian-burgundy/70 text-elysian-cream p-3 rounded-full hover:bg-elysian-burgundy">
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current
                ? "bg-elysian-pink"
                : "bg-elysian-cream/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
