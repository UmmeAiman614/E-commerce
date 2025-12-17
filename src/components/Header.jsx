import React, { useState, useEffect } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import logo from "../assets/SMM-logo.png";

export default function Header() {
  const [cartCount] = useState(2);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopHeader, setShowTopHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "New Arrivals", href: "#new-arrivals" },
    { name: "Collections", href: "#collections" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowTopHeader(window.scrollY < lastScrollY || window.scrollY < 10);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* TOP HEADER: LOGO + SEARCH + CART */}
      <div
        className={`bg-elysian-cream border-b border-elysian-burgundy/10 transition-all duration-300 overflow-hidden ${
          showTopHeader ? "max-h-40" : "max-h-14"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <img
              src={logo}
              alt="Logo"
              className="h-20 sm:h-24 lg:h-28 xl:h-32 w-auto"
            />

            {/* Desktop Search + Cart */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative w-full max-w-[320px]">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 pr-10 rounded-full border-2 border-elysian-burgundy/30 text-elysian-burgundy placeholder-elysian-burgundy"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-elysian-burgundy" />
              </div>

              <button className="relative">
                <ShoppingCart className="w-6 h-6 text-elysian-burgundy" />
                <span className="absolute -top-1 -right-1 bg-elysian-burgundy text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              </button>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="text-elysian-burgundy" /> : <Menu className="text-elysian-burgundy" />}
            </button>
          </div>
        </div>
      </div>

      {/* NAV LINKS (Desktop only) */}
      <div
        className={`hidden md:flex border-b border-elysian-burgundy bg-elysian-cream transition-all ${
          showTopHeader ? "relative" : "fixed top-0 left-0 w-full"
        } z-50`}
      >
        <nav className="flex items-center justify-center space-x-8 h-14 w-full">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="font-medium text-base tracking-wide text-elysian-burgundy hover:text-elysian-pink transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-elysian-cream shadow-lg w-full overflow-x-hidden z-40">
          <div className="px-4 py-4 space-y-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pr-10 rounded-full border-2 border-elysian-burgundy/30 text-elysian-burgundy placeholder-elysian-burgundy"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-elysian-burgundy" />
            </div>

            {/* Cart */}
            <button className="flex items-center justify-between w-full font-medium text-elysian-burgundy">
              Cart
              <span className="bg-elysian-burgundy text-white px-2 rounded">
                {cartCount}
              </span>
            </button>

            {/* Links */}
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="block py-2 font-medium text-elysian-burgundy hover:text-elysian-pink"
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
