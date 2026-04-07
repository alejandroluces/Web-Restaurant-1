import React from 'react';
import { Anchor } from 'lucide-react';

interface LogoProps {
  color?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'white', className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className={`text-${color} flex items-center justify-center`}>
        <Anchor size={32} className="transform rotate-45" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`h-6 w-6 rounded-full border-2 border-${color} opacity-70`}></div>
      </div>
    </div>
  );
};

export default Logo;