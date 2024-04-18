import React from 'react'
import Header from '../Components/Header'
import HeaderTop from '../Components/HeaderTop'
import Footer from '../Components/Footer'
import CreateContent from '../Components/CreateContent'
import ContentSection from '../Components/ContentSection'
import GreatContent from '../Components/GreatContent'
import ContentSectionExpert from '../Components/ContentSectionExpert'

function WebsiteContentWriting (){
  return (
    <>
    <Header/>
    <HeaderTop/>
       <CreateContent/>
       <div className='section'>
       <ContentSection/>
       </div>
       <div className='great'>
        <GreatContent/>
       </div>
       <div className='keyword'>
        <ContentSectionExpert/>
       </div>
          <Footer/>
    </>
  )
}
export default WebsiteContentWriting 