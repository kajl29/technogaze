import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions ,Grid} from '@mui/material';


export default function DevelopmentCompany() {
  return (
    <div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 ,}}>
            <Grid item xs={3}>
        <Card className='cards'>
      <CardActionArea>
        <img src='assets/images/icons8-idea-80.png' className='card-img' />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
          SHARE YOUR WEB IDEA
          </Typography>
          <Typography variant="body2" color="text.secondary" className='typograph' >
          The designing phase of any website project is one of the most important phase and web developer take it very seriously. Our team will convert your ideas into creative process and make sure that the color schemes and layouts are trendy.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
        </Grid>

<Grid item xs={3}>
<Card className='cards'>
      <CardActionArea>
      <img src='assets/images/data-analysis.png' className='card-img' />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          ANALYSIS
          </Typography>
          <Typography variant="body2" color="text.secondary" className='typograph'>
          We know that the purpose of designing is to communicate with audience. So, keeping this thing in mind we keep designing best for you.          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
</Grid>
<Grid item xs={3}>
<Card className='cards'>
      <CardActionArea>
      <img src='assets/images/implementation.png' width={130} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          IMPLEMENTATION PROCESS
          </Typography>
          <Typography variant="body2" color="text.secondary" className='typograph'>
          Throughout the process of designing we constantly keep touch with you & check every micro detail precisely, and then we verify it from your end before finalizing it. Most importantly this is all done in our company in stipulated timeframe as per the commitment.          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
</Grid>
<Grid item xs={3}>
<Card className='cards'>
      <CardActionArea>
      <img src='assets/images/startup.png' className='card-img' />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          LAUNCHING DREAM WEBSITE
          </Typography>
          <Typography variant="body2" color="text.secondary" className='typograph'>
          Once the content & concept are approved from your end, we will start to finalize it to publish it online. All the necessary care are taken, so that the entire launch process on the internet is up to the best standards. Our executives from Bhopal, as well as from Raipur will be available to you in case you need them.          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
</Grid>

        </Grid>
    
    
    </div>
  );
}