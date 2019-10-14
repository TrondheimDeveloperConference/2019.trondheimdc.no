import React from 'react';

import ticket_jumbotron from './media/img/jumbotron/ticket_jumbotron.png';
import bg3 from './media/img/bg3.png';
import bg from './media/img/coc_background.png';

const Tickets: React.FC = () => {
    return (
      <>
          <section className="jumbotron text-left bg-warning">

              <div className="container text-left d-md-flex flex-md-equal">
                  <div className="overflow-hidden">
                      <img src={ticket_jumbotron} className="img-fluid" />
                  </div>
              </div>
          </section>
          <div id="index">
              <div className="container mb-5">
                  <div className="d-md-flex flex-md-equal">
                      <div className="col-md-6">
                          <h2 className="text-right pr-5 pt-4 text-white">Tickets to TDC 2019</h2>
                          <img src={bg3} className="img-fluid pr-5 pt-3 float-right" width="30%" />
                      </div>
                      <div className="col-md-6 text-left text-white mt-4">
                          <p><a href="https://tdc.hoopla.no/sales/tdc2019">Tickets are available here!</a></p>
                      </div>
                  </div>
              </div>

              <div className="container first mb-5">
                  <div className="d-md-flex flex-md-equal">
                      <div className="col-md-6">
                          <h2 className="text-right pr-5 pt-4 text-white">More info about TDC?</h2>
                      </div>
                      <div className="col-md-6 text-left text-white mt-4">
                          <p>We'll release more information about the conference continually, and the detailed program
                              with information about all the talks will be ready in September. </p>

                              <p>Don't wait too long buying your ticket though – last year all of the tickets were sold,
                                  and we had waiting lists. We expect a decent amout of interest this year as well.</p>
                      </div>
                  </div>
              </div>

              <div className="container-fluid p-0 m-0">
                  <div className="d-md-flex flex-md-equal">
                      <img src={bg} className="img-fluid" />
                  </div>
              </div>
          </div>

      </>
    );
};

export default Tickets;