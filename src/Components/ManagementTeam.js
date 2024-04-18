import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function RowAndColumnSpacing() {
    return (
        <Box sx={{}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item className='bgcolor' xs={6}>
                    <h1 className='management'>The Management Team</h1>
                    <h4 className='name'>Devendra Gour (Director)</h4>
                    <p className='pera1'>
                        “I have always been passionate about marketing and sales. Being in this field for about 15 years, I have expertise myself enough in the Digital media space and now I wish to impart this knowledge to other people. With the help of my senior colleague, I decided to undertake this venture and provide solutions to complex problems in nature and help businesses and trainees on board the digitalization as soon as possible. Today, the world grows at a fast pace and we need to speed up our actions in order to sustain ourselves in the market.”
                    </p>
                </Grid>


            </Grid>
        </Box>
    );
}