import React from 'react';
import styles from './main.styles.scss';
import { Header } from 'components';
import { Welcome } from './Welcome';
import { Chat } from './Chat';

const Main = (): React.ReactElement => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <Welcome />
        <Chat />
      </div>
    </>
  );
};

Main.displayName = 'Main';

export { Main };
