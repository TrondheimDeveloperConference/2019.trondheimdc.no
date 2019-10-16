import React from 'react';

import partners_jumbotron from './media/img/jumbotron/partners_jumbotron.png';
import partner_background from './media/img/coc_background.png';

import bekk from './media/img/partners/bekk.svg';
import bouvet from './media/img/partners/bouvet.svg';
import centric from './media/img/partners/centric.svg';
import cgi from './media/img/partners/cgi.svg';
import dips from './media/img/partners/dips.svg';
import equinor from './media/img/partners/equinor.svg';
import evry from './media/img/partners/evry.svg';
import fjelltopmedia from './media/img/partners/fjelltopmedia.png';
import glasspaper from './media/img/partners/glasspaper.svg';
import itema from './media/img/partners/itema.png';
import itsjefen from './media/img/partners/itsjefen.png';
import knowit from './media/img/partners/knowit.svg';
import lindbak from './media/img/partners/lindbak.svg';
import microsoft from './media/img/partners/microsoft.svg';
import signicat from './media/img/partners/signicat.svg';
import sportradar from './media/img/partners/sportradar.png';
import sticos from './media/img/partners/sticos.png';
import uninett from './media/img/partners/uninett.svg';
import variant from './media/img/partners/variant.svg';
import webstep from './media/img/partners/webstep.svg';


const Partners = () => {
    return <>
        <section className="jumbotron text-left bg-warning">

            <div className="container text-left d-md-flex flex-md-equal">
                <div className="overflow-hidden">
                    <img src={partners_jumbotron} className="img-fluid" alt='' />
                </div>
            </div>
        </section>,
        <div id="index">
            <div className="container first mb-5">
                <div className="d-md-flex flex-md-equal">
                    <div className="col-md-6">
                        <h2 className="text-right pr-5 pt-4 text-white">Register your interest</h2>
                    </div>
                    <div className="col-md-6 text-left text-white mt-4">
                        <p>Fill out <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdTF8Enin4i4uo13RINMKXdee7mkjZBG7PpNW5jnzJ7utXexw/viewform?usp=sf_link">our
                            form</a> or <a href="mailto:connect@trondheimdc.no">send us an email</a>!</p>
                    </div>
                </div>
                <div className="d-md-flex flex-md-equal">
                    <div className="col-md-6">
                        <h2 className="text-right pr-5 pt-4 text-white">Last three year: Completely. Sold. Out.</h2>
                    </div>
                    <div className="col-md-6 text-left text-white mt-4">
                        <p>Last year, more than 800 people attended Trondheim Developer Conference. This was also the
                            third year where we were completely sold out of both tickets AND partner stands. Based on
                            this and feedback from last year's partners we‘ve got a feeling that we might sell out this
                            year as well. So don‘t wait around if you want to be part of TDC 2019!</p>
                    </div>
                </div>
                <div className="d-md-flex flex-md-equal">
                    <div className="col-md-6">
                        <h2 className="text-right pr-5 pt-4 text-white">Our philosophy: Partners, not sponsors</h2>
                    </div>
                    <div className="col-md-6 text-left text-white mt-4">
                        <p>We want the expo area to be an attractive space where our partners and participants can hang
                            out and spend time together. In previous years our partners have done a great job to help us
                            achieve this goal, and we look forward to seeing what they bring to Trondheim Developer
                            Conference 2019! TDC’s expo area is a vibrant, busy space full of life and activity. As a
                            Partner you are not just supporting our conference economically – you participate in the
                            event and help create a unique atmosphere.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid third py-5 ">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.bekk.no/">
                                <img src={bekk} alt='bekk' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.bouvet.no/">
                                <img src={bouvet} alt='bouvet' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="http://www.centric.eu/">
                                <img src={centric} alt='centric' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.acando.no/">
                                <img src={cgi} alt='cgi' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.dips.com/no">
                                <img src={dips} alt='dips' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.equinor.com/">
                                <img src={equinor} alt='equinor' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.evry.no/">
                                <img src={evry} alt='evry' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://fjelltoppmedia.no/">
                                <img src={fjelltopmedia} alt='fjelltopmedia' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.glasspaper.no/">
                                <img src={glasspaper} alt='glasspaper' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.itema.no/">
                                <img src={itema} alt='itema' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://itsjefen.no/">
                                <img src={itsjefen} alt='itsjefen' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.knowit.no/">
                                <img src={knowit} alt='knowit' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.lindbak.no/">
                                <img src={lindbak} alt='lindbak' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="http://www.microsoft.com/nb-no">
                                <img src={microsoft} alt='microsoft' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="http://www.signicat.no/">
                                <img src={signicat} alt='signicat' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.sportradar.com/">
                                <img src={sportradar} alt='sportradar' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.sticos.no/">
                                <img src={sticos} alt='sticos' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.uninett.no/">
                                <img src={uninett} alt='uninett' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.variant.no/">
                                <img src={variant} alt='variant' className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.webstep.no/">
                                <img src={webstep} alt='webstep' className="my-3 img-fluid" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-0 m-0">
                <div className="d-md-flex flex-md-equal">
                    <img src={partner_background} className="img-fluid" alt=''/>
                </div>
            </div>
        </div>
    </>;
};

export default Partners;