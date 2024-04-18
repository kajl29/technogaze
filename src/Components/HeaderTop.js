import React from 'react'
import { Link } from 'react-router-dom'

function HeaderTop() { 
  return (
    <div>
        <section className="header">
    <div className="container">
        <div className="row">
            <div className="col-12 col-xl-12 col-lg-12 col-md-12">
             <nav className="navbar navbar-expand-lg">
               <div className="container-fluid">
                 <div className="col-9 col-xl-2 col-lg-2 col-md-2 technogaze_logo">
                   <Link to={"/home"} className="navbar-brand" >  <img src="assets/images/logo-header.png" className="img-fluid" /></Link>
                 </div>
                 <div className="col-3 col-xl-10 col-lg-10 col-md-12">
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse custom_nav float-end" id="navbarSupportedContent">
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                       <li className="nav-item">
                         <Link to={"/about"} className="nav-link " aria-current="page">ABOUT</Link>
                       </li>
                     
                       <li className="nav-item dropdown">
                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Web
                         </a>
                         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <li><Link to={"/webdesign"} className="dropdown-item" >WebDesign and Development</Link></li>
                           <li><Link to={"/websitecontentwritting"} className="dropdown-item" >Website Content Writing</Link></li>
                       
                           <li><a className="dropdown-item" href="#">Website Maintenance</a></li>
                         </ul>
                       </li>
                       <li className="nav-item">
                         <a className="nav-link" href="#">APPS</a>
                       </li>
                       <li className="nav-item dropdown">
                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           DIGITAL MARKETING
                         </a>
                         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <li><a className="dropdown-item" href="#">Search Engine Optimization</a></li>
                           <li><a className="dropdown-item" href="#">Search Engine Marketing</a></li>
                           <li > <a className="dropdown-item" href="#">Social Media Management</a></li>
                           <li><a className="dropdown-item" href="#">Social Media Ads</a></li>
                           <li><a className="dropdown-item" href="#">Content Marketing</a></li>
                           <li><a className="dropdown-item" href="#">Email Marketing</a></li>
                           <li><a className="dropdown-item" href="#">Branding</a></li>
                           
                         </ul>
                       </li>
                       <li className="nav-item">
                         <a className="nav-link" href="#">   TRAINING</a>
                       </li>
                    
                       <li className="nav-item">
                         <a className="nav-link" href="#">CLIENTS</a>
                       </li>
                       <li className="nav-item">
                         <a href="#" className="nav-link">BLOGS</a>
                       </li>
                       <li className="nav-item">
                         <a className="nav-link" href="#">CONTACT US</a>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
             </nav>
            </div>

        </div>
    </div>
</section>
</div>
  )
}

export default HeaderTop