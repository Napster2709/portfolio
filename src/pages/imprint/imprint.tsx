import { BackArrow, Grid, Header, PrivatText, Section } from 'components';
import React from 'react';
import s from './styles.scss';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const Imprint = (): React.ReactElement => {
  return (
    <>
      <Header logo />
      <div className={s.main}>
        <Grid className={s.nav}>
          <Grid.Column cols={6}>
            <div className={s.slideRight}>
              <h1>Imprint</h1>
            </div>
          </Grid.Column>
          <Grid.Column cols={6}>
            <BackArrow to="/" />
          </Grid.Column>
        </Grid>

        <Section className={cn(s.box, s.slideUp)}>
          <Grid fluid>
            <Grid.Column className={s.inner} marginBottom="4rem">
              <div className={s.iconContainer}>
                <FontAwesomeIcon className={s.icon} icon={faMailBulk} />
              </div>
              <div>
                <h2>Contact</h2>
                <div className={s.content}>
                  <PrivatText type="name" />
                  <PrivatText type="email" />
                </div>
              </div>
            </Grid.Column>
            <Grid.Column className={s.inner}>
              <div className={s.iconContainer}>
                <FontAwesomeIcon className={s.icon} icon={faMapMarkedAlt} />
              </div>
              <div>
                <h2>Address</h2>
                <div className={s.content}>
                  <PrivatText type="street" />
                  <PrivatText type="city" />
                  <PrivatText type="land" />
                </div>
              </div>
            </Grid.Column>
          </Grid>
        </Section>
      </div>
    </>
  );
};

export { Imprint };
