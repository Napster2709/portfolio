import React from 'react';
import styles from './styles.scss';
import {
  ColorThemeToggle,
  Enumeration,
  Grid,
  Huge,
  Line,
  Logo,
  Section,
} from 'components';
import cn from 'classnames';

const OnePager = (): React.ReactElement => {
  return (
    <Section className={styles.height100}>
      <Grid className={cn(styles.content)}>
        <Grid.Column className={styles.toggleContainer}>
          <ColorThemeToggle className={styles.toggle} />
        </Grid.Column>
        <Grid.Column className={styles.titleContainer}>
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
              className={styles.list}
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
        </Grid.Column>
      </Grid>
    </Section>
  );
};

export { OnePager };