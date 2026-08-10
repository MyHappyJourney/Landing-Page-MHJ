import React from 'react';

interface LogoProps {
  variant?: 'default' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-12',
    lg: 'h-14 sm:h-16',
  };

  return (
    <div
      className={`inline-flex items-center select-none ${heights[size]} ${className}`}
    >
      <img
        src="/logo.png"
        alt="MyHappyJourney"
        className="h-full w-auto object-contain"
        draggable={false}
      />
    </div>
  );
};
