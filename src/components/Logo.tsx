import React from 'react';

interface LogoProps {
  variant?: 'default' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'default', size = 'md', className = '' }) => {
  const isLight = variant === 'light';

  // Heights for the whole logo in pixels
  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-12',
    lg: 'h-14 sm:h-16'
  }[size];

  const textColor = isLight ? '#FFFFFF' : '#0B3996';
  const lineColor = isLight ? '#93C5FD' : '#8A9EC7';

  return (
    <div className={`inline-flex items-center select-none ${heights} ${className}`}>
      <svg
        viewBox="0 0 450 195"
        className="h-full w-auto max-w-full drop-shadow-2xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="My Happy Journey Since 2007"
      >
        {/* RED BADGE (Left) */}
        <g id="badge">
          {/* Badge Background with rounded top-left corner */}
          <path
            d="M 0 48 C 0 16, 16 0, 48 0 L 100 0 L 100 170 L 0 170 Z"
            fill="#E62E05"
          />

          {/* White 'M' (Top letter inside badge) */}
          <text
            x="50"
            y="76"
            fill="white"
            fontFamily="'Georgia', 'Times New Roman', 'Playfair Display', serif"
            fontWeight="900"
            fontSize="72"
            textAnchor="middle"
            letterSpacing="-1"
          >
            M
          </text>

          {/* White 'Y' (Bottom letter inside badge) */}
          <text
            x="50"
            y="148"
            fill="white"
            fontFamily="'Georgia', 'Times New Roman', 'Playfair Display', serif"
            fontWeight="900"
            fontSize="72"
            textAnchor="middle"
            letterSpacing="-1"
          >
            Y
          </text>
        </g>

        {/* TEXT SECTION (Right) */}
        {/* Word 1: Happy */}
        <text
          x="122"
          y="66"
          fill={textColor}
          fontFamily="'Georgia', 'Times New Roman', 'Playfair Display', serif"
          fontWeight="900"
          fontSize="72"
          letterSpacing="-1.5"
        >
          Happy
        </text>

        {/* Word 2: Journey */}
        <text
          x="118"
          y="136"
          fill={textColor}
          fontFamily="'Georgia', 'Times New Roman', 'Playfair Display', serif"
          fontWeight="900"
          fontSize="72"
          letterSpacing="-1.5"
        >
          Journey
        </text>

        {/* SUB-LINE: SINCE 2007 with flanking lines */}
        <line
          x1="122"
          y1="168"
          x2="192"
          y2="168"
          stroke={lineColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <text
          x="280"
          y="173"
          fill={textColor}
          fontFamily="'Inter', 'Arial', sans-serif"
          fontWeight="800"
          fontSize="17"
          letterSpacing="6.5"
          textAnchor="middle"
        >
          SINCE 2007
        </text>
        <line
          x1="368"
          y1="168"
          x2="438"
          y2="168"
          stroke={lineColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
