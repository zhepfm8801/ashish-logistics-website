import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react';
import { companyConfig } from '../config/company';
import Button from './Button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Door-to-Door Transport',
    'Open Transport',
    'Enclosed Transport',
    'Long-Distance Transport',
    'Interstate Transport',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <span className="text-primary-900 font-black text-sm">AL</span>
              </div>
              {companyConfig.name}
            </h3>
            <p className="text-gray-300 mb-4">{companyConfig.description}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-accent transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href={`tel:${companyConfig.phone}`}
                className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
              >
                <Phone size={18} />
                <span>{companyConfig.phone}</span>
              </a>
              <a
                href={`mailto:${companyConfig.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
              >
                <Mail size={18} />
                <span>{companyConfig.email}</span>
              </a>
              <p className="flex items-start gap-2 text-gray-300">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>{companyConfig.address}</span>
              </p>
              <a
                href={`https://wa.me/${companyConfig.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-800 pt-8 mb-8">
          <div className="flex justify-center gap-4 mb-6">
            <a
              href={companyConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary-800 hover:bg-accent rounded-lg transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href={companyConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary-800 hover:bg-accent rounded-lg transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={companyConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary-800 hover:bg-accent rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-800 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-4">
            © {currentYear} {companyConfig.name}. All Rights Reserved.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#terms" className="hover:text-accent transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
