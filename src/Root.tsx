import React from 'react';

import tdc_jumbotron from './media/img/jumbotron/tdc_jumbotron.png';
import bg2 from './media/img/bg2.png';
import calendar from './media/img/calendar.svg';
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
                        <h1 className="text-lg-right text-md-right text-sm-left pr-5 pt-4 text-white">Welcome to TDC 2019</h1>
                        <img src={bg2} className="img-fluid pr-5 pt-3 float-right" width="30%" alt='' />
                    </div>
                    <div className="col-md-6 text-left text-white mt-4">
                        <p>Trondheim Developer Conference – A community-driven conference for people in the Trondheim
                            region will be seven years old in 2019! Don’t miss out on a day of inspiring tech talks,
                            a day of hands-on sessions, mingling, and a great party!</p>

                        <p>TDC is organized by several of Trondheim's meetups. Our goal is to organize a community-driven
                            conference for the regions developers where they can learn new things, share knowledge, and socialize.</p>

                        <p>We have been organizing TDC since 2012 and have been excited to watch the event grow bigger
                            and better every year. In 2018 we hosted about 700 participants and 20 speakers across 5 parallel tracks.
                            In addition, we also offered a selection of 9 workshops held on the day after the conference.</p>

                        <p>We would not be what we are today without YOU! Thank you for your support and contributions over the years.</p>

                        <h2><a href='https://tdc.hoopla.no/sales/tdc2019'>Get your tickets now!</a></h2>
                        <p>The last three years the conference has been sold out, so don't wait too long!</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid second p-5 my-2">
                <div className="d-md-flex flex-md-equal">
                    <div className="col-md-6 p-0 m-0">
                        <img src={index01} className="img-fluid mb-5 border-bottom-right" width="80%" alt=''/>
                    </div>
                    <div className="col-md-4 text-left text-white mt-0">
                        <p>The <Link to="/program">program for TDC 2019</Link> consists of multiple tracks for
                            front-end, back-end, agile developers, and
                            digital design. The conference strives to reach a balance between local, national and
                            international speakers, and call-for-presentation submissions.
                        </p>

                        <p>TDC is a noncommercial event where all profit goes towards next years conference and other
                            community events throughtout the year in Trondheim</p>

                        <a href="https://www.dataforeningen.no/arrangementer/?fwp_hele_landet=trondheim">
                            <img src={dataforeningen} className="img-fluid" width="15%" alt='Dataforeningen'/>
                        </a>
                        <a href="https://www.meetup.com/IXDATrondheim/">
                            <img src={ixda} className="img-fluid" width="18%" alt='IxDA'/>
                        </a>
                        <a href="https://www.meetup.com/javaBin-Trondheim/">
                            <img src={javabin} className="img-fluid" width="22%" alt='javaBin'/>
                        </a>
                        <a href="https://www.meetup.com/nnug-trondheim/">
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
                            <h2>A full day of knowledge</h2>

                            <p>A day full of talks from renowned Norwegian and international speakers,
                                in varying formats and categories.</p>

                            <h2>An afterparty to remember</h2>
                            <p>Trondheim Developer Conference's traditional party takes place on the evening after the conference.
                                After a long day of unique learning experiences, it feels good to chill out with some good food and drink.
                                The party offers a great chance to catch up with old friends, and meet new ones!!</p>

                            <h2>Hands-on workshops</h2>
                            <p>
                                Do you prefer practical tasks more than theory?
                                Take part in one of our great workshops and boost your knowledge and skills.
                                Workshops will be held the day after the conference.</p>
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
                            <h5 className="p-2 text-dark">
                                <img src={calendar} className="img-fluid align-top" width="8%" alt='Dataforeningen'/>&nbsp;Where?</h5>

                            <div className="where py-4 pl-5 text-white">
                                Clarion Congress<br/>
                                Trondheim,<br/>
                                Norway<br/>
                                &nbsp;<br/>
                                &nbsp;<br/>
                            </div>
                        </div>
                        <div className="col-md-3 where text-left">
                            <h5 className="p-2 text-dark"><img src={calendar} className="img-fluid align-top" width="8%" alt='Dataforeningen'/>&nbsp;When?</h5>
                            <div className="where py-4 pl-5 text-white">
                                October 28.<br/>
                                2019,<br/>
                                08:30 - 18:00<br/>
                                &nbsp;<br/>
                                &nbsp;<br/>
                            </div>
                        </div>
                        <div className="col-md-3 where text-left">
                            <h5 className="p-2 text-dark"><img src={calendar} className="img-fluid align-top" width="8%" alt='Dataforeningen'/>&nbsp;Speakers</h5>
                            <div className="where py-4 pl-5 text-white">
                                28 speakers<br/>
                                &nbsp;<br/>
                                &nbsp;<br/>
                                &nbsp;<br/>
                                &nbsp;<br/>
                            </div>
                        </div>
                        <div className="col-md-3 where text-left">
                            <h5 className="p-2 text-dark"><img src={calendar} className="img-fluid align-top" width="8%" alt='Dataforeningen'/>&nbsp;Stands</h5>
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
            <div className="container fifth pt-5 pb-4">
                <div className="row">
                    <div className="col-md-6 where text-lg-right text-md-right text-sm-left text-white pr-5">
                        <h3>Questions?</h3>
                    </div>
                    <div className="col-md-6 where text-left text-white">
                        <p>Do not hesitate to contact us if you have any questions.
                            Contact us by <a href="mailto:connect@trondheimdc.no">email</a>,
                            &nbsp;<a href="https://www.facebook.com/TDConf">Facebook</a> or
                            &nbsp;<a href="https://twitter.com/TrondheimDC">Twitter</a>
                            &nbsp; and we we'll try our best to
                            give you an answer.
                        </p>

                        <p>We are looking to seeing you at Trondheim Developer Conference 2019!</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 where text-lg-right text-md-right text-sm-left text-white pr-5">
                        <h3>Organizers</h3>
                    </div>
                    <div className="col-md-6 where text-left text-white">
                        <p>TDC is organized by people from the IT-community in Trondheim, mostly as a cooperation between
                            the many meetups in the area.</p>

                        <p>The members of the 2019 Program Commitee are:</p>
                        <ul className="members">
                            <li>Alexander Samsig (<a href="http://www.meetup.com/javaBin-Trondheim/">javaBin</a>)</li>
                            <li>Anders Aabakken (<a href="https://www.meetup.com/nnug-trondheim/">NNUG</a>)</li>
                            <li>Anders Kringstad (<a href='https://www.dataforeningen.no/arrangementer/?fwp_hele_landet=trondheim'>Dataforeningen</a>)</li>
                            <li>Hanne Bårdsen (<a href='https://www.dataforeningen.no/arrangementer/?fwp_hele_landet=trondheim'>Dataforeningen</a>)</li>
                            <li>Iver Jordal (<a href={'https://www.meetup.com/Trondheim-Machine-Learning-Meetup/'}>Trondheim Machine Learning Meetup</a>)</li>
                            <li>Ketil Ingebrigtsen (<a href='https://www.dataforeningen.no/arrangementer/?fwp_hele_landet=trondheim'>Dataforeningen</a>)</li>
                            <li>Kristina Brend (<a href='https://www.dataforeningen.no/arrangementer/?fwp_hele_landet=trondheim'>Dataforeningen</a>)</li>
                            <li>Marvin Bredal Lillehaug (<a href="http://www.meetup.com/javaBin-Trondheim/">javaBin</a>)</li>
                            <li>Morten Moen (<a href="https://www.meetup.com/nnug-trondheim/">NNUG</a>)</li>
                            <li>Pål Fossmo (<a href="https://www.meetup.com/nnug-trondheim/">NNUG</a>)</li>
                            <li>Ronny Anderssen (<a href='https://spillmakerlauget.no/'>Spillmakerlauget</a>)</li>
                            <li>Save Asmervik (<a href='https://www.dataforeningen.no/arrangementer/?fwp_hele_landet=trondheim'>Dataforeningen</a>)</li>
                            <li>Tina Haaskjold Behrens (<a href='https://www.meetup.com/IXDATrondheim/'>IxDA</a>)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </>;
};

export default Root;
