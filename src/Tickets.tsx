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
                      <img src={ticket_jumbotron} className="img-fluid" alt=''/>
                  </div>
              </div>
          </section>
          <div id="index">
              <div className="container mb-5">
                  <div className="d-md-flex flex-md-equal">
                      <div className="col-md-6">
                          <h2 className="text-right pr-5 pt-4 text-white">Tickets to TDC 2019</h2>
                          <img src={bg3} className="img-fluid pr-5 pt-3 float-right" width="30%" alt={''}/>
                      </div>
                      <div className="col-md-6 text-left text-white mt-4">
                          <p><a href="https://tdc.hoopla.no/sales/tdc2019">Tickets are available here!</a></p>
                          <p>
                              There are three kinds of tickets.
                              The main one is for the conference, and then there are tickets
                              that bundle a workshop and entrance to the conference.
                              It is also possible to buy tickets to only a workshop.
                          </p>
                      </div>
                  </div>
              </div>

              <div className="container-fluid p-0 m-0">
                  <div className="d-md-flex flex-md-equal">
                      <img src={bg} className="img-fluid" alt=''/>
                  </div>
              </div>
          </div>

      </>
    );
};

export default Tickets;
