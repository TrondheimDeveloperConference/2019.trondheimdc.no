import React from 'react';

import code_jumbotron from './media/img/jumbotron/code_jumbotron.png';
import bg2 from './media/img/bg2.png';
import coc_background from './media/img/coc_background.png';

const CoC = () => {
    return <>
        <section className="jumbotron text-left bg-warning">

            <div className="container text-left d-md-flex flex-md-equal">
                <div className="overflow-hidden">
                    <img src={code_jumbotron} className="img-fluid" alt='' />
                </div>
            </div>
        </section>
        <div id="index">
            <div className="container first mb-5 pb-5">
                <div className="d-md-flex flex-md-equal">
                    <div className="col-md-6">
                        <h2 className="text-lg-right text-md-right text-sm-left pr-5 pt-4 text-white">Code of Conduct</h2>
                        <img src={bg2} className="img-fluid pr-5 pt-3 float-right" width="30%" alt='' />
                    </div>
                    <div className="col-md-6 text-left text-white mt-4">
                        <p>All attendees, speakers, partners, staff and volunteers at our conference are required to follow
                            the code of conduct.</p>

                        <p>TDC strives to be an enjoyable and welcoming conference for all attendees, regardless of their
                            background, abilities or appearance. We do not tolerate harassment of our participants or staff
                            in any form. Harassment includes offensive comments related to gender, age, sexual orientation,
                            disability, physical appearance, body size, race, religion (or lack thereof), deliberate
                            intimidation, stalking, following, photography or audio/video recording against reasonable
                            consent, sustained disruption of talks or other events, unwanted physical contact, and unwelcome
                            sexual attention. Sexual imagery in public spaces is inappropriate for TDC, especially in talks
                            and workshops but also at social events, Twitter and other online media.</p>

                        <p>Partners are also subject to this policy. In particular, partners should not use sexualised
                            images, activities, or other material, use sexualised clothing/uniforms/costumes, or otherwise
                            create a sexualised environment.</p>

                        <p>Participants, speakers or partners asked to stop any harassing or inappropriate behavior are
                            expected to comply immediately.</p>

                        <p>If a participant engages in harassing behavior, the organizers will confer with the offended
                            party and take any action they deem appropriate, from warning the offender to expulsion from the
                            conference with no refund.</p>

                        <p>The TDC staff cannot be everywhere all the time. If you are being harassed, notice that someone
                            else is being harassed, or have any other concerns, say something if you feel safe speaking up,
                            and please contact an organizer immediately. Even if the situation has already been handled,
                            this will help us keep an eye out for further problems. You can also reach Save Asmervik at +47
                            99 37 54 46.</p>

                        <p>We will do our best to help participants feel comfortable again after an incident. We can contact
                            hotel/venue security or local law enforcement, provide escorts, or otherwise assist those
                            experiencing harassment to feel safe for the duration of the conference. Know that we value your
                            attendance over that of the harasser regardless of their speaker status or community
                            standing.</p>

                        <p>Participants are required to follow these rules at all conference-related events – official or
                            otherwise.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-0 m-0">
                <div className="d-md-flex flex-md-equal">
                    <img src={coc_background} className="img-fluid" alt='' />
                </div>
            </div>
        </div>
    </>;
};

export default CoC;