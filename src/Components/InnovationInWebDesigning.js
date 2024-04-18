import React from 'react'
import { Grid, Card, CardContent, Typography, CardActionArea, CardActions, Box, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'

function InnovationInWebDesigning() {
    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }}>

                <Grid item xs={3} style={{ marginRight: '5%' }} >
                    <div className="container">
                        <div className="image-container">
                            <img src="assets/images/project-1.png" alt="Image" />
                            <div className="info">
                                <h1>Quality</h1>
                                <p>We as a company commit to provide best development services in Bhopal as per our standard, also we have started providing our services in Raipur.</p>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={3} style={{ marginRight: '5%' }}>
                    <div className="container">
                        <div className="image-container">
                            <img src="assets/images/project-2.png" alt="Image" />
                            <div className="info">
                                <h1>User Friendline</h1>
                                <p>User Friendliness Proactive implementation of strict measures to ensure the highest levels of brand safety for all campaigns.</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3} style={{ marginRight: '5%' }}>
                    <div className="container">
                        <div className="image-container">
                            <img src="assets/images/project-3.png" alt="Image" />
                            <div className="info">
                                <h1>Business Practice</h1>
                                <p>We will share all available options, tools and recommendations to help you to make perfect choices, but in the end every decision about your website is yours. Further, if you face any problem after it's creation, you are free to call or visit our head office in Bhopal or our branch office in Raipur</p>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} style={{ marginTop: '2.5%' }}>

                <Grid item xs={3} style={{ marginRight: '5%' }} >
                    <div className="container">
                        <div className="image-container">
                            <img src="assets/images/project-1.png" alt="Image" />
                            <div className="info">
                                <h1>IT & Web Service</h1>
                                <p>TechnoGaze’s dedicated team is working tirelessly to put great customer experience from last 9 years. Many success stories and appreciations received over the period of time has motivated us to raise the bar & to fly high.</p>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={3} style={{ marginRight: '5%' }}>
                    <div className="container">
                        <div className="image-container">
                            <img src="assets/images/project-2.png" alt="Image" />
                            <div className="info">
                                <h1>Satisfaction 100% Guaranteed</h1>
                                <p>When you choose our company for designing or development purposes, we comit to give our best services to you. We have proved this Bhopal till now, & now proving same in Raipur.</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3} style={{ marginRight: '5%' }}>
                    <div className="container">
                        <div className="image-container">
                            <img src="assets/images/project-3.png" alt="Image" />
                            <div className="info">
                                <h1>Flexiable Engagement Models</h1>
                                <p>Go wherever you want to and practice whenever you want, using the next level online exam platform. Experience a lag-free synchronized performance of think exam on your mobile devices.</p>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>

        </>

    )
}
export default InnovationInWebDesigning