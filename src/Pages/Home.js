import React from 'react'
import Header from '../Components/Header';
import HeaderTop from '../Components/HeaderTop';
import Slider from '../Components/Slider';
import CourseBox from '../Components/CourseBox';
import Information from '../Components/Information'
import OurService from '../Components/OurService';
import Steps from '../Components/Steps'
import OurClient from '../Components/OurClient';
import Blogs from '../Components/Blogs';
import OurClient2 from '../Components/OurClient2';
import Footer from '../Components/Footer';
function Home() {
  return (
    <div>
 <Header/>
 <HeaderTop/>
 <Slider/>
 <CourseBox/>
 <Information/>
 <OurService/>
 <Steps/>
 <OurClient/>
 <Blogs/>
 <OurClient2/>
 <Footer/>
 </div>
  )
}

export default Home