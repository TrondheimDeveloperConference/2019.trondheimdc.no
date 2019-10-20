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
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";

const App: React.FC = () => {
    return (
        <Router>
            <Navbar expand='lg' sticky='top' variant='dark' >
                <Navbar.Brand href="/" className='d-block d-sm-none' />
                <NavbarToggle label='Toggle navigation' />

                <Navbar.Collapse id="navbarNav" className='mx-auto justify-content-md-center' >
                    <Nav className="tdc-nav" as='ul'>
                        <li className="nav-item align-self-center mx-4"><Nav.Link href="/program">program</Nav.Link></li>
                        <li className="nav-item align-self-center mx-4"><Nav.Link href="/partners">partners</Nav.Link></li>
                        <li className="nav-item align-self-center mx-4"><Nav.Link href="/" ><img src={tdc_menu} alt=''/></Nav.Link></li>
                        <li className="nav-item align-self-center mx-4"><Nav.Link href="/startups">startups</Nav.Link></li>
                        <li className="nav-item align-self-center mx-4"><Nav.Link href="/conduct">code of conduct</Nav.Link></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/*

          <div className="collapse navbar-collapse mx-auto justify-content-md-center" id="navbarNav">
            <ul className="navbar-nav tdc-nav">
                <li className="nav-item align-self-center mx-4"><Link className="nav-link" to="/program">program</Link></li>
                <li className="nav-item align-self-center mx-4"><Link className="nav-link" to="/partners">partners</Link></li>
                <li className="nav-item align-self-center mx-4"><Link className="nav-link d-none d-sm-block" to="/"><img src={tdc_menu} alt=''/></Link></li>
                <li className="nav-item align-self-center mx-4"><Link className="nav-link" to="/startups">startups</Link></li>
                <li className="nav-item align-self-center mx-4"><Link className="nav-link" to="/conduct">code of conduct</Link></li>
            </ul>
          </div>
        </nav>*/}

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
