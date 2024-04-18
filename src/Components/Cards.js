import React from 'react'

function Card() {
    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="mb-5">The Reason Why We Are Here</h1>
                    </div>
                    <div className="row g-4" >
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" >
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <div className='tex'>
                                        <img src='assets/images/workflow.svg' className='work' />
                                        <h5>1000+</h5>
                                        <p>Projects Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <div className='tex'>
                                        <img src='assets/images/hr-group.svg' className='work' />
                                        <h5>500+</h5>
                                        <p>Clients Satisfied</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <div className='tex'>
                                        <img src='assets/images/duration.svg' className='work' />
                                        <h5>11+</h5>
                                        <p>Years Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <div className='tex'>
                                        <img src='assets/images/customer-care.svg' className='work' />
                                        <h5>99%</h5>
                                        <p>Clients Satisfied</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card 