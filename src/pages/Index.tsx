
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import PaymentMethods from '@/components/PaymentMethods';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <FeaturedProducts />
        <Testimonials />
        <Newsletter />
        <PaymentMethods />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
