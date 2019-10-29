import React, {PureComponent} from 'react';
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
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import ScrollToTop from "./ScrollToTop";
import Tickets from "./Tickets";

interface Props { }
interface State {
    expanded: boolean
}
export default class App extends PureComponent<Props, State> {
    private readonly myRef: React.RefObject<HTMLButtonElement>;

    constructor(props: Props) {
        super(props);
        this.state = {
            expanded: false
        };
        this.myRef = React.createRef();
    }

    collapseMenu() {
        const navToggleBtn = this.myRef.current;
        // when offsetParent === null the button is not visible
        // The menu flickers if the menu is already displayed and toggling of expand is performed.
        if(navToggleBtn !== null && navToggleBtn.offsetParent !== null) {
            this.setState({expanded: !this.state.expanded});
        }
    }

    render() {
        const collapsedClass = this.state.expanded ? '' : 'collapsed';
        return (
            <Router>
                <ScrollToTop />
                <Navbar sticky="top" expand="lg" expanded={this.state.expanded} className="navbar navbar-opacity navbar-dark text-center mx-auto py-3">
                    <Navbar.Brand>
                        <a href="/" className="navbar-brand d-block d-lg-none"><img src={tdc_menu} alt="TDC"  /></a>
                    </Navbar.Brand>
                    <button type="button" aria-label="Toggle navigation"
                            ref={this.myRef}
                            className={`navbar-toggler ${collapsedClass} custom-toggler`}
                            onClick={() => this.collapseMenu()}>
                        <span className={`navbar-toggler-icon ${collapsedClass}`}></span>
                    </button>

                    {/*<NavbarToggle label='Toggle navigation' />*/}

                    <Navbar.Collapse id="navbarNav" className='mx-auto justify-content-md-center' >
                        <Nav className="tdc-nav" as='ul'>
                            <li className="nav-item align-self-center mx-4">
                                <Link className="nav-link"
                                      to="/program"
                                      onClick={() => this.collapseMenu()}>
                                    program
                                </Link>
                            </li>
                            <li className="nav-item align-self-center mx-4">
                                <Link className="nav-link"
                                      to="/partners"
                                      onClick={() => this.collapseMenu()}>
                                    partners
                                </Link>
                            </li>

                            <li className="nav-item align-self-center mx-4">
                                <Link className="nav-link d-none d-lg-block"
                                      to="/"
                                      onClick={() => this.collapseMenu()}>
                                    <img src={tdc_menu} alt=''/>
                                </Link>
                            </li>

                            <li className="nav-item align-self-center mx-4">
                                <Link className="nav-link"
                                      to="/conduct"
                                      onClick={() => this.collapseMenu()}>
                                    code of conduct
                                </Link>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

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
                    <Route exact path="/tickets">
                        <Tickets />
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
                                <img src={tdc_grayscale} alt='' className="img-fluid"/>
                            </div>
                            <div className="overflow-hidden text-center my-auto text-dark mt-4">
                                <a href="https://www.facebook.com/TDConf"><img src={facebook} alt="Facebook"
                                                                               className="img-fluid mx-2 social" width="5%"/></a>
                                <a href="https://twitter.com/TrondheimDC"><img src={twitter} alt="Twitter"
                                                                               className="img-fluid mx-2 social" width="5%"/></a>
                                <a href="mailto:connect@trondheimdc.no"><img src={email} alt="Email"
                                                                             className="img-fluid mx-2 social" width="5%"/></a>
                            </div>
                        </div>
                    </div>
                </footer>
            </Router>
        );
    }
};
