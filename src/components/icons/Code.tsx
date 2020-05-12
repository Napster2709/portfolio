import React from 'react';
import s from './styles.scss';

const Code = () => {
  return (
    <svg width="50" height="50" viewBox="0 0 150 150" className={s.code}>
      <g>
        {/* <rect id={s.line10_2} x="65" y="133" width="44" height="9" rx="3" />
        <rect id={s.line10_1} x="16" y="133" width="44" height="9" rx="3" />
        <rect id={s.line9_3} x="89" y="119" width="46" height="9" rx="3" />
        <rect id={s.line9_2} x="36" y="119" width="46" height="9" rx="3" />
        <rect id={s.line9_1} x="16" y="119" width="15" height="9" rx="3" /> */}
        <rect id={s.line8_2} x="57" y="105" width="46" height="9" rx="3" />
        <rect id={s.line8_1} x="16" y="105" width="35" height="9" rx="3" />
        <rect id={s.line7} x="16" y="91" width="16" height="9" rx="3" />
        <rect id={s.line6} x="27" y="77" width="64" height="9" rx="3" />
        <rect id={s.line5} x="16" y="63" width="34" height="9" rx="3" />
        <rect id={s.line4} x="16" y="47" width="20" height="9" rx="3" />
        <rect id={s.line3_2} x="67" y="34" width="55" height="9" rx="3" />
        <rect id={s.line3_1} x="29" y="34" width="33" height="9" rx="3" />
        <rect id={s.line2} x="28" y="21" width="61" height="9" rx="3" />
        <rect id={s.line1} x="16" y="8" width="30" height="9" rx="3" />
      </g>
    </svg>
  );
};

export { Code };
