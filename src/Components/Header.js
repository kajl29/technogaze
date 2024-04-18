import React from 'react'

function Header(){
    return(
        <div>
<section className="top_header">
   <div className="container-fluid">
    <div className="row">
        <div class="col-12 col-xl-9 col-lg-9 col-md-9">
            <div className="social_cnt">
               <ul className="list-unstyed one">
                  <li> <a href="email: info@technogaze.com "><i className="fa-mail-bulk fas"></i>  info@technogaze.com </a> </li>
     
                  <li><a href="tel: +91 9893 68 88 78" className="mbl"><i class="fa-phone fas"></i> +91 9893 68 88 78 </a></li>
                 
               </ul>
            </div>
         </div>
         <div className="col-12 col-xl-3 col-lg-3 col-md-3">
            <div className="link_item">
                <ul className="list-unstyled ">
                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-square-x-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                </ul>
            </div>
         </div>
    </div>
   </div>
</section>
        </div>
    )
}

export default Header