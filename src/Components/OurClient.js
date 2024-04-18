import React from 'react';
import CarouselSlider from './CarouselSlider';

const OurClient = () => {

  return (
    <div>
   <section class="ourclients pt-5 pb-5">    
    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-12 col-lg-12 col-md-12">
          <div class="d-flex flex-row bd-highlight mb-2">
            <div class="bd-highlight"><span class="slash">&#47;&nbsp;&#47;</span></div>
            <div class="bd-highlight">
              <h2 class="timeline-title our_clients">Our Clients</h2>
            </div>

          </div>
          <div class="client_text">
            <p>
              Nothing but praise. To be honest, we don’t give them a chance to say anything but their appreciating words
              are the reason
              we open our shutter every day. And keep it open until we hear it from them. Here is what our clients from
              Raipur & clients from
              Bhopal say about our agency.
            </p>
          </div>
          <CarouselSlider />
        </div>
      </div>
    </div>
  </section>
   
    </div>
  );
};

export default OurClient;