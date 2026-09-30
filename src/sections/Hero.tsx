import React from 'react';
import { companyConfig } from '../config/company';
import Button from './Button';
import SectionHeading from './SectionHeading';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1605559424843-9e4c3ca4b7f1?w=1920&h=1080&fit=crop)',
          backgroundColor: '#0B1F33',
          backgroundBlendMode: 'overlay',
        }}
        role="img"
        aria-label="Car carrier transportation background"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/80 to-primary-900/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Label */}
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 animate-fade-in">
          ✓ Trusted Vehicle Transportation
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading text-white mb-6 leading-tight animate-slide-up">
          Safe, Reliable &
          <span className="text-accent block">Hassle-Free</span>
          Car Transportation
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          From pickup to delivery, {companyConfig.name} takes care of your vehicle with reliable transportation solutions designed around your convenience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button
            size="lg"
            variant="primary"
            onClick={() => scrollToSection('#quote-form')}
          >
            Get a Free Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('#contact')}
          >
            Call Us Now
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            '✓ Safe Vehicle Handling',
            '✓ Door-to-Door Delivery',
            '✓ Experienced Drivers',
            '✓ Reliable Transportation',
          ].map((indicator, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-white text-sm font-medium border border-white/20">
              {indicator}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="text-white/60 text-center">
          <p className="text-sm mb-2">Scroll to explore</p>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
