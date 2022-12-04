import React from 'react';
import styles from './styles.scss';
import {
  Enumeration,
  Grid,
  Header,
  Huge,
  Line,
  Logo,
  Section,
  Status,
} from 'components';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessRook } from '@fortawesome/free-regular-svg-icons';
import {
  faCompassDrafting,
  faMugSaucer,
  faCodeMerge,
  faMusic,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

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
                  <div className={styles.meta}>Hey,</div>
                  <Huge className={styles.title}>I&lsquo;m Freddy</Huge>
                </div>
              </div>
              <div className={cn(styles.passion, styles.slideUp)}>
                <div className={styles.text}>I&apos;m passionate about</div>
                <Enumeration
                  className={styles.list}
                  activeClassName={styles.active}
                  items={[
                    <>
                      <div className={styles.itemText}>Design</div>{' '}
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faCompassDrafting}
                      />{' '}
                    </>,
                    <>
                      <div className={styles.itemText}>Clean Code</div>{' '}
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faCodeMerge}
                      />
                    </>,
                    <>
                      <div className={styles.itemText}>Modern languages</div>{' '}
                      <FontAwesomeIcon className={styles.icon} icon={faCode} />
                    </>,
                    <>
                      <div className={styles.itemText}>coffee</div>{' '}
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faMugSaucer}
                      />
                    </>,
                    <>
                      <div className={styles.itemText}>Gaming</div>{' '}
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faChessRook}
                      />
                    </>,
                    <>
                      <div className={styles.itemText}>Music</div>{' '}
                      <FontAwesomeIcon className={styles.icon} icon={faMusic} />
                    </>,
                  ]}
                />
              </div>
              <Grid.Column
                className={styles.slideDown}
                marginBottom="2rem"
                marginTop="8rem"
              >
                <Status
                  role="Software Engineer"
                  status="Employed"
                  company="Adesso SE"
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
