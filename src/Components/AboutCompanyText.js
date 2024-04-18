import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function AboutCompanyText() {

    return (
        <div> 
<Box sx={{ }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                <h1>Your vision, our <span className="color">development</span></h1>
                   <p>The designing phase of any website project is the most important step. Our team will convert your ideas and thoughts into reality. We make sure that the color schemes and layouts are trendy enough to be in line with your firm’s outlook.</p><br/>
                  <h1> <span className="color">Web Design Company in Bhopal</span>  | Web Development Company in Bhopal</h1><br/>
                  <p>
                  We are a renowned and accredited Web Development Company in Bhopal that has many years of expertise. Our expert team and Web Developers is consistently developing fully responsive and responsive websites.<br/>

Web Design Company in Bhopal as well as Web Development Company in Bhopal offer low-cost Web design and development, and Digital Marketing services for our customers for a reasonable cost. If you are looking for best web development company in bhopal and best web design company in bhopal contact TechnoGaze Solutions
                  </p>
                </Grid>
                <Grid item xs={6}>
                <img src="assets/images/meeting.png" style={{width: "50%"}}/>

                </Grid>

            </Grid>
        </Box>
    </div >
)
}
export default AboutCompanyText 