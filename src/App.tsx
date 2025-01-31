import React from 'react';
import Header from './components/Header';
import Instructor from './components/Instructor';
import Topics from './components/Topics';
import Benefits from './components/Benefits';
import CourseStructure from './components/CourseStructure';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-black text-white font-sans">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Instructor />
        <Topics />
        <Benefits />
        <CourseStructure />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;