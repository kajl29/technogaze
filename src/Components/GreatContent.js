import React from 'react'
import { Grid } from '@mui/material'

function GreatContent(){
  return (
<>
<h1>Why Does Great Content Matter?</h1>

<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
<img src='assets/images/greatcontent.png'/>
    </Grid>
    <Grid item xs={6} style={{marginTop:'2%'}}>
<h1>It Strengthens Business Branding and Personality.</h1>
<p>The content on your website is a source of valuable information for your clients. Your brand name and its information is associated with the quality of content you have, so make your content more relevant to your business and it should be your first priority.</p>
<h1>It Convinces And Proves To Your Client That You Have Whatever They Need.</h1>
<p>The purpose of your website is to persuade visitors that you are the solution to their problem. This means that your content should provide a concise but complete idea of what you can do for them.</p>
</Grid>

</Grid>
</>
)
}

export default GreatContent