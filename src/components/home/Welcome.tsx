import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shell, UtensilsCrossed, Anchor, GlassWater } from 'lucide-react';

const Welcome: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main welcome section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-heading font-semibold mb-4">
              {t('home.welcome.title')}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t('home.welcome.description')}
            </p>
            <div className="bg-sand-100 border-l-4 border-sand-400 p-4 rounded-r-md">
              <h3 className="font-heading font-medium text-xl mb-2">
                {t('home.welcome.highlightTitle')}
              </h3>
              <p className="text-gray-600 italic">
                {t('home.welcome.highlightDescription')}
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/2869759/pexels-photo-2869759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Fresh Mediterranean cuisine" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Features */}
        <div>
          <h2 className="text-3xl font-heading font-semibold text-center mb-12">
            {t('home.features.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 text-primary-600 rounded-full p-3">
                  <Shell size={32} />
                </div>
              </div>
              <h3 className="font-heading font-medium text-xl text-center mb-2">
                {t('home.features.freshSeafood.title')}
              </h3>
              <p className="text-gray-600 text-center">
                {t('home.features.freshSeafood.description')}
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 text-primary-600 rounded-full p-3">
                  <UtensilsCrossed size={32} />
                </div>
              </div>
              <h3 className="font-heading font-medium text-xl text-center mb-2">
                {t('home.features.mediterraneanCuisine.title')}
              </h3>
              <p className="text-gray-600 text-center">
                {t('home.features.mediterraneanCuisine.description')}
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 text-primary-600 rounded-full p-3">
                  <Anchor size={32} />
                </div>
              </div>
              <h3 className="font-heading font-medium text-xl text-center mb-2">
                {t('home.features.elegantAmbiance.title')}
              </h3>
              <p className="text-gray-600 text-center">
                {t('home.features.elegantAmbiance.description')}
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 text-primary-600 rounded-full p-3">
                  <GlassWater size={32} />
                </div>
              </div>
              <h3 className="font-heading font-medium text-xl text-center mb-2">
                {t('home.features.winePairing.title')}
              </h3>
              <p className="text-gray-600 text-center">
                {t('home.features.winePairing.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;