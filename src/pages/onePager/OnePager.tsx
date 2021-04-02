import React, { useEffect, useState } from 'react';
import styles from './styles.scss';
import {
  ColorThemeToggle,
  Huge,
  Line,
  Logo,
  Section,
  SocialList,
} from 'components';
import cn from 'classnames';
import { writeText } from 'utils';

const OnePager = (): React.ReactElement => {
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    writeText({
      text: 'Soon',
      setNewText: (newText: string) => setTitle(newText),
      delay: 200,
    });
  }, []);

  return (
    <Section className={styles.height100}>
      <ColorThemeToggle className={styles.toggle} />
      <div
        className={cn(styles.centered, styles.textAlignCenter, styles.content)}
      >
        <Logo className={cn(styles.logo)} />
        <Line className={cn(styles.slideDown, styles.line)} />
        <h1 className={cn(styles.slideLeft)}>Hi my name is Frederik.</h1>
        <h2 className={cn(styles.slideRight)}>Software Developer by heart</h2>
      </div>
    </Section>
  );
};

export { OnePager };
