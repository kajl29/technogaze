import React from 'react'
import Header from '../Components/Header'
import HeaderTop from '../Components/HeaderTop'
import AboutBox from '../Components/AboutBox'
import Footer from '../Components/Footer'
import AboutCompany from '../Components/AboutCompany'
import ManagementTeam from '../Components/ManagementTeam'
import WhoWeAre from '../Components/WhoWeAre'
import Card from '../Components/Cards'
import Images from '../Components/Image'


function AboutUs() { 

  return (
    <div> 
<Header/>
 <HeaderTop/>
 <div className='about'>
 <AboutBox/>
 </div>
 <div className='aboutcompany'>
 <AboutCompany/>
 </div>
 <div className='imge'>
 <ManagementTeam/>

 </div>
  <div className='whoweare' >
<WhoWeAre/>
</div>
<div>
  <Card/>
</div>
<div>
  <Images/>
</div>
 <Footer/>
    </div>
  )
}

export default AboutUs