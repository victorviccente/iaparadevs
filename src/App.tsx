import React from 'react';
import Instructor from './components/Instructor';
import Topics from './components/Topics';
import Benefits from './components/Benefits';
import CourseStructure from './components/CourseStructure';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-black">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,119,242,0.2)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,119,242,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,119,242,0.1)_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>
      </div>

      <div className="relative text-white font-sans">
        <Navbar />
        <Hero />
        <Instructor />
        <Topics />
        <Benefits />
        <CourseStructure />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default App;