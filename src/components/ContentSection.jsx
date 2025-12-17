import React from "react";
import imgContent1 from "../assets/img-content-1.jpg";
import { Check } from "lucide-react";

export default function ContentSection() {
  const points = [
    "Exclusive membership perks",
    "Early access to new arrivals",
    "Special discounts for loyal customers",
    "Premium quality guaranteed",
  ];

  return (
    <section className="bg-elysian-cream py-20">
      <div className="max-w-7xl mx-auto px-4 lg:flex lg:items-center lg:gap-12">

        {/* Left: Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={imgContent1}
            alt="Content Section"
            className="rounded-2xl border-2 border-elysian-burgundy/20 w-full object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-elysian-burgundy mb-6">
            Join Our Exclusive Community
          </h2>
          <p className="text-elysian-burgundy/90 mb-6 text-lg">
            Become part of our premium fashion circle and enjoy benefits only available to members.
          </p>

          {/* Points List */}
          <ul className="space-y-4 mb-8">
            {points.map((point, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-elysian-pink text-elysian-cream rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-elysian-burgundy font-medium">{point}</span>
              </li>
            ))}
          </ul>

          {/* Join Us Button */}
          <button className="px-10 py-3 bg-elysian-burgundy text-elysian-cream rounded-full font-medium hover:bg-elysian-pink hover:text-elysian-burgundy transition w-max">
            Join Us
          </button>
        </div>

      </div>
    </section>
  );
}
