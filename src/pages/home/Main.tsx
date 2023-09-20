import React from 'react';
import s from './styles.scss';
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
      <div className={s.main}>
        <Section className={cn(className, s.height100)}>
          <Grid className={cn(s.content)}>
            <Grid.Column className={s.titleContainer}>
              <div className={s.titleSection}>
                <Logo className={cn(s.logo)} />
                <Line svg className={cn(s.line)} />
                <div className={cn(s.titleText, s.slideRight)}>
                  <div className={s.meta}>Hey,</div>
                  <Huge className={s.title}>I&lsquo;m Freddy</Huge>
                </div>
              </div>
              <div className={cn(s.passion, s.slideUp)}>
                <div className={s.text}>I&apos;m passionate about</div>
                <Enumeration
                  className={s.list}
                  activeClassName={s.active}
                  items={[
                    <>
                      <div className={s.itemText}>Design</div>{' '}
                      <FontAwesomeIcon
                        className={s.icon}
                        icon={faCompassDrafting}
                      />{' '}
                    </>,
                    <>
                      <div className={s.itemText}>Clean Code</div>{' '}
                      <FontAwesomeIcon className={s.icon} icon={faCodeMerge} />
                    </>,
                    <>
                      <div className={s.itemText}>Modern languages</div>{' '}
                      <FontAwesomeIcon className={s.icon} icon={faCode} />
                    </>,
                    <>
                      <div className={s.itemText}>coffee</div>{' '}
                      <FontAwesomeIcon className={s.icon} icon={faMugSaucer} />
                    </>,
                    <>
                      <div className={s.itemText}>Gaming</div>{' '}
                      <FontAwesomeIcon className={s.icon} icon={faChessRook} />
                    </>,
                    <>
                      <div className={s.itemText}>Music</div>{' '}
                      <FontAwesomeIcon className={s.icon} icon={faMusic} />
                    </>,
                  ]}
                />
              </div>
              <Grid.Column
                className={s.slideDown}
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
