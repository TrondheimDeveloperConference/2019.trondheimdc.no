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
import kantega from './media/img/partners/kantega.svg';
import knowit from './media/img/partners/knowit.svg';
import lindbak from './media/img/partners/lindbak.svg';
import microsoft from './media/img/partners/microsoft.svg';
import programutvikling from './media/img/partners/programutvikling.svg';
import signicat from './media/img/partners/signicat.svg';
import sportradar from './media/img/partners/sportradar.png';
import sticos from './media/img/partners/sticos.svg';
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
        </section>

        <div className="container-fluid third py-5">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-2 col-md-4 my-2 partners-logo partners-logo">
                        <a href="https://www.bekk.no/">
                            <img src={bekk} alt='bekk' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo partners-logo">
                        <a href="https://www.bouvet.no/">
                            <img src={bouvet} alt='bouvet' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo partners-logo">
                        <a href="https://www.centric.eu/">
                            <img src={centric} alt='centric' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://www.acando.no/">
                            <img src={cgi} alt='cgi' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://www.dips.com/no">
                            <img src={dips} alt='dips' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://www.evry.no/">
                            <img src={evry} alt='evry' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://www.equinor.com/">
                            <img src={equinor} alt='equinor' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://fjelltoppmedia.no/">
                            <img src={fjelltopmedia} alt='fjelltopmedia' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://www.glasspaper.no/">
                            <img src={glasspaper} alt='glasspaper' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://www.itema.no/">
                            <img src={itema} alt='itema' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://itsjefen.no/">
                            <img src={itsjefen} alt='itsjefen' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://www.knowit.no/">
                            <img src={knowit} alt='knowit' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://www.kantega.no">
                            <img src={kantega} alt='Kantega' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://www.lindbak.no/">
                            <img src={lindbak} alt='lindbak' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://www.microsoft.com/nb-no">
                            <img src={microsoft} alt='microsoft' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://programutvikling.no">
                            <img src={programutvikling} alt='programutvikling' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://www.signicat.no/">
                            <img src={signicat} alt='signicat' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://www.sportradar.com/">
                            <img src={sportradar} alt='sportradar' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://www.sticos.no/">
                            <img src={sticos} alt='sticos' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://www.uninett.no/">
                            <img src={uninett} alt='uninett' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://www.variant.no/">
                            <img src={variant} alt='variant' className="img-fluid partner-img" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 my-2 partners-logo">
                        <a href="https://www.webstep.no/">
                            <img src={webstep} alt='webstep' className="img-fluid partner-img" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div id="index">
            <div className="container first mb-5">
                <div className="d-md-flex flex-md-equal">
                    <div className="col-md-6">
                        <h2 className="text-lg-right text-md-right text-sm-left pr-5 pt-4 text-white">Last three year: Completely. Sold. Out.</h2>
                    </div>
                    <div className="col-md-6 text-left text-white mt-4">
                        <p>Last year, more than 700 people attended Trondheim Developer Conference.
                            This was also the third year where we were completely sold out of both tickets AND partner stands.
                            Based on this and feedback from last year's partners we‘ve got a feeling that we might sell out this
                            year as well. So don‘t wait around if you want to be part of TDC 2019!</p>
                    </div>
                </div>
                <div className="d-md-flex flex-md-equal">
                    <div className="col-md-6">
                        <h2 className="text-lg-right text-md-right text-sm-left pr-5 pt-4 text-white">Our philosophy: Partners, not sponsors</h2>
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

            <div className="container-fluid p-0 pb-2 m-0">
                <div className="d-md-flex flex-md-equal">
                    <img src={partner_background} className="img-fluid" alt=''/>
                </div>
            </div>

            <div className="container first mb-5 py-5">
                <div className="d-md-flex flex-md-equal">
                    <div className="col-md-6">
                        <h2 className="text-lg-right text-md-right text-sm-left pr-5 pt-4 text-white">The expo area</h2>
                    </div>
                    <div className="col-md-6 text-left text-white mt-4">
                        <p>All our partner stands are traditionally located in the expo area, which is centrally located in the venue. During each break, the Expo is full of attendees.</p>
                    </div>
                </div>
                <div className="d-md-flex flex-md-equal">
                    <div className="col-md-6">
                        <h2 className="text-lg-right text-md-right text-sm-left pr-5 pt-4 text-white">Partner options</h2>
                    </div>
                    <div className="col-md-6 text-left text-white mt-4">
                        <p>All partners are considered equal. Because of the conference venue, Clarion Congress, we don't have that much of an possibility for expansions.</p>
                    </div>
                </div>
                <div className="d-md-flex flex-md-equal pb-4">
                    <div className="col-md-6">
                        <h2 className="text-lg-right text-md-right text-sm-left pr-5 pt-4 text-white">Included in all partnerships</h2>
                    </div>
                    <div className="col-md-6 text-left text-white mt-4">
                        <p>
                            A stand in the Expo Area (6 square meters, 2m x 3m).One conference ticket for the stand crew.
                            Branding on 2019.trondheimdc.no, at the venue, the program, and in other promotional material that we produce.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Partners;
