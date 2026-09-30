import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    deliveryLocation: '',
    vehicleMake: '',
    vehicleType: 'Sedan',
    transportType: 'Open Transport',
    pickupDate: '',
    fullName: '',
    phone: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const vehicleTypes = ['Sedan', 'SUV', 'Pickup Truck', 'Luxury Car', 'Classic Car', 'Exotic Car', 'Electric Vehicle', 'Other'];
  const transportTypes = ['Open Transport', 'Enclosed Transport'];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.pickupLocation.trim()) newErrors.pickupLocation = 'Required';
    if (!formData.deliveryLocation.trim()) newErrors.deliveryLocation = 'Required';
    if (!formData.vehicleMake.trim()) newErrors.vehicleMake = 'Required';
    if (!formData.fullName.trim()) newErrors.fullName = 'Required';
    if (!formData.phone.trim()) newErrors.phone = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({
        pickupLocation: '',
        deliveryLocation: '',
        vehicleMake: '',
        vehicleType: 'Sedan',
        transportType: 'Open Transport',
        pickupDate: '',
        fullName: '',
        phone: '',
        email: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="quote-form" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Floating Form Card */}
        <div className="max-w-2xl mx-auto -mt-32 relative z-20 mb-12">
          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 border-t-4 border-accent">
            <SectionHeading
              title="Get Your Free Car Transport Quote"
              subtitle="Tell us about your vehicle and route, and we'll help you with your transportation requirements."
              centered
            />

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-slide-down">
                ✓ Thank you! Your quote request has been received. We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Pickup Location */}
                <div>
                  <label htmlFor="pickupLocation" className="block text-sm font-semibold text-primary-900 mb-2">
                    Pickup Location <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="Enter pickup city/address"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.pickupLocation ? 'border-red-500' : 'border-light'
                    }`}
                    aria-invalid={!!errors.pickupLocation}
                    aria-describedby={errors.pickupLocation ? 'pickupLocation-error' : undefined}
                  />
                  {errors.pickupLocation && (
                    <p id="pickupLocation-error" className="text-red-500 text-sm mt-1">{errors.pickupLocation}</p>
                  )}
                </div>

                {/* Delivery Location */}
                <div>
                  <label htmlFor="deliveryLocation" className="block text-sm font-semibold text-primary-900 mb-2">
                    Delivery Location <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="deliveryLocation"
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleChange}
                    placeholder="Enter delivery city/address"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.deliveryLocation ? 'border-red-500' : 'border-light'
                    }`}
                    aria-invalid={!!errors.deliveryLocation}
                    aria-describedby={errors.deliveryLocation ? 'deliveryLocation-error' : undefined}
                  />
                  {errors.deliveryLocation && (
                    <p id="deliveryLocation-error" className="text-red-500 text-sm mt-1">{errors.deliveryLocation}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Vehicle Make & Model */}
                <div>
                  <label htmlFor="vehicleMake" className="block text-sm font-semibold text-primary-900 mb-2">
                    Vehicle Make & Model <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="vehicleMake"
                    name="vehicleMake"
                    value={formData.vehicleMake}
                    onChange={handleChange}
                    placeholder="e.g., Toyota Camry"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.vehicleMake ? 'border-red-500' : 'border-light'
                    }`}
                    aria-invalid={!!errors.vehicleMake}
                    aria-describedby={errors.vehicleMake ? 'vehicleMake-error' : undefined}
                  />
                  {errors.vehicleMake && (
                    <p id="vehicleMake-error" className="text-red-500 text-sm mt-1">{errors.vehicleMake}</p>
                  )}
                </div>

                {/* Vehicle Type */}
                <div>
                  <label htmlFor="vehicleType" className="block text-sm font-semibold text-primary-900 mb-2">
                    Vehicle Type
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {vehicleTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Transport Type */}
                <div>
                  <label htmlFor="transportType" className="block text-sm font-semibold text-primary-900 mb-2">
                    Transport Type
                  </label>
                  <select
                    id="transportType"
                    name="transportType"
                    value={formData.transportType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {transportTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Pickup Date */}
                <div>
                  <label htmlFor="pickupDate" className="block text-sm font-semibold text-primary-900 mb-2">
                    Preferred Pickup Date
                  </label>
                  <input
                    type="date"
                    id="pickupDate"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-primary-900 mb-2">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.fullName ? 'border-red-500' : 'border-light'
                    }`}
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary-900 mb-2">
                    Phone Number <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.phone ? 'border-red-500' : 'border-light'
                    }`}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                    errors.email ? 'border-red-500' : 'border-light'
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
              >
                Get My Free Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
