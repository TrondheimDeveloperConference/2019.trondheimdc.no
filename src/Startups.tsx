import React from 'react';

import startups_jumbotron from './media/img/jumbotron/startups_jumbotron.png';

const Startups: React.FC = () => {
    return (
      <>
          <section className="jumbotron text-left bg-warning">

              <div className="container text-left d-md-flex flex-md-equal">
                  <div className="overflow-hidden">
                      <img src={startups_jumbotron} className="img-fluid" alt='' />
                  </div>
              </div>
          </section>
          <div id="index">
              <div className="container first mb-5 pb-5">
                  <div className="d-md-flex flex-md-equal">
                      <div className="col-md-6">
                          <h2 className="text-lg-right text-md-right text-sm-left pr-5 pt-4 text-white">Register your interest</h2>
                      </div>
                      <div className="col-md-6 text-left text-white mt-4">
                          <p>Fill out <a
                              href="https://docs.google.com/forms/d/e/1FAIpQLSeBCUDDybcNtmS528WcYdBBxkif_iI8nQTZ-BkXb8B6O9tHPQ/viewform?usp=sf_link">our
                              form</a> or <a href="mailto:connect@trondheimdc.no">send us an email</a>!</p>
                      </div>
                  </div>
                  <div className="d-md-flex flex-md-equal">
                      <div className="col-md-6">
                          <h2 className="text-lg-right text-md-right text-sm-left pr-5 pt-4 text-white">Startups</h2>
                      </div>
                      <div className="col-md-6 text-left text-white mt-4">
                          <p>Every year we support the local entrepreneurial ecosystem. We gladly sponsor stands for
                              local startups. The only thing we require is that you’re developing IT-based solutions and
                              it shouldn’t be more than 5 years since the company was started. To give as many as
                              possible the opportunity to attend, we prioritise new startups which haven’t had a stand
                              at TDC before.</p>
                      </div>
                  </div>
              </div>

          </div>

      </>
    );
};

export default Startups;