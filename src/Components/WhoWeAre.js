import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


export default function WhoWeAre() {
  return (
    <Box sx={{}} className='box'>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <img src="assets/images/back-file.png" alt="placeholder" className='back-file'/>
        </Grid>
        <Grid item xs={6}>
          <div className='peragraph'>
            <h1>Who We Are?</h1>
            <p className='pera'>
              We believe in sustainable growth through the means of digitalization. Having a strong technical foundation in this era. This is the reason why we are here to help you create a strong online presence, not only this but we will help you maintain your online presence through social media, and other online marketing tools. By this, you can focus on growing your business out in the world and we will help you grow the business here!
            </p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}