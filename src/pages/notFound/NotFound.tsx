import { Huge, Section } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './styles.scss';
import cn from 'classnames';

const PageNotFound = (): React.ReactElement => {
  return (
    <div className={s.main}>
      <Section className={s.height100}>
        <div className={cn(s.centered, s.textAlignCenter, s.content)}>
          <Huge>Page not found</Huge>
          <div className={s.line} />
          <Link to="/">
            <div className={s.back}>Back to home</div>
          </Link>
        </div>
      </Section>
    </div>
  );
};

export { PageNotFound };
