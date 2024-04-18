import React from 'react';
// Install Swiper modules
import CarouselSlider2 from './CarouselSlider2';

function OurClient2() {

  return (
    <div>

      <section className="ourclients pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-12 col-lg-12 col-md-12">
              <div className="d-flex flex-row bd-highlight mb-2">
                <div className="bd-highlight"><span className="slash">&#47;&nbsp;&#47;</span></div>
                <div className="bd-highlight">
                  <h2 className="timeline-title our_clients">What Customers Say</h2>
                </div>

              </div>
              
              <CarouselSlider2/>
          
                          </div>
                      </div>
                    </div>
                  </section>
                  <section>
                    {/* <!-- Please note unpkg.com is unaffiliated with Google Maps Platform. --> */}
                    <script type="module" src="https://unpkg.com/@googlemaps/extended-component-library@0.6"></script>

                    {/* <!-- Uses components from the Extended Component Library; see
     https://github.com/googlemaps/extended-component-library for more information
     on these HTML tags and how to configure them. --> */}
                    <gmpx-api-loader key="YOUR_API_KEY_HERE" solution-channel="GMP_QB_locatorplus_v10_cF"></gmpx-api-loader>
                    <gmpx-store-locator map-id="DEMO_MAP_ID"></gmpx-store-locator>
                  </section>


                </div>
               
                )
}

                export default OurClient2