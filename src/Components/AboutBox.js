import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function RowAndColumnSpacing() {
    return (
        <Box className='box'>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <div >
                        <h3 className='text'>About Us</h3>
                        <span className='text1'>The Best Web Development And Digital Marketing Agency In The India
                        </span>
                    </div>
                </Grid>
                <Grid className='im' item xs={6}>
                    <img src="assets/images/abouts.png" />
                </Grid>

            </Grid>
        </Box>
    );
}