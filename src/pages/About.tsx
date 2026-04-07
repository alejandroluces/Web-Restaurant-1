import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 md:h-80">
        <img 
          src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
          alt="Mare Nostrum About Us" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-900/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
              {t('about.title')}
            </h1>
            <p className="text-xl font-light">{t('about.subtitle')}</p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-heading font-semibold mb-6 text-primary-700">
              {t('about.history.title')}
            </h2>
            <div className="prose prose-lg">
              {t('about.history.description').split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Restaurant history" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Philosophy Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="md:order-2">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-primary-700">
              {t('about.philosophy.title')}
            </h2>
            <div className="prose prose-lg">
              {t('about.philosophy.description').split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="md:order-1 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Our philosophy" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-heading font-semibold mb-6 text-primary-700">
              {t('about.team.title')}
            </h2>
            <div className="prose prose-lg">
              {t('about.team.description').split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/3217156/pexels-photo-3217156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Our team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;