import React from 'react';
import s from './styles.scss';

const Cup = () => {
  return (
    <svg width="108" height="81" viewBox="0 0 108 81" className={s.cup}>
      <g id="Frame 1">
        <g id="mug">
          <g id="cup">
            <mask id="path-1-inside-1_0_1" fill="white">
              <path d="M0 9C0 7.11438 0 6.17157 0.585786 5.58579C1.17157 5 2.11438 5 4 5H71C72.8856 5 73.8284 5 74.4142 5.58579C75 6.17157 75 7.11438 75 9V51C75 65.1421 75 72.2132 70.6066 76.6066C66.2132 81 59.1421 81 45 81H30C15.8579 81 8.7868 81 4.3934 76.6066C0 72.2132 0 65.1421 0 51V9Z" />
            </mask>
            <path
              d="M0 9C0 7.11438 0 6.17157 0.585786 5.58579C1.17157 5 2.11438 5 4 5H71C72.8856 5 73.8284 5 74.4142 5.58579C75 6.17157 75 7.11438 75 9V51C75 65.1421 75 72.2132 70.6066 76.6066C66.2132 81 59.1421 81 45 81H30C15.8579 81 8.7868 81 4.3934 76.6066C0 72.2132 0 65.1421 0 51V9Z"
              fill="#212121"
              stroke="#212121"
              strokeWidth="10"
              mask="url(#path-1-inside-1_0_1)"
            />
          </g>
          <g id="handle" clipPath="url(#clip0_0_1)">
            <path
              id="Vector"
              d="M73.0812 12.5759L41.8571 43.555C34.8072 50.5496 34.8072 61.89 41.857 68.8846C48.9069 75.8791 60.3369 75.8791 67.3868 68.8845L98.6108 37.9053C105.661 30.9108 105.661 19.5703 98.6109 12.5758C91.5611 5.58126 80.131 5.58129 73.0812 12.5759Z"
              stroke="#212121"
              strokeWidth="4"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export { Cup };
