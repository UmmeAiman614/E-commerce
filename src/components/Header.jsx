import React, { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import logo from "../assets/SMM-logo.png";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "New Arrivals", href: "#" },
    { name: "Collections", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="bg-elysian-cream shadow-sm">
      {/* Top Header */}
      <div className="border-b border-elysian-burgundy/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo - ALWAYS LEFT */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="Elysian Wear Brand"
                className="h-40 w-auto"
              />
            </div>

            {/* Desktop Search & Cart */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-80 px-4 py-2 pr-10 rounded-full border-2 border-elysian-burgundy/20"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-elysian-burgundy" />
              </div>

              <button className="relative p-2">
                <ShoppingCart className="w-6 h-6 text-elysian-burgundy" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-elysian-burgundy text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-elysian-burgundy" />
              ) : (
                <Menu className="w-6 h-6 text-elysian-burgundy" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <nav className="flex justify-center space-x-8 h-14 items-center">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-elysian-burgundy font-medium hover:text-elysian-pink transition relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-elysian-burgundy group-hover:w-full transition-all"></span>
            </a>
          ))}
        </nav>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-elysian-burgundy/10 bg-elysian-cream">
          <div className="px-4 py-4 space-y-4">

            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pr-10 rounded-full border-2 border-elysian-burgundy/20"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-elysian-burgundy" />
            </div>

            {/* Mobile Cart */}
            <button className="flex items-center justify-between w-full py-2 text-elysian-burgundy font-medium">
              <span>Cart</span>
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-elysian-burgundy text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>

            {/* Mobile Links */}
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-elysian-burgundy py-2 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
