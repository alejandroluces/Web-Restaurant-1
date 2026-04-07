import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { menuData } from '../data/menu';
import MenuCategory from '../components/menu/MenuCategory';
import DishModal from '../components/menu/DishModal';
import QRCodeGenerator from '../components/menu/QRCodeGenerator';
import { Dish } from '../types';

const Menu: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [selectedDishId, setSelectedDishId] = useState<string | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);
  
  const selectedDish = useMemo(() => {
    if (!selectedDishId) return null;
    
    for (const category of menuData) {
      const dish = category.dishes.find(dish => dish.id === selectedDishId);
      if (dish) return dish;
    }
    
    return null;
  }, [selectedDishId]);
  
  // Check if mobile view is requested via URL parameter
  useEffect(() => {
    const viewParam = searchParams.get('view');
    setIsMobileView(viewParam === 'mobile');
  }, [searchParams]);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 md:h-80">
        <img 
          src="https://images.pexels.com/photos/5836771/pexels-photo-5836771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
          alt="Mare Nostrum Menu" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-900/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
              {t('menu.title')}
            </h1>
            <p className="text-xl font-light max-w-2xl mx-auto px-4">
              {t('menu.description')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Menu Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Categories */}
          <div className="lg:col-span-2">
            {menuData.map(category => (
              <MenuCategory 
                key={category.id} 
                category={category} 
                onDishClick={setSelectedDishId} 
              />
            ))}
          </div>
          
          {/* Sidebar with QR Code and Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <QRCodeGenerator menuUrl={window.location.href} />
              
              <div className="mt-8 bg-primary-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-heading font-semibold mb-4 text-primary-700">
                  {t('contact.hours.title')}
                </h3>
                <p className="text-gray-700 mb-2">{t('contact.hours.weekdays')}</p>
                <p className="text-gray-700">{t('contact.hours.weekends')}</p>
                
                <hr className="my-4 border-primary-100" />
                
                <h3 className="text-xl font-heading font-semibold mb-4 text-primary-700">
                  {t('contact.contactDetails.title')}
                </h3>
                <p className="text-gray-700 mb-2">{t('contact.contactDetails.phone')}</p>
                <p className="text-gray-700">{t('contact.contactDetails.email')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dish Modal */}
      {selectedDish && (
        <DishModal 
          dish={selectedDish} 
          onClose={() => setSelectedDishId(null)} 
        />
      )}
    </div>
  );
};

export default Menu;