import React from 'react';
import ReactDOM from 'react-dom';
import { Components, Wrapper, PageNotFound, Impressum } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from 'styles/app.scss';
import './theme/global';
import { Footer } from './components/footer';
import 'assets/favicon.ico';
import { detectColorScheme } from 'utils';

interface AppProps {
  children: React.ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  detectColorScheme({});

  return (
    <div className={styles.app}>
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/">
          <Wrapper />
        </Route>
        <Route exact path="/impressum">
          <Impressum />
        </Route>
        <Route exact path="/components">
          <Components />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'),
);
