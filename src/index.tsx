import React from 'react';
import { createRoot } from 'react-dom/client';
import { Components, PageNotFound, Main, Imprint } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import s from 'styles/app.scss';
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
    <div className={s.app}>
      {children}
      <Footer />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
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
);
