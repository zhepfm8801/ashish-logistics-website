import React from 'react';
import { companyConfig } from '../config/company';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <div className="animate-slide-in">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
              alt="Car being transported on carrier"
              className="rounded-lg shadow-xl w-full object-cover h-96 hover:shadow-2xl transition-shadow"
            />
          </div>

          {/* Right: Content */}
          <div className="animate-fade-in">
            <SectionHeading
              label="ABOUT ASHISH LOGISTICS"
              title={companyConfig.subTagline}
              centered={false}
            />

            <p className="text-lg text-muted mb-6 leading-relaxed">
              At {companyConfig.name}, we understand that your vehicle is more than just transportation. That's why we focus on providing a smooth, secure and dependable car transportation experience from pickup to delivery.
            </p>

            <p className="text-lg text-muted mb-8 leading-relaxed">
              Our goal is simple — make vehicle transportation convenient, transparent and stress-free for every customer.
            </p>

            <Button
              variant="primary"
              size="lg"
              onClick={() => alert('Learn More - Coming Soon')}
            >
              Learn More About Us
            </Button>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center p-4 bg-light rounded-lg hover:bg-accent/10 transition-colors">
                <p className="text-3xl font-bold text-accent mb-2">
                  {companyConfig.stats.yearsExperience}
                </p>
                <p className="text-sm font-semibold text-text">Years of Experience</p>
              </div>
              <div className="text-center p-4 bg-light rounded-lg hover:bg-accent/10 transition-colors">
                <p className="text-3xl font-bold text-accent mb-2">
                  {companyConfig.stats.vehiclesTransported}
                </p>
                <p className="text-sm font-semibold text-text">Vehicles Transported</p>
              </div>
              <div className="text-center p-4 bg-light rounded-lg hover:bg-accent/10 transition-colors">
                <p className="text-3xl font-bold text-accent mb-2">
                  {companyConfig.stats.locationsServed}
                </p>
                <p className="text-sm font-semibold text-text">Locations Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
