import React from 'react'

function Information() {
  const col ={
    backgroundColor:'transparent'
  }
    return (
        <div>
          
  <section className="information pt-5 pb-5">
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 col-xl-2 col-lg-2 col-md-2"></div>
        <div className="col-12 col-xl-8 col-lg-8 col-md-8">
          <div className="fullwidth_cnt">
            <div className="d-flex flex-row bd-highlight mb-2">
              <div className="bd-highlight"><span className="slash pr">&#47;&nbsp;&#47;</span></div>
              <div className="bd-highlight">
                <h2 className="timeline-titlee">Marketing Service</h2>
              </div> 

            </div>
            <h1>Best <span className="brand">Digital Marketing Company</span> in Bhopal | <span className="brand">Digital
                Marketing Services</span> in Bhopal</h1>
            <p>TechnoGaze Solutions are the best digital marketing company in Bhopal, India. We are offering digital
              marketing services in Bhopal. Technogaze works to create and promote your online presence. Our aim to
              surprise, satisfy and delight our clients with unexpected ideas, and effective solutions. We're unique and
              highly cost-effective. So, if you are looking for best digital marketing company in bhopal or digital
              marketing services in bhopal contact TechnoGaze Solutions.</p>
          </div>
        </div>
        <div className="col-2 col-xl-2 col-lg-2 col-md-2"></div>
        <div className="col-12 col-xl-6 col-lg-6 col-md-6">
          <div
            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-208bc03"
            data-id="208bc03" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-c9175f3 omichannelAnimation elementor-widget elementor-widget-html"
                data-id="c9175f3" data-element_type="widget" data-widget_type="html.default">
                <div className="elementor-widget-container">
                  <object type="image/svg+xml" data="assets/images/infor.svg" style={col}>
                    <img decoding="async" src="assets/images/circle_info.svg"/>
                  </object>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-9d450ae omichannelPhoto elementor-widget elementor-widget-image"
                data-id="9d450ae" data-element_type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img decoding="async" src="assets/images/logo.png" title="Omnichannel-photo" alt="Omnichannel"
                    loading="lazy"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6 col-lg-6 col-md-6">
          <div className="info_box">
            <div className="d-flex flex-row bd-highlight mb-2">
              <div className="bd-highlight"><span className="slash pr">&#47;&nbsp;&#47;</span></div>
              <div className="bd-highlight">
                <h2 className="timeline-titlee">Technolozy</h2>
              </div>

            </div>
            <h3>
              We're <span className="brand"> Company </span> Obsessed With Technology</h3>
            <p>
              The reason why organizations rely on us is simple, At TechnoGaze Solutions Pvt. Ltd., we create customized
              solutions for our customers. Our industry knowledge as well as our experience helps us in delivering and
              executing our plan in the best possible way to raise brand awareness of our client's brand. We are one of
              the reputed organizations in Madhya Pradesh, now targeting Chhattisgarh. As a result, we have already
              started our new office in Raipur. We have demonstrated our expertise by channelizing it into innovative
              practices that have yielded results for many of our clients. We also work on annual retainers, which
              include strategy & creative design for all digital platforms.
            </p>
            <ul className="list-unstyled">
              <li><span><i className="fa fa-users-gear"></i></span><span>Happy Clinets</span></li>
              <li><span><i className="fa fa-digital-tachograph"></i></span><span>Digital Campaign</span></li>
              <li><span><i className="fa fa-project-diagram"></i></span><span>Project Executed</span></li>
              <li><span><i className="fa fa-anchor-circle-check"></i></span><span>Leads</span></li>
            </ul>
            <a href="#" className="arrow-button">View More<span className="arrow"></span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}

export default Information