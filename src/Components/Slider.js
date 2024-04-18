import React from 'react'

function Slider() {

    const bacimg ={
        backgroundImage : "url('/assets/images/slider/technogaze_team.png')"
    }
    const backimg ={
        backgroundImage: "url('assets/images/slider/technogaze_team.png')"
    }
    const backimgs={
        backgroundImage:" url('assets/images/slider/development-process.png')"
    }

  return (
    <div><section className="sliderr">
    <div className="container-fluid">
         <div className="row">
            <div className="col-12 col-xl-12 col-lg-12 col-md-12">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" style={bacimg}>
                    <div className="carousel-caption">
                      <h2>Digital Marketing</h2>
                      <p>Expand your reach online, and efficiently hit business objectives by implementing strategic digital marketing campaigns.</p>
                    </div>
                  </div>
                  <div className="carousel-item" style={backimg}>
                    <div className="carousel-caption">
                      <h2>News18 to distinguish TechnoGaze 
Solutions Pvt Ltd</h2>
                      <p>amongst other 
business leaders in the corporate 
world. Special thanks to Dr. Narottam 
Mishra (Home Minister of Madhya 
Pradesh), Mr. Om Prakash Sakhlecha 
(Minister of Science and Technology of 
Madhya Pradesh), & Dr. Prabhuram 
Choudhary (Health Minister of Madhya 
Pradesh).</p>
                    </div>
                  </div>
                  <div className="carousel-item" style={backimgs}>
                    <div className="carousel-caption">
                      <h2>Plastic Recycling Conference ASIA - 2023</h2>
                      <p>The Wise Purpose Of Plastic Recycling And Waste Management Around The Globe.To Have Awarded As “Media Partner Of The Year” Has Been A Matter Of Pride To The Entire Team Of TechnoGaze. We Are Heartily Thankful To ‘Plastic Recycling Conference ASIA - 2023’ For The Great Honor.Their Trust & Constant Belief In Our Work Is Highly Appreciated. It Drives Us To Work Even Harder To Keep Delivering The Very Best In Future Endeavors.We Are Committed To
                      Contribute Positively To The Triple Bottom Line Of 'People, Planet & Prosperity'. </p>
                    </div>
                  </div>
                </div>
                <div className="pre_next">
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
               
              </div>
              
              
         </div>
    </div>
    </div>
</section>
</div>
  )
}

export default Slider