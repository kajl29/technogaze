import React from 'react'
import Header from '../Components/Header'
import HeaderTop from '../Components/HeaderTop'
import WebDevelopment from '../Components/WebDevelopment'
import Footer from '../Components/Footer'
import AboutCompanyText from '../Components/AboutCompanyText'
import Project from '../Components/ProjectWebSection'
import Business from '../Components/Business'
import '../Components/webdevelopmentcss.css'
import DevelopmentCompany from '../Components/DevelopmentCompany'
import Experience from '../Components/Experience'
import KeyWord from '../Components/KeyWord'
import ShootRequest from '../Components/ShootRequest'
import InnovationInWebDesigning from '../Components/InnovationInWebDesigning'
import ANew from '../Components/ANew'

function WebDesign(){
  return (
    <div>
        <Header/>
        <HeaderTop/>
        <WebDevelopment/>
        <div className='bg'>
        <AboutCompanyText/>
        </div>
        <div>
        <Project/>
        </div>
        <div className='bgone'>
        <Business/>
        </div>
        <div className='dev'>
          <DevelopmentCompany/> 
        </div>
        <div className='experience'>
          <Experience/>
        </div>
        <div className='keyword'>
        <KeyWord/>
        </div>
        <div className='keyword'>
          <ShootRequest/>
        </div>
        <div className='keyword'>
          <ANew/>
        </div>
<div className='inovetion'>
  <InnovationInWebDesigning/>
  </div>      
        <Footer/> 
    </div>
    
  )
}


export default WebDesign