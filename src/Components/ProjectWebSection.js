import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const tabcolor = '#d5d5d5'

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
    backgroundColor:`#d5d5d5-${index}`
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const btn={
    display: "inline-block",
    padding: "4px 5px",
    backgroundColor: "#fb1004",
    color: "#ffffff",
    border:"2px solid red",
    borderRadius: "10px",
    marginTop: "25px",
    
}

  return (
    <Box sx={{padding:"4%"}}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab style={{backgroundColor:'rgb(145 145 145)'}} label="E-commerce" {...a11yProps(0)} />
          <Tab style={{backgroundColor:'rgb(145 145 145)'}} label="Portfolio" {...a11yProps(1)} />
          <Tab style={{backgroundColor:'rgb(145 145 145)'}} label="Brochure or Catalogue" {...a11yProps(2)} />
          <Tab style={{backgroundColor:'rgb(145 145 145)'}} label="Blog or Personal" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel  value={value} index={0} dir={theme.direction}>
            <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <a href=''>
            <img src='assets/images/ecommers1.png'/>
            </a>
            </Grid>
            <Grid item xs={6} className='projetss'>
                <h1 className='color'>E-commers</h1>
                <hr/>
                <p>An e-commerce website is an online portal that helps you to manage goods and services through a single click. An e-commerce type of website allows your customers to purchase your business products and services directly from your website anytime</p>
                <button className='btn'>Contact Us Now</button>
            </Grid>
            </Grid>
          
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <a href=''>
            <img src='assets/images/ecommers2.png'/>
            </a>
            </Grid>
            <Grid item xs={6} className='projetss'>
                <h1 className='color'>Portfolio Website</h1>
                <hr/>
                <p>A portfolio website is a tool for getting more people to know your professional brand. It is an extension of your brand’s resume that showcases your work.</p>
                <button className='btn'>Contact Us Now</button>

            </Grid>
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <a href=''>
            <img src='assets/images/ecommers3.png'/>
            </a>
            </Grid>
            <Grid item xs={6} className='projetss'>
                <h1 className='color'>Brochure or Catalogue</h1>
                <hr/>
                <p>A brochure style website is the digital version of a printed brochure. It is also a virtual display market, the catalog-style website does not sell products online.</p>
                <button className='btn'>Contact Us Now</button>

            </Grid>
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <a href=''>
            <img src='assets/images/ecommers4.png'/>
            </a>
            </Grid>
            <Grid item xs={6} className='projetss'>
                <h1 className='color'>Blog or Personal</h1>
                <hr/>
                <p>Website A personal website is primarily used for personal career marketing, social networking with a shared interest, or merely as a space for personal expression.</p>
                <button className='btn'>Contact Us Now</button>

            </Grid>
            </Grid>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}