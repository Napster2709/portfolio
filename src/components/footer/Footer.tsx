import React from 'react';
import s from './styles.scss';
import { SocialList } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={s.footer}>
      <SocialList />
      <div className={s.copyright}>
        <div className={s.link}>
          <Link to="/imprint">Imprint</Link>
        </div>
        <div className={s.text}>
          <FontAwesomeIcon icon={faCopyright} />
          <>Copyright </>
          <>{currentYear} Frederik von Kiedrowski</>
        </div>
      </div>
    </div>
  );
};

export { Footer };
