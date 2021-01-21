import React from 'react';
import styles from './styles.scss';
import { SocialList } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <SocialList />
      <div className={styles.copyright}>
        <FontAwesomeIcon icon={faCopyright} />
        <div className={styles.text}>Frederik von Kiedrowski</div>
      </div>
    </div>
  );
};

export { Footer };
