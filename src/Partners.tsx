import React from 'react';

import partners_jumbotron from './media/img/jumbotron/partners_jumbotron.png';
import partner_background from './media/img/coc_background.png';

const Partners = () => {
    return <>
        <section className="jumbotron text-left bg-warning">

            <div className="container text-left d-md-flex flex-md-equal">
                <div className="overflow-hidden">
                    <img src={partners_jumbotron} className="img-fluid" />
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
                                <img src="/media/img/partners/bekk.svg" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.bouvet.no/">
                                <img src="/media/img/partners/bouvet.svg" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="http://www.centric.eu/">
                                <img src="/media/img/partners/centric.svg" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.acando.no/">
                                <img src="/media/img/partners/cgi.svg" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.dips.com/no">
                                <img src="/media/img/partners/dips.svg" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.equinor.com/">
                                <img src="/media/img/partners/equinor.svg" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.evry.no/">
                                <img src="/media/img/partners/evry.svg" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://fjelltoppmedia.no/">
                                <img src="/media/img/partners/fjelltopmedia.png" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.glasspaper.no/">
                                <img src="/media/img/partners/glasspaper.svg" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.itema.no/">
                                <img src="/media/img/partners/itema.png" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://itsjefen.no/">
                                <img src="/media/img/partners/itsjefen.png" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.knowit.no/">
                                <img src="/media/img/partners/knowit.svg" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.lindbak.no/">
                                <img src="/media/img/partners/lindbak.svg" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="http://www.microsoft.com/nb-no">
                                <img src="/media/img/partners/microsoft.svg" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="http://www.signicat.no/">
                                <img src="/media/img/partners/signicat.svg" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.sticos.no/">
                                <img src="/media/img/partners/sticos.png" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.uninett.no/">
                                <img src="/media/img/partners/uninett.svg" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.variant.no/">
                                <img src="/media/img/partners/variant.svg" className="my-3 img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="https://www.webstep.no/">
                                <img src="/media/img/partners/webstep.svg" className="my-3 img-fluid" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-0 m-0">
                <div className="d-md-flex flex-md-equal">
                    <img src={partner_background} className="img-fluid" />
                </div>
            </div>
        </div>
    </>;
};

export default Partners;