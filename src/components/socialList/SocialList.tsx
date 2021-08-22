import React from 'react';
import styles from './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXing,
  faStackOverflow,
  faGithubAlt,
} from '@fortawesome/free-brands-svg-icons';
import { ColorThemeToggle } from 'components';

const SocialList = (): React.ReactElement => {
  return (
    <div className={styles.socialList}>
      <a
        target="_blanc"
        href="https://github.com/Napster2709"
        className={styles.github}
      >
        <FontAwesomeIcon icon={faGithubAlt} />
      </a>
      <a
        target="_blanc"
        href="https://www.xing.com/profile/Frederik_vonKiedrowski/cv"
        className={styles.xing}
      >
        <FontAwesomeIcon icon={faXing} />
      </a>
      <a
        target="_blanc"
        href="https://stackoverflow.com/users/7581717/frederik-v-k"
        className={styles.stackoverflow}
      >
        <FontAwesomeIcon icon={faStackOverflow} />
      </a>
    </div>
  );
};

export { SocialList };
