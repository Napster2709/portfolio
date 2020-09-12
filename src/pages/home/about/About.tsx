import React, { useContext } from 'react';
import { MainContext, steps } from '../context';
import styles from './about.styles.scss';
import cn from 'classnames';
import { Header } from 'components';

const About = () => {
  const context = useContext(MainContext);
  return (
    context.currentStep === steps.about &&
    !context.transitioning && (
      <>
        <Header />
        <div
          className={cn(styles.main, styles.container, {
            [styles['overflow-hidden']]: context.transitioning,
          })}
        >
          <div className={styles.about}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              distinctio sapiente possimus esse eius voluptates rerum optio
              unde, deserunt in. Veniam, amet? Illum ducimus praesentium placeat
              explicabo itaque unde reprehenderit. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Dicta distinctio sapiente possimus
              esse eius voluptates rerum optio unde, deserunt in. Veniam, amet?
              Illum ducimus praesentium placeat explicabo itaque unde
              reprehenderit. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Dicta distinctio sapiente possimus esse eius voluptates
              rerum optio unde, deserunt in. Veniam, amet? Illum ducimus
              praesentium placeat explicabo itaque unde reprehenderit. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Dicta
              distinctio sapiente possimus esse eius voluptates rerum optio
              unde, deserunt in. Veniam, amet? Illum ducimus praesentium placeat
              explicabo itaque unde reprehenderit. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Dicta distinctio sapiente possimus
              esse eius voluptates rerum optio unde, deserunt in. Veniam, amet?
              Illum ducimus praesentium placeat explicabo itaque unde
              reprehenderit. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Dicta distinctio sapiente possimus esse eius voluptates
              rerum optio unde, deserunt in. Veniam, amet? Illum ducimus
              praesentium placeat explicabo itaque unde reprehenderit. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Dicta
              distinctio sapiente possimus esse eius voluptates rerum optio
              unde, deserunt in. Veniam, amet? Illum ducimus praesentium placeat
              explicabo itaque unde reprehenderit. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Dicta distinctio sapiente possimus
              esse eius voluptates rerum optio unde, deserunt in. Veniam, amet?
              Illum ducimus praesentium placeat explicabo itaque unde
              reprehenderit.
            </p>
          </div>
        </div>
      </>
    )
  );
};

export { About };
