import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dish, Language } from '../../types';

interface DishCardProps {
  dish: Dish;
  onClick: () => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, onClick }) => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language as Language;
  
  const name = currentLanguage === 'es' ? dish.nameES : dish.nameEN;
  const description = currentLanguage === 'es' ? dish.descriptionES : dish.descriptionEN;

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:scale-[1.02] transition-transform"
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={dish.image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-heading font-semibold mb-1">{name}</h4>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 h-10">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary-600 font-medium">{dish.price.toFixed(2)} €</span>
          <button 
            className="text-sm bg-primary-500 text-white px-3 py-1 rounded-md hover:bg-primary-600 transition-colors"
          >
            {t('menu.viewButton')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;