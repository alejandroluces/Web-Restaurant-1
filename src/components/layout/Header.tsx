import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Anchor, Menu, X, Globe } from 'lucide-react';
import { changeLanguage } from '../../i18n';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  // Update header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLanguageMenuOpen(false);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary-500 text-white shadow-lg py-2' 
          : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo color={isScrolled ? 'white' : 'white'} className="h-12 w-auto" />
          <span className="ml-2 text-xl font-heading font-bold">Mare Nostrum</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-body font-medium hover:text-accent-400 transition-colors">
            {t('navigation.home')}
          </Link>
          <Link to="/about" className="font-body font-medium hover:text-accent-400 transition-colors">
            {t('navigation.about')}
          </Link>
          <Link to="/menu" className="font-body font-medium hover:text-accent-400 transition-colors">
            {t('navigation.menu')}
          </Link>
          <Link to="/contact" className="font-body font-medium hover:text-accent-400 transition-colors">
            {t('navigation.contact')}
          </Link>
          
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={toggleLanguageMenu} 
              className="flex items-center text-white focus:outline-none"
            >
              <Globe size={20} className="mr-1" />
              <span className="uppercase">{i18n.language.substring(0, 2)}</span>
            </button>
            
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-xl z-20 animate-fade-in">
                <button
                  onClick={() => handleLanguageChange('es')}
                  className={`block px-4 py-2 text-sm w-full text-left ${
                    i18n.language === 'es' ? 'bg-primary-50 text-primary-500' : 'text-gray-800'
                  } hover:bg-primary-50 hover:text-primary-500`}
                >
                  Español
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`block px-4 py-2 text-sm w-full text-left ${
                    i18n.language === 'en' ? 'bg-primary-50 text-primary-500' : 'text-gray-800'
                  } hover:bg-primary-50 hover:text-primary-500`}
                >
                  English
                </button>
              </div>
            )}
          </div>
          
          <Link 
            to="/contact#reservations" 
            className="bg-accent-500 text-white px-6 py-2 rounded-md hover:bg-accent-600 transition-colors shadow-md"
          >
            {t('navigation.reservations')}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleLanguageMenu} 
            className="text-white p-2 focus:outline-none mr-2"
            aria-label="Language Menu"
          >
            <Globe size={24} />
          </button>
          
          <button 
            onClick={toggleMobileMenu} 
            className="text-white p-2 focus:outline-none"
            aria-label="Mobile Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-500 text-white animate-slide-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="py-2 font-body font-medium">
                {t('navigation.home')}
              </Link>
              <Link to="/about" className="py-2 font-body font-medium">
                {t('navigation.about')}
              </Link>
              <Link to="/menu" className="py-2 font-body font-medium">
                {t('navigation.menu')}
              </Link>
              <Link to="/contact" className="py-2 font-body font-medium">
                {t('navigation.contact')}
              </Link>
              <Link 
                to="/contact#reservations" 
                className="bg-accent-500 text-white px-6 py-2 rounded-md text-center"
              >
                {t('navigation.reservations')}
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Language Menu */}
      {isLanguageMenuOpen && !isMobileMenuOpen && (
        <div className="md:hidden bg-primary-500 text-white animate-slide-in">
          <div className="container mx-auto px-4 py-2">
            <button
              onClick={() => handleLanguageChange('es')}
              className={`block w-full text-left py-3 px-4 ${
                i18n.language === 'es' ? 'bg-primary-600' : ''
              }`}
            >
              Español
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`block w-full text-left py-3 px-4 ${
                i18n.language === 'en' ? 'bg-primary-600' : ''
              }`}
            >
              English
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;