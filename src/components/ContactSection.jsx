import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-elysian-cream">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-elysian-burgundy text-center mb-16">
          Get in Touch
        </h2>

        {/* Contact Card */}
        <div className="lg:flex bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Left: Contact Info */}
          <div className="lg:w-1/2 bg-elysian-burgundy text-elysian-cream p-12 flex flex-col justify-center gap-8">
            <div className="flex items-center gap-4">
              <span className="bg-elysian-cream text-elysian-burgundy p-4 rounded-full shadow-md">
                <MapPin className="w-6 h-6" />
              </span>
              <div>
                <h4 className="font-semibold text-xl mb-1">Our Address</h4>
                <p className="text-elysian-cream/90">123 Fashion Street, Lahore, Pakistan</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="bg-elysian-cream text-elysian-burgundy p-4 rounded-full shadow-md">
                <Phone className="w-6 h-6" />
              </span>
              <div>
                <h4 className="font-semibold text-xl mb-1">Call Us</h4>
                <p className="text-elysian-cream/90">+92 300 1234567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="bg-elysian-cream text-elysian-burgundy p-4 rounded-full shadow-md">
                <Mail className="w-6 h-6" />
              </span>
              <div>
                <h4 className="font-semibold text-xl mb-1">Email</h4>
                <p className="text-elysian-cream/90">contact@elysianwear.com</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:w-1/2 p-12 bg-elysian-cream flex flex-col justify-center gap-6">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded-xl border-2 border-elysian-burgundy/30 focus:outline-none focus:border-elysian-burgundy transition shadow-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-3 rounded-xl border-2 border-elysian-burgundy/30 focus:outline-none focus:border-elysian-burgundy transition shadow-sm"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-3 rounded-xl border-2 border-elysian-burgundy/30 focus:outline-none focus:border-elysian-burgundy transition shadow-sm"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-5 py-3 rounded-xl border-2 border-elysian-burgundy/30 focus:outline-none focus:border-elysian-burgundy transition shadow-sm resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-max px-8 py-3 bg-elysian-burgundy text-elysian-cream rounded-full font-semibold hover:bg-elysian-pink hover:text-elysian-burgundy transition shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
