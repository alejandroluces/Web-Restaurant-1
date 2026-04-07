import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/4253320/pexels-photo-4253320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920" 
          alt="Mare Nostrum Restaurant" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-primary-900/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">
            {t('home.hero.title')}
          </h1>
          
          <h2 className="text-xl md:text-2xl font-body mb-8 text-gray-200">
            {t('home.hero.subtitle')}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/menu" 
              className="bg-accent-500 text-white px-8 py-3 rounded-md font-medium hover:bg-accent-600 transition-colors shadow-lg"
            >
              {t('home.hero.cta')}
            </Link>
            
            <Link 
              to="/contact#reservations" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              {t('home.hero.reserveButton')}
            </Link>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <button 
            onClick={scrollToContent}
            className="text-white animate-bounce p-2 focus:outline-none"
            aria-label="Scroll Down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;