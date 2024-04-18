import React from 'react'

function Blogs() {

    const sty={
        textAlign:'justify'
    }

  return (
    <div>
          <section class="blog pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-12 col-lg-12 col-md-12">
          <div class="heading_blog">
            <div class="d-flex flex-row bd-highlight mb-2">
              <div class="bd-highlight"><span class="slash pr">&#47;&nbsp;&#47;</span></div>
              <div class="bd-highlight">
                <h2 class="timeline-titlee idea_blogs">Ideas & Blogs</h2>
              </div>
            </div>
            <p>Technogaze is not just limited to providing you the best web and digital marketing solutions. We also
              love to share our knowledge about the industry and more interesting insights about work-life balance. Read
              some of our ideas!</p>
          </div>
        </div>
        <div class="col-12 col-xl-4 col-lg-4 col-md-4">
          <div class="technogaze_bog">
            <img src="assets/images/future-digital.jpg"
              alt="best digital marketing company in Bhopal | digital marketing company Bhopal | digital marketing services in Bhopal | digital marketing services provider"/>
            <div class="techogaze_text_area">
              <h3 class="technogaze_title"><a class="post_title w4pl_post_title"
                  href="https://technogaze.com/blog/why-the-future-is-digital"
                  title="View Debunking the Most Common Website Myths">Why the future is digital</a></h3>
              <div class="el-content uk-margin">
                <p style={sty}>
                </p>
                <div class="post-excerpt">We are living in an era of technology, a time when our daily lives are
                  evolving, and our daily utilities and activities are taking a digital countenance.</div>
                <p></p>
              </div>
              <p><a href="#" class="arrow-button technogaze_service_width">View More<span class="arrow"></span></a></p>
            </div>

          </div>
        </div>

        <div class="col-12 col-xl-4 col-lg-4 col-md-4">
          <div class="technogaze_bog">
            <img src="assets/images/digital-merketing.jpg"
              alt="best digital marketing company in Bhopal | digital marketing company Bhopal | digital marketing services in Bhopal | digital marketing services provider"/>
            <div class="techogaze_text_area">
              <h3 class="technogaze_title"><a class="post_title w4pl_post_title"
                  href="https://technogaze.com/blog/digital-marketing-course"
                  title="View Effective Seasonal Marketing Strategies">Digital Marketing Course</a></h3>
              <div class="el-content uk-margin">
                <p style={sty}>
                </p>
                <div class="post-excerpt">Choosing the right career involves understanding your interests, skills,
                  values, and personality traits. Consider your passions, what you enjoy doing, and what you are good
                  at. </div>
                <p></p>
              </div>
              <p><a href="#" class="arrow-button technogaze_service_width">View More<span class="arrow"></span></a></p>
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-4 col-lg-4 col-md-4">
          <div class="technogaze_bog">
            <img src="assets/images/webdevelopment.jpg"
              alt="best digital marketing company in Bhopal | digital marketing company Bhopal | digital marketing services in Bhopal | digital marketing services provider"/>
            <div class="techogaze_text_area">
              <h3 class="technogaze_title"><a class="post_title w4pl_post_title"
                  href="https://technogaze.com/blog/web-development"
                  title="View ‘BER’ Months Marketing Guide for all Digital Marketers">Web Development</a></h3>
              <div class="el-content uk-margin">
                <p style={sty}>
                </p>
                <div class="post-excerpt">If you want to learn how to create websites using various programming
                  languages, frameworks, and tools, then TechnoGaze Eduskills welcomes you to join us.</div>
                <p></p>
              </div>
              <p><a href="#" class="arrow-button technogaze_service_width">View More<span class="arrow"></span></a></p>
            </div>
          </div>
        </div>



      </div>
    </div>
  </section>
    </div>
  )
}

export default Blogs