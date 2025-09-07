import React from 'react';
    import Header from '../components/Header';
    import Hero from '../components/Hero';
    import Features from '../components/Features';
    import Portfolio from '../components/Portfolio';
    import Testimonials from '../components/Testimonials';
    import Pricing from '../components/Pricing';
    import Contact from '../components/Contact';
    import Footer from '../components/Footer';

    export default function Home() {
      return (
        <div className="min-h-screen">
          <Header />
          <main>
            <Hero />
            <Features />
            <Portfolio />
            <Testimonials />
            <Pricing />
            <Contact />
          </main>
          <Footer />
        </div>
      );
    }