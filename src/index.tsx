import React from 'react';
import ReactDOM from 'react-dom';
import { Main, PageNotFound, Soon } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from 'styles/app.scss';
import './theme/global';
import { Footer } from './components/footer';

ReactDOM.render(
  <Router>
    <div className={styles.app}>
      <Switch>
        <Route exact path="/">
          <Main />
          {/* <Soon /> */}
        </Route>
        <Route exact path="/soon">
          <Soon />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root'),
);
