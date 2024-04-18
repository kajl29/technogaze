import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

const CarouselSlider = () => {
  const settings = {
    dots: false,
      infinite: true,
      autospeed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
    
  };


    const sliderRef = useRef(null);
  
    const goToNext = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };
  
    const goToPrev = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev();
      }
    };
  


  return (   
    <div className="swiper-containerr">
        <div className='swiper-wrappere' >  
                                                                                                            
    <Slider ref={sliderRef} {...settings} >
       <div class="swiper-slide"><img src="assets/images/clients-logo/br1.png" alt="Slide 1"/></div>
                <div class="swiper-slide"><img src="assets/images/clients-logo/br2.png" alt="Slide 2"/></div>
                <div class="swiper-slide"><img src="assets/images/clients-logo/br3.png" alt="Slide 3"/></div>
                <div class="swiper-slide"><img src="assets/images/clients-logo/br4.png" alt="Slide 4"/></div>
                <div class="swiper-slide"><img src="assets/images/clients-logo/br5.png" alt="Slide 5"/></div>
                <div class="swiper-slide"><img src="assets/images/clients-logo/br6.png" alt="Slide 1"/></div>
                <div class="swiper-slide"><img src="assets/images/clients-logo/br7.png" alt="Slide 2"/></div>
                <div class="swiper-slide"><img src="assets/images/clients-logo/br8.png" alt="Slide 3"/></div>
                <div class="swiper-slide"><img src="assets/images/clients-logo/br9.png" alt="Slide 4"/></div>
      {/* Add more slides as needed */}
    </Slider>
    </div>
    <div className="swiper-button-next " onClick={goToPrev}></div>
              <div className="swiper-button-prev"  onClick={goToNext}></div>
    </div>

  );
};

export default CarouselSlider;