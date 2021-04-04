import React from 'react';
import styles from './styles.scss';
import {
  ColorThemeToggle,
  Enumeration,
  Huge,
  Line,
  Logo,
  Section,
} from 'components';
import cn from 'classnames';

const OnePager = (): React.ReactElement => {
  return (
    <Section className={styles.height100}>
      <ColorThemeToggle className={styles.toggle} />
      <div className={cn(styles.content)}>
        <div className={styles.titleSection}>
          <Logo className={cn(styles.logo)} />
          <Line svg className={cn(styles.line)} />
          <div className={cn(styles.titleText, styles.slideRight)}>
            <div className={styles.meta}>Hello</div>
            <Huge className={styles.title}>I&lsquo;m Frederik</Huge>
          </div>
        </div>
        <div
          className={cn(styles.text, styles.slideUp, styles.textAlignCenter)}
        >
          I&lsquo;m a Software Developer with a liking in
          <Enumeration
            items={[
              'Design',
              'Clean Code',
              'Modern languages',
              'coffee',
              'Gaming',
              'Music',
            ]}
          />
        </div>
      </div>
    </Section>
  );
};

export { OnePager };
