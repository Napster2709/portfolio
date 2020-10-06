import React from 'react';
import ReactDOM from 'react-dom';
import { Components, Main, PageNotFound, Soon } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from 'styles/app.scss';
import './theme/global';
import { Footer } from './components/footer';
import 'assets/favicon.ico';

ReactDOM.render(
  <Router>
    <div className={styles.app}>
      <div className={styles.main}>
        <Switch>
          <Route exact path="/">
            <Main />
            {/* <Soon /> */}
          </Route>
          <Route exact path="/soon">
            <Soon />
          </Route>
          <Route exact path="/components">
            <Components />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root'),
);
