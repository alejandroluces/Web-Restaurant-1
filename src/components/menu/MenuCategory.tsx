import React from 'react';
import { useTranslation } from 'react-i18next';
import { Category, Language } from '../../types';
import DishCard from './DishCard';

interface MenuCategoryProps {
  category: Category;
  onDishClick: (dishId: string) => void;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ category, onDishClick }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;
  
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-heading font-semibold mb-6 pb-2 border-b border-primary-200">
        {currentLanguage === 'es' ? category.nameES : category.nameEN}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.dishes.map((dish) => (
          <DishCard 
            key={dish.id} 
            dish={dish} 
            onClick={() => onDishClick(dish.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;