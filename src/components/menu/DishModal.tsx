import React from 'react';
import { useTranslation } from 'react-i18next';
import { X, Share2 } from 'lucide-react';
import { Dish, Language } from '../../types';

interface DishModalProps {
  dish: Dish;
  onClose: () => void;
}

const DishModal: React.FC<DishModalProps> = ({ dish, onClose }) => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language as Language;
  
  const name = currentLanguage === 'es' ? dish.nameES : dish.nameEN;
  const detailedDescription = currentLanguage === 'es' ? dish.detailedDescriptionES : dish.detailedDescriptionEN;
  const pairing = currentLanguage === 'es' ? dish.pairingES : dish.pairingEN;

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Share dish
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: name,
        text: `${name} - Mare Nostrum Restaurant`,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback
      navigator.clipboard.writeText(`${name} - Mare Nostrum Restaurant - ${window.location.href}`)
        .then(() => alert('Link copied to clipboard!'))
        .catch((err) => console.error('Could not copy text: ', err));
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="relative">
          {/* Header image */}
          <div className="h-64 overflow-hidden">
            <img 
              src={dish.image} 
              alt={name} 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} className="text-gray-800" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[50vh]">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-heading font-semibold">{name}</h3>
            <span className="text-xl font-medium text-primary-600">{dish.price.toFixed(2)} €</span>
          </div>
          
          <p className="text-gray-700 mb-6">{detailedDescription}</p>
          
          {/* Ingredients */}
          <div className="mb-4">
            <h4 className="text-lg font-heading font-medium mb-2">{t('menu.dishDetails.ingredients')}</h4>
            <div className="flex flex-wrap gap-2">
              {dish.ingredients.map((ingredient, index) => (
                <span 
                  key={index} 
                  className="bg-sand-200 text-sand-800 text-sm px-3 py-1 rounded-full"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
          
          {/* Allergens */}
          {dish.allergens && dish.allergens.length > 0 && (
            <div className="mb-4">
              <h4 className="text-lg font-heading font-medium mb-2">{t('menu.dishDetails.allergens')}</h4>
              <div className="flex flex-wrap gap-2">
                {dish.allergens.map((allergen, index) => (
                  <span 
                    key={index} 
                    className="bg-accent-100 text-accent-800 text-sm px-3 py-1 rounded-full"
                  >
                    {allergen}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Pairing */}
          {pairing && (
            <div className="mb-6">
              <h4 className="text-lg font-heading font-medium mb-2">{t('menu.dishDetails.pairing')}</h4>
              <p className="text-gray-700 italic">{pairing}</p>
            </div>
          )}
          
          {/* Sharing */}
          <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
            <button 
              onClick={handleShare}
              className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
            >
              <Share2 size={18} className="mr-1" />
              {t('menu.dishDetails.share')}
            </button>
            
            <button 
              onClick={onClose}
              className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
            >
              {t('menu.closeButton')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishModal;