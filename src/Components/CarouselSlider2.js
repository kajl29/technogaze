import React from 'react'
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CarouselSlider2() {
    
    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => {
      setCurrentPage(currentPage => currentPage + 1);
    };
  
    const previousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage => currentPage - 1);
      }
    };
  
  
    
    return (
        <div>
         
            <div>

                <div className="swiper-container ">
                    <div className="swiper-wrapper">

                    <div class="swiper-slide ">

<div class="box_main" style={{ minHeight: "310px" }}>
  <center> <img src="assets/images/gyanganga.png" style={{width: 100}}
      alt="best digital marketing company in Bhopal | digital marketing company Bhopal | digital marketing services in Bhopal | digital marketing services provider"
      loading="lazy"/></center>
  Technogaze has been handling our digital marketing projects
  since 2018 and they have helped us set up &amp; explain what we
  could achieve with Google Adwords. They are always available on
  the other end of an email or a phone call with any delays. Very
  helpful, knowledgeable, and experienced in their work. Happy to
  recommend them to other businesses.<br/>
  <strong> Vinay Modi <br/>
    Chairman, <br/>
    GYAN GANGA INTERNATIONAL ACADEMY </strong>
</div>

</div>
                        <div className="swiper-slide">
                            <div className="box_main" style={{ minHeight: "310px" }}>
                                <center> <img src="assets/images/ujjawalabuilder.jpg"
                                    alt="best digital marketing company in Bhopal | digital marketing company Bhopal | digital marketing services in Bhopal | digital marketing services provider"
                                    loading="lazy" style={{ width: "350px", margin: "20px" }} />
                                </center>
                                Despite the short timeframe, TechnoGaze Solutions have achieved
                                remarkable results. They provide in-depth monthly reports and
                                perform detailed analysis in showing where all our traffic is
                                coming from.
                                TechnoGaze is a great solution for businesses seeking to
                                establish a strong online presence.
                                <br />
                                <strong>Mr. N.K. Maran <br />
                                    Director, <br />
                                    Ujjawala Housingh &amp; Finance Pvt. Ltd. </strong>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="box_main" style={{ minHeight: "310px" }}>
                                <center> <img src="assets/images/krishnalab.png" style={{ width: "350px", margin: "20px" }}
                                    alt="best digital marketing company in Bhopal | digital marketing company Bhopal | digital marketing services in Bhopal | digital marketing services provider"
                                    loading="lazy" /></center>
                                I had a great experience working with this company. Their
                                expertise in the workings of Google has helped identify the best
                                demographics and locations for placing our ads over time. For
                                any company planning to advertise on Google, I highly recommend
                                TechnoGaze Solutions.<br />
                                <strong> Rajesh Gangele <br />
                                    Director, <br />
                                    Krishna Digital Material Testing Laboratory </strong>
                            </div>

                        </div>
                        <div className="swiper-slide">
                            <div className="box_main" style={{ minHeight: "310px" }}>
                                <center> <img src="assets/images/hoteldevint.png"
                                    alt="best digital marketing company in Bhopal | digital marketing company Bhopal | digital marketing services in Bhopal | digital marketing services provider"
                                    loading="lazy" style={{ width: "100px" }} /></center>
                                The team is very professional and taes the time to explain the
                                ways in which we can improve our online presence. We have seen a
                                significant improvement in online sales and phone calls since
                                working with you. Looking forward to expanding our ad words in
                                the near future.
                                <br />
                                <strong>Mr. Sunil Miglani <br />
                                    Owner, <br />
                                    Hotel Dev
                                    International </strong>
                            </div>
                        </div>

                        {/* <!-- Add more slides as needed --> */}
                    </div>
                    {/* <!-- Navigation arrows --> */}
                    <div className="swiper-button-next " onClick={nextPage} ></div>
                    <div className="swiper-button-prev" onClick={previousPage} disabled={currentPage === 1} ></div>
                </div>

            </div>
        </div>
    )
}

export default CarouselSlider2  