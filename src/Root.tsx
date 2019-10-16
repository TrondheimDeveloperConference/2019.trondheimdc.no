import React from 'react';

import tdc_jumbotron from './media/img/jumbotron/tdc_jumbotron.png';
import index01 from './media/img/index/index_01.jpg';
import index03 from './media/img/index/index_03.jpg';
import dataforeningen from './media/img/index/dataforeningen.svg';
import ixda from './media/img/index/ixda.svg';
import javabin from './media/img/index/javabin.svg';
import nnug from './media/img/index/nnug.svg';
import spillmakerlauget from './media/img/index/spillmakerlauget.svg';
import {Link} from "react-router-dom";

const Root: React.FC = () => {
    return <>
        <section className="jumbotron text-left bg-warning">

            <div className="container text-left d-md-flex flex-md-equal">
                <div className="overflow-hidden">
                    <img src={tdc_jumbotron} className="img-fluid" alt='' />
                </div>
            </div>
        </section>
        <div id="index">
            <div className="container first mb-5">
                <div className="d-md-flex flex-md-equal">
                    <div className="col-md-6">
                        <h5 className="text-left text-white">NOT LONG NOW!</h5>
                        <h5 className="text-left text-white">Call for speakers</h5>
                    </div>
                    <div className="col-md-6 text-left text-white mt-4">
                        <h1>Get your tickets now!</h1>
                        <h5 className="text-white"><a href='https://tdc.hoopla.no/sales/tdc2019'>Tickets</a> for TDC 2019
                        are almost sold out!</h5>
                        <p>Check out <Link to="/program">this years program</Link>, and get your tickets before it is too late!</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid second p-0 m-0">
                <div className="d-md-flex flex-md-equal">
                    <div className="col-md-6 p-0 m-0">
                        <img src={index01} className="img-fluid mb-5 border-bottom-right" width="80%" alt=''/>
                    </div>
                    <div className="col-md-4 text-left text-white mt-0">
                        <p>The <Link to="/program">program for TDC 2019</Link> will consists of multiple tracks for
                            front-end, back-end, agile developers, and
                            digital design. The conference strives to reach a balance between local, national and
                            international speakers, and a relatively large share of call-for-presentation
                            submissions.
                        </p>

                        <p>TDC is a noncommercial event where all profit goes towards next years conference and other
                            community events throughtout the year in Trondheim</p>

                        <a href="https://www.dataforeningen.no/arrangementer/?fwp_hele_landet=trondheim">
                            <img src={dataforeningen} className="img-fluid" width="15%" alt='Dataforeningen'/>
                        </a>
                        <a href="http://www.meetup.com/IXDATrondheim/">
                            <img src={ixda} className="img-fluid" width="18%" alt='IXDA'/></a>
                        <a href="http://www.meetup.com/javaBin-Trondheim/">
                            <img src={javabin} className="img-fluid" width="22%" alt='javaBin'/>
                        </a>
                        <a href="http://www.meetup.com/nnug-trondheim/">
                            <img src={nnug} className="img-fluid" width="20%" alt='NNUG'/>
                        </a>
                        <a href="https://spillmakerlauget.no/">
                            <img src={spillmakerlauget} className="img-fluid" width="20%" alt='Spillmakerlauget' />
                        </a>

                        <p className="mt-4">
                            The above communitites have joined forces and are giving developers and designers in
                            the greater Trondheim region and Norway an arena for learning, networking and communication across all development disciplines.
                        </p>

                    </div>
                </div>
            </div>

            <div className="container-fluid third py-5 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-left text-white">
                            <h1>Welcome to TDC 2019</h1>

                            <p>Trondheim Developer Conference - A community-driven conference for people in the
                                Trondheim region will be seven years old in 2019! Don't miss out on a day of inspiring
                                tech talks, a day of hans-on sessions, mingling, and a great party!</p>

                            <p>TDC is organized by several of Trondheim's meetups. Our goal is to organize a
                                community-driven conference for the regions developers where they can learn new things,
                                share knowledge, and socialize.</p>
                        </div>
                        <div className="col-md-6 ">
                            <img src={index03} className="img-fluid img" alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid fourth pb-4 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 where text-left">
                            <h5 className="p-2 text-white">Where?</h5>

                            <div className="where py-4 pl-5 text-white">
                                Clarion Congress<br/>
                                Trondheim,<br/>
                                Norway<br/>
                                &nbsp;<br/>
                                &nbsp;<br/>
                            </div>
                        </div>
                        <div className="col-md-3 where text-left">
                            <h5 className="p-2 text-white">When?</h5>
                            <div className="where py-4 pl-5 text-white">
                                October 28.<br/>
                                2019,<br/>
                                08:30 - 18:00<br/>
                                &nbsp;<br/>
                                &nbsp;<br/>
                            </div>
                        </div>
                        <div className="col-md-3 where text-left">
                            <h5 className="p-2 text-white">Speakers</h5>
                            <div className="where py-4 pl-5 text-white">
                                30 speakers<br/>
                                &nbsp;<br/>
                                &nbsp;<br/>
                                &nbsp;<br/>
                                &nbsp;<br/>
                            </div>
                        </div>
                        <div className="col-md-3 where text-left">
                            <h5 className="p-2 text-white">Stands</h5>
                            <div className="where py-4 pl-5 text-white">
                                29 stands<br/>
                                &nbsp;<br/>
                                &nbsp;<br/>
                                &nbsp;<br/>
                                &nbsp;<br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container fifth pt-5 pb-4 text-center">
                <div className="row">
                    <div className="col-md-6 where text-right text-white pr-5">
                        <h2>Questions?</h2>
                    </div>
                    <div className="col-md-6 where text-left text-white">
                        <p>Do not hesitate to contact us if you have any questions. Contact us at <a
                            href="mailto:connect@trondheimdc.no">connect@trondheimdc.no</a> and we we'll try our best to
                            give you an answer.</p>

                        <p>We are looking to seeing you at Trondheim Developer Conference 2019!</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 where text-right text-white pr-5">
                        <h2>Organizers</h2>
                    </div>
                    <div className="col-md-6 where text-left text-white">
                        <p>TDC is organize by people from the IT-community in Trondheim, mostly as a cooperation between
                            the many meetups in the area.</p>

                        <p>The members of the 2019 Program Commitee are:</p>
                        <ul>
                            <li>Alexander Samsig (javaBin)</li>
                            <li>Anders Aabakken (NNUG)</li>
                            <li>Anders Kringstad (Dataforeningen)</li>
                            <li>Hanne Bårdsen (Dataforeningen)</li>
                            <li>Iver Jordal (Trondheim Machine Learning)</li>
                            <li>Ketil Ingebrigtsen (Dataforeningen)</li>
                            <li>Kristina Brend (Dataforeningen)</li>
                            <li>Marvin Bredal Lillehaug (javaBin)</li>
                            <li>Morten Moen (NNUG)</li>
                            <li>Pål Fossmo (NNUG)</li>
                            <li>Ronny Anderssen (Spillmakerlauget)</li>
                            <li>Save Asmervik (Dataforeningen)</li>
                            <li>Tina Haaskjold Behrens (IXDA)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </>;
};

export default Root;