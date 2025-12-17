import React from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-elysian-burgundy text-elysian-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 space-y-16">

        {/* Newsletter Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6 text-elysian-cream/80">
            Get the latest updates on new arrivals, special offers and more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 rounded-full border-2 border-elysian-cream focus:outline-none focus:border-elysian-pink transition text-elysian-burgundy"
            />
            <button className="px-6 py-3 bg-elysian-pink text-elysian-burgundy font-semibold rounded-full hover:bg-elysian-cream hover:text-elysian-burgundy transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center sm:text-left">
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-elysian-cream/80">
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">New Arrivals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-elysian-cream/80">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-elysian-cream/80">
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping & Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center sm:justify-start gap-4 text-elysian-cream">
              <a href="#" className="hover:text-elysian-pink transition"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-elysian-pink transition"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-elysian-pink transition"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:text-elysian-pink transition"><Linkedin className="w-6 h-6" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-elysian-cream/30 pt-6 text-center text-sm text-elysian-cream/80">
          © 2025 Elysian Wear Brand. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
