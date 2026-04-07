import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/home/Hero';
import Welcome from '../components/home/Welcome';
import QRCodeGenerator from '../components/menu/QRCodeGenerator';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const menuUrl = `${window.location.origin}/menu`;

  return (
    <div>
      <Hero />
      <Welcome />
      
      {/* QR Code Section */}
      <div className="py-16 bg-sand-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <QRCodeGenerator menuUrl={menuUrl} />
          </div>
        </div>
      </div>
      
      {/* Image Gallery */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Restaurant food" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Mediterranean dish" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Restaurant atmosphere" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Fresh seafood" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;