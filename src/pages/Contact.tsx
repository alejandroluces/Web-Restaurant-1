import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, we would submit this to an API
    console.log('Form submitted', formData);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 md:h-80">
        <img 
          src="https://images.pexels.com/photos/3872370/pexels-photo-3872370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
          alt="Contact Mare Nostrum" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-900/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
              {t('contact.title')}
            </h1>
            <p className="text-xl font-light">{t('contact.subtitle')}</p>
          </div>
        </div>
      </div>
      
      {/* Contact Info */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Address */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-primary-100 text-primary-600 rounded-full p-3 mb-4">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">
              {t('contact.address.title')}
            </h3>
            <p className="text-gray-700">{t('contact.address.street')}</p>
            <p className="text-gray-700">{t('contact.address.city')}, {t('contact.address.postal')}</p>
            <p className="text-gray-700">{t('contact.address.country')}</p>
          </div>
          
          {/* Opening Hours */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-primary-100 text-primary-600 rounded-full p-3 mb-4">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">
              {t('contact.hours.title')}
            </h3>
            <p className="text-gray-700 mb-2">{t('contact.hours.weekdays')}</p>
            <p className="text-gray-700">{t('contact.hours.weekends')}</p>
          </div>
          
          {/* Contact Details */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-primary-100 text-primary-600 rounded-full p-3 mb-4">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">
              {t('contact.contactDetails.title')}
            </h3>
            <p className="text-gray-700 mb-2">{t('contact.contactDetails.phone')}</p>
            <p className="text-gray-700">{t('contact.contactDetails.email')}</p>
          </div>
        </div>
        
        {/* Location Map */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-center">
            {t('contact.locationTitle')}
          </h2>
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden shadow-md">
            {/* In a real implementation, this would be a Google Maps or similar component */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <MapPin size={48} className="text-primary-500" />
              <span className="ml-2 text-gray-600">Map would be displayed here</span>
            </div>
          </div>
        </div>
        
        {/* Reservation Form */}
        <div id="reservations" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-semibold mb-2 text-center">
            {t('contact.reservations.title')}
          </h2>
          <p className="text-gray-700 mb-8 text-center">
            {t('contact.reservations.description')}
          </p>
          
          {submitted ? (
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
              <p className="text-green-700">
                {t('contact.reservations.successMessage')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    {t('contact.reservations.nameLabel')}*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    {t('contact.reservations.emailLabel')}*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
                  />
                </div>
                
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    {t('contact.reservations.phoneLabel')}*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
                  />
                </div>
                
                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                    {t('contact.reservations.dateLabel')}*
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
                  />
                </div>
                
                {/* Time */}
                <div>
                  <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                    {t('contact.reservations.timeLabel')}*
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
                  />
                </div>
                
                {/* Guests */}
                <div>
                  <label htmlFor="guests" className="block text-gray-700 font-medium mb-2">
                    {t('contact.reservations.guestsLabel')}*
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
                  >
                    <option value="">Select</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                    <option value="more">More than 10</option>
                  </select>
                </div>
              </div>
              
              {/* Special Requests */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  {t('contact.reservations.messageLabel')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary-500 text-white px-8 py-3 rounded-md font-medium hover:bg-primary-600 transition-colors shadow-md"
                >
                  {t('contact.reservations.submitButton')}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;