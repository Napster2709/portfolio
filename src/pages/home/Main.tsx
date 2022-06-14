import React from 'react';
import styles from './styles.scss';
import {
  ColorThemeToggle,
  Enumeration,
  Grid,
  Header,
  Huge,
  Line,
  Logo,
  Section,
  SocialList,
  Status,
} from 'components';
import cn from 'classnames';

interface MainProps {
  className?: string;
}

const Main = ({ className }: MainProps): React.ReactElement => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <Section className={cn(className, styles.height100)}>
          <Grid className={cn(styles.content)}>
            <Grid.Column className={styles.titleContainer}>
              <div className={styles.titleSection}>
                <Logo className={cn(styles.logo)} />
                <Line svg className={cn(styles.line)} />
                <div className={cn(styles.titleText, styles.slideRight)}>
                  <div className={styles.meta}>Hello</div>
                  <Huge className={styles.title}>I&lsquo;m Freddy</Huge>
                </div>
              </div>
              <div
                className={cn(
                  styles.text,
                  styles.slideUp,
                  styles.textAlignCenter,
                )}
              >
                I&lsquo;m have a liking in
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
              <Grid.Column
                className={styles.slideDown}
                marginBottom="2rem"
                marginTop="8rem"
              >
                <Status
                  role="Senior Software Engineer"
                  status="Employed"
                  company="Avenga Germany"
                />
              </Grid.Column>
            </Grid.Column>
          </Grid>
        </Section>
      </div>
    </>
  );
};

Main.displayName = 'Main';

export { Main };
