import * as React from 'react';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';


export default function AboutCompany() {
    return (
        <Box className='top' >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <img className='imge' src="assets/images/about-us-woman.png" />
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <h1 className='company'> Company</h1>
                    </div>
                    <div>
                        <p className='pera1' >
                            Since 2009 TechnoGaze Solutions have come into existence and we have helped 500+ clients. We are a leading digital marketing services company based in Madhya Pradesh and Chhattisgarh. We are headquartered in Bhopal with branches across Raipur.
                        </p>
                        <p className='pera2'>
                            More than 80% of the non-metro cities in India are run by family-owned businesses. Our motive is to raise the digital bar in non-metropolitan cities and help the family-owned local entrepreneurs and others have a presence in the online arena.
                        </p>
                    </div>
                </Grid>

            </Grid>
        </Box>
    );
}