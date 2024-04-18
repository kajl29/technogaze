import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


function Experience () {
  return (
    <div>
        <h2>
        With more than <span className='color'>11 years</span> of experience
        </h2>
        <h3>
        and over <span className='color'>1000 satisfied </span>clients
        </h3>
        <p>
            Technogaze has formed valuable partnerships with various industry leaders to provide growth and success to all stakeholders. Be one of our clients today!
        </p>
        <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,

        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><a href='#'><img src='assets/images/webslider2.png' alt=''/></a></SwiperSlide>
        <SwiperSlide><a href='#'><img src='assets/images/webslider3.png'alt=''/></a></SwiperSlide>
        <SwiperSlide><a href='#'><img src='assets/images/webslider4.png'alt=''/></a></SwiperSlide>
        <SwiperSlide><a href='#'><img src='assets/images/webslider5.png' alt=''/></a></SwiperSlide>
        <SwiperSlide><a href='#'><img src='assets/images/webslider6.png'alt=''/></a></SwiperSlide>
        <SwiperSlide><a href='#'><img src='assets/images/ecommers2.png'alt=''/></a></SwiperSlide>
        <SwiperSlide><a href='#'><img src='assets/images/webslider2.png' alt=''/></a></SwiperSlide>
      
      </Swiper>
    </div>
  )
}
export default Experience
