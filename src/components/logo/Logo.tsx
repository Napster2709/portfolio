import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 150 150"
        width="150pt"
        height="150pt"
        fill="rgb(255,255,255)"
      >
        <g>
          <path
            d=" M 52.188 80.5 L 71.313 111.5 L 85.313 111.5 L 85.313 90.5 L 75.313 81.5 L 75.313 99.5 L 63.656 80.5 L 52.188 80.5 Z "
            // fill="rgb(255,255,255)"
          />
          <path
            d=" M 75.313 79.563 L 85.043 88.738 L 110.75 111.5 L 125.688 111.5 L 89.313 76.5 L 125.688 38.5 L 110.594 38.5 L 85.078 65.5 L 85.313 38.5 L 75.313 38.5 L 75.313 79.563 Z "
            // fill="rgb(255,255,255)"
          />
          <path
            d=" M 24.313 111.5 L 24.313 70.5 L 24.313 70.5 L 56.906 70.5 L 63.313 79.563 L 34.313 79.563 L 34.563 111.5 L 24.313 111.5 Z "
            // fill="rgb(255,255,255)"
          />
          <path
            d=" M 24.313 69.5 L 24.313 38.5 L 24.313 38.5 L 63.906 38.5 L 63.656 47.5 L 34.563 47.5 L 34.563 69.5 L 24.313 69.5 Z "
            // fill="rgb(255,255,255)"
          />
        </g>
      </svg>
    </div>
  );
};

export { Logo };
