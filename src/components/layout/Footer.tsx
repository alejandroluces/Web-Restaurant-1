import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo color="white" className="h-10 w-auto" />
              <h3 className="ml-2 text-xl font-heading font-bold">Mare Nostrum</h3>
            </div>
            <p className="text-sm text-gray-300">{t('footer.address')}</p>
            <p className="text-sm text-gray-300">{t('footer.phone')}</p>
            <p className="text-sm text-gray-300">{t('footer.email')}</p>
            
            {/* Social Media */}
            <div>
              <h4 className="text-sm font-medium mb-2">{t('footer.socialMedia')}</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-500 transition-colors">
                  {t('footer.links.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-500 transition-colors">
                  {t('footer.links.about')}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-accent-500 transition-colors">
                  {t('footer.links.menu')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-500 transition-colors">
                  {t('footer.links.contact')}
                </Link>
              </li>
              <li>
                <Link to="/contact#reservations" className="text-gray-300 hover:text-accent-500 transition-colors">
                  {t('footer.links.reservations')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">{t('contact.hours.title')}</h3>
            <p className="text-gray-300 mb-2">{t('contact.hours.weekdays')}</p>
            <p className="text-gray-300">{t('contact.hours.weekends')}</p>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">{t('footer.newsletter.title')}</h3>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  className="px-4 py-2 w-full rounded-l-md text-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-accent-500 px-4 py-2 rounded-r-md hover:bg-accent-600 transition-colors"
                >
                  <Mail size={20} />
                </button>
              </div>
              <p className="text-xs text-gray-400">
                * We'll never share your email with anyone else.
              </p>
            </form>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            {t('footer.copyright').replace('2025', currentYear.toString())}
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-accent-500 transition-colors">
              {t('footer.links.privacy')}
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-accent-500 transition-colors">
              {t('footer.links.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;