import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import tdc_menu from './media/img/tdc_menu.png';
import tdc_grayscale from './media/img/tdc_grayscale.png';
import facebook from './media/img/icons/facebook.svg';
import twitter from './media/img/icons/twitter.svg';
import email from './media/img/icons/email.svg';
import Root from "./Root";
import Partners from "./Partners";
import Startups from "./Startups";
import CoC from "./CodeOfConduct";
import Program from "./program/Program";
import Session from './program/Session';

const App: React.FC = () => {
  return (
      <Router>
        <nav className="navbar sticky-top navbar-opacity navbar-expand-lg navbar-dark text-center mx-auto py-3">
          <a className="navbar-brand d-block d-sm-none" href="/"><img src={tdc_menu} alt=''/></a>
          <button className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse mx-auto justify-content-md-center" id="navbarNav">
            <ul className="navbar-nav tdc-nav">
                <li className="nav-item align-self-center mx-4"><Link className="nav-link" to="/program">program</Link></li>
                <li className="nav-item align-self-center mx-4"><Link className="nav-link" to="/partners">partners</Link></li>
                <li className="nav-item align-self-center mx-4"><Link className="nav-link d-none d-sm-block" to="/"><img src={tdc_menu} alt=''/></Link></li>
                <li className="nav-item align-self-center mx-4"><Link className="nav-link" to="/startups">startups</Link></li>
                <li className="nav-item align-self-center mx-4"><Link className="nav-link" to="/conduct">code of conduct</Link></li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <Root />
          </Route>
          <Route exact path="/program">
            <Program />
          </Route>
          <Route exact path="/program/:sessionId">
            <Session />
          </Route>
          <Route exact path="/partners">
            <Partners />
          </Route>
          <Route exact path="/startups">
            <Startups />
          </Route>
          <Route exact path="/conduct">
            <CoC />
          </Route>
        </Switch>

        <footer className="footer">
          <div className="footer-darkgreen"></div>
          <div className="footer-green"></div>
          <div className="container-fluid footer-lightgreen">
            <div className="d-md-flex flex-md-equal">
              <div className="overflow-hidden text-center">
                <img src={tdc_grayscale} alt=''/>
              </div>
              <div className="overflow-hidden text-center my-auto text-dark mt-4">
                <a href="https://www.facebook.com/TDConf"><img src={facebook} alt="Facebook"
                                                               className="img-fluid mx-2" width="5%"/></a>
                <a href="https://twitter.com/TrondheimDC"><img src={twitter} alt="Twitter"
                                                               className="img-fluid mx-2" width="5%"/></a>
                <a href="mailto:connect@trondheimdc.no"><img src={email} alt="Email"
                                                             className="img-fluid mx-2" width="5%"/></a>

              </div>
            </div>
          </div>
        </footer>
      </Router>
  );
};

export default App;
