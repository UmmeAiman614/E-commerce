import React from "react";
import { Truck, Shield, RefreshCw, Gift } from "lucide-react";

export default function AttractionSection() {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Get your products delivered quickly and safely to your doorstep.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Payment",
      description: "Your transactions are 100% secure with our encrypted payment system.",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Easy Returns",
      description: "Hassle-free returns within 30 days for all products.",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Exclusive Offers",
      description: "Enjoy special deals and discounts for our loyal customers.",
    },
  ];

  return (
    <section className="bg-elysian-cream py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-elysian-burgundy">
          Why Shop With Us
        </h2>
        <p className="text-elysian-burgundy/90 mt-4 max-w-2xl mx-auto text-lg">
          We provide premium quality, exceptional service, and a seamless shopping experience.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-elysian-cream border border-elysian-burgundy/20 rounded-2xl p-6 transition hover:shadow-lg hover:bg-elysian-burgundy/10"
            >
              <div className="p-4 bg-elysian-burgundy/10 rounded-full mb-4 text-elysian-burgundy">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-elysian-burgundy mb-2">
                {feature.title}
              </h3>
              <p className="text-elysian-burgundy/80 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
