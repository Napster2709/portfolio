import React from 'react';
import ReactDOM from 'react-dom';
import { Components, PageNotFound, Main, Imprint } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from 'styles/app.scss';
import './theme/global';
import 'assets/favicon.ico';
import { detectColorScheme } from 'utils';
import { Footer } from 'components';

interface AppProps {
  children: React.ReactNode;
}

const App = ({ children }: AppProps): React.ReactElement => {
  detectColorScheme({});

  return (
    <div className={styles.app}>
      {children}
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App>
      <Routes>
        <Route index element={<Main />} />
        <Route element={<Imprint />} path="imprint" />
        <Route element={<Components />} path="components" />
        <Route element={<PageNotFound />} path="*" />
      </Routes>
    </App>
  </Router>,
  document.getElementById('root'),
);
