import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import NewArrivals from './components/NewArrivals';
import StylishSection from './components/StylishSection';
import AttractionSection from './components/AttractionSection';
import SpecialProducts from './components/SpecialProducts';
import ContentSection from './components/ContentSection';
import NewCollection from './components/NewCollection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header />
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
      {/* Rest of your content */}
    </div>
  );
}

export default App;