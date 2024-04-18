import React from 'react'

function CourseBox() {
  return (
    <div>
        <section className="pt-4 pb-4 course_box">
  <div className="container">
      <div className="row">
         <div className="col-12 col-xl-6 col-lg-6 col-md-6">
          <div className="d-flex flex-row bd-highlight box_course">
            <div className="bd-highlight">
              <div className="image">
                <img src="assets/images/email-marketing.jpg" className="" />
              </div>
            </div>
            <div className="bd-highlight">
              <div className="course_details">
                <h1><span className="best"> Best Agency</span> for Digital marketing & <span className="designing">Design</span> </h1>
                <p>Come to us with a vision and we promise to rank you on top with our unbeatable lead generation and brand building strategies.</p>
                <a href="#" className="view_arrow-button">View More<span className="vew_arrow"></span></a>
              </div>
            </div>
            <div className="bd-highlight"></div>
          </div>
         </div>
       <div className="col-12 col-xl-6 col-lg-6 col-md-6">
        <div className="img_full">
          <img src="assets/images/media-managemet.jpg" className="img-fluid" />
        </div>
       </div>

       <div className="col-12 col-xl-9 col-lg-9 col-md-9">
        <div className="course_box_two">
          <div className="d-flex flex-row bd-highlight">
            <div className="bd-highlight">
              <div className="image">
                <img src="assets/images/New-Slider-6.jpg" className="img-fluid" />
              </div>
            </div>
            <div className="bd-highlight">
              <div className="image">
                <img src="assets/images/New-Slider-7.jpg" className="img-fluid" />
              </div>
            </div>
            <div className="bd-highlight"></div>
          </div>
        </div>
       </div>
       <div className="col-12 col-xl-3 col-lg-3 col-md-3">
        <div className="course_details">
          <h1><span className="best"> Best Agency</span> for Digital marketing & <span className="designing">Design</span> </h1>
          <p>Come to us with a vision and we promise to rank you on top with our unbeatable lead generation and brand building strategies.</p>
          <a href="#" className="view_arrow-button">View More<span className="vew_arrow"></span></a>
        </div>
       </div>
       <div className="col-12 col-xl-6 col-lg-6 col-md-6">
        <div className="d-flex flex-row bd-highlight box_course">
          <div className="bd-highlight">
            <div className="image">
              <img src="assets/images/mediaads.jpg"  />
            </div>
          </div>
          <div className="bd-highlight">
            <div className="course_details">

              <h1><span className="best"> Best Agency</span> for Digital marketing & <span className="designing">Design</span> </h1>
              <p>Come to us with a vision and we promise to rank you on top with our unbeatable lead generation and brand building strategies.</p>
              <a href="#" className="view_arrow-button">View More<span className="vew_arrow"></span></a>
            </div>
          </div>
          <div className="bd-highlight"></div>
        </div>
       </div>
     <div className="col-12 col-xl-6 col-lg-6 col-md-6">
      <div className="img_full">
        <img src="assets/images/branding.jpg" className="img-fluid" />
      </div>
     </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default CourseBox