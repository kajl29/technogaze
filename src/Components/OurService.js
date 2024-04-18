import React from 'react'

function OurService() {
  return (
    <div>
        <section className="ourservice">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-xl-12 col-lg-12 col-md-12">
          <div className="wrap">
            <div className="timeline-wrap">
              <div className="d-flex flex-row bd-highlight mb-2">
                <div className="bd-highlight"><span className="slash">&#47;&nbsp;&#47;</span></div>
                <div className="bd-highlight">
                  <h2 className="timeline-title our_service">Our Service</h2>
                </div>

              </div>

              <h4 className="choose tg">See why you should choose <span className="brand-service">Technogaze</span></h4>
              <ul className="timeline">
                <li className="timeline-item bmw">
                  <div className="p-timeline-item">
                    <time className="p-timeline-date" datetime="2019-05-01">WEB</time>
                    <span className="p-timeline-carmodel" data-car="1">Frontent & Backend</span>
                    <div classname="p-timeline-block"><img src="assets/images/Web-Iconss.svg"/></div>
                  </div>
                </li>
                <li className="timeline-item mini"> 
                  <div className="p-timeline-item">
                    <time className="p-timeline-date" datetime="2019-06-01">DIGITAL MARKETING</time>
                    <span className="p-timeline-carmodel" data-car="2">On Page / Off Page & Technical</span>
                    <div className="p-timeline-block"><img src="assets/images/Digitgal-Marketing.svg"/></div>
                  </div>
                </li>
                <li className="timeline-item mini">
                  <div className="p-timeline-item">
                    <time className="p-timeline-date" datetime="2019-07-01">TRAINING</time>
                    <span className="p-timeline-carmodel" data-car="3">Training & placement</span>
                    <div className="p-timeline-block"><img src="assets/images/training-icon.svg"/></div>
                  </div>
                </li>
                <li className="timeline-item bmw">
                  <div className="p-timeline-item">
                    <time className="p-timeline-date" datetime="2019-08-01">GRAPHIC DESIGN</time>
                    <span className="p-timeline-carmodel" data-car="4">Banner & Creatives</span>
                    <div className="p-timeline-block"><img src="assets/images/graphic-design-icon.svg"/></div>
                  </div>
                </li>
                <li className="timeline-item bmw">
                  <div className="p-timeline-item">
                    <time className="p-timeline-date" datetime="2019-09-01">APPS</time>
                    <span className="p-timeline-carmodel" data-car="5">App Development</span>
                    <div className="p-timeline-block"><img src="assets/images/app-developer-icon.svg"/></div>
                  </div>
                </li>

              </ul>
              <div className="timeline-content">
                <div className="p-timeline-content" data-car="1">
                  <div className="timeline-content-card">
                    <h3 className="timeline-content-title bmw">Web Development</h3>
                    <time className="timeline-content-date" datetime="2019-05-01">Where design meets function</time>
                    <p> The designing phase of any website project is the most important step. Our team will convert
                      your ideation, thought process into reality.</p>
                    <a className="btn btn-blauw timeline-content-button" href="javascript:void();" title="">Read more</a>
                    <div className="close" data-type-close></div>
                  </div>
                  <div className="timeline-content-image">
                    <img src="assets/images/web.png"/>
                  </div>
                </div>
                <div className="p-timeline-content" data-car="2">
                  <div className="timeline-content-card">
                    <h3 className="timeline-content-title mini">Digital Marketing</h3>
                    <time className="timeline-content-date" datetime="2019-06-01">Digital Marketing </time>
                    <p> Technogaze enables its clients with a powerful way to size up their businesses to reach all
                      kinds of prospects and customers. </p>
                    <a className="btn btn-btn-oranje timeline-content-button" href="javascript:void();" title="">Read
                      more</a>
                    <div className="close" data-type-close></div>
                  </div>
                  <div className="timeline-content-image">
                    <img src="assets/images/digital_marketing.png" alt="placeholder" />
                  </div>
                </div>
                <div className="p-timeline-content" data-car="3">
                  <div className="timeline-content-card">
                    <h3 className="timeline-content-title mini">Training</h3>
                    <time className="timeline-content-date" datetime="2019-07-01">How Can TechnoGaze Training Help You to
                      Grow?
                    </time>
                    <p> Our training program is specially designed for Under-Graduates, Graduates, Working
                      Professionals, Freelancers, Housewives, and Entrepreneurs. We provide end to end learning on
                      Digital Domain with deeper dives for Creating a winning career for every profile.

                    </p>
                    <a className="btn btn-btn-oranje timeline-content-button" href="javascript:void();" title="">Read
                      more</a>
                    <div className="close" data-type-close></div>
                  </div>
                  <div className="timeline-content-image">
                    <img src="assets/images/traning.png" alt="placeholder" />
                  </div>
                </div>
                <div className="p-timeline-content" data-car="4">
                  <div className="timeline-content-card">
                    <h3 className="timeline-content-title bmw">Graphics Design</h3>
                    <time className="timeline-content-date" datetime="2019-08-01">Graphic Design Ideas & Inspiration
                    </time>
                    <p>
                      Graphic design is the process of visual communication and problem-solving through the use of
                      typography, photography, iconography, and illustration. </p>
                    <a className="btn btn-blauw timeline-content-button" href="javascript:void();" title="">Read more</a>
                    <div className="close" data-type-close></div>
                  </div>
                  <div className="timeline-content-image">
                    <img src="assets/images/graphics.png" alt="placeholder" />
                  </div>
                </div>
                <div className="p-timeline-content" data-car="5">
                  <div className="timeline-content-card">
                    <h3 className="timeline-content-title bmw">Apps Development</h3>
                    <time className="timeline-content-date" datetime="2019-09-01">Where innovation meets performance</time>
                    <p> Technogaze solutions will help you develop your own app for IOS and Android versions. Technogaze
                      provides you with a one-stop solution to market yourself from scratch. </p>
                    <a className="btn btn-blauw timeline-content-button" href="javascript:void();" title="">Read more</a>
                    <div className="close" data-type-close></div>
                  </div>
                  <div className="timeline-content-image">
                    <img src="assets/images/seo.png" alt="placeholder" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default OurService