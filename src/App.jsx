import React from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import NewArrivals from "./components/NewArrivals";
import StylishSection from "./components/StylishSection";
import AttractionSection from "./components/AttractionSection";
import SpecialProducts from "./components/SpecialProducts";
import ContentSection from "./components/ContentSection";
import NewCollection from "./components/NewCollection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Header />

      {/* PAGE CONTENT OFFSET FOR FIXED HEADER */}
      <main className="pt-[70px] md:pt-[90px]">
        <HeroSlider />
        <NewArrivals />
        <StylishSection />
        <AttractionSection />
        <SpecialProducts />
        <ContentSection />
        <NewCollection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;
