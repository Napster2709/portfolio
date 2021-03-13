import React, { useContext } from 'react';
import styles from './welcome.styles.scss';
import cn from 'classnames';
import { Line, Logo, Section } from 'components';
import { MainContext } from 'utils';

const Welcome = (): React.ReactElement => {
  const context = useContext(MainContext);

  return (
    <Section fullHeight>
      <div
        className={cn(styles.centered, styles.textAlignCenter, styles.content)}
      >
        <div className={styles.callForAction}>
          <Logo className={styles.logo} />
          <Line className={styles.slideDown} />
        </div>
      </div>
    </Section>
  );
};

export { Welcome };
