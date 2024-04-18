import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
function ProjectProcess() {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg bgi"

          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <Card className='cardone' sx={{ display: 'flex', backgroundColor: '#c9c5c563', padding: '3%', width: '78%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Start
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Project Kick-Off
                </Typography>
                <p>
                  This is where all project details and schedules are finalized.
                </p>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="assets/images/company.png"
              style={{ width: '20%', height: '20%' }}
              alt="Live from space album cover"
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ display: 'flex', backgroundColor: '#c9c5c563', padding: '3%', width: '78%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Phase 1
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                 Content Collection
                </Typography>
                <p>
                You will be required to provide all necessary content (text, image)
                </p>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="assets/images/networking.png"
              style={{ width: '20%', height: '20%' }}
              alt="Live from space album cover"
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ display: 'flex', backgroundColor: '#c9c5c563', padding: '3%', width: '78%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Phase 2
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                Theme Selection or Initial Mockup Design Selection
                </Typography>
                <p>
                The selected theme will serve as the base layout design for the Development Site.
                </p>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="assets/images/dynamic.png"
              style={{ width: '20%', height: '20%' }}
              alt="Live from space album cover"
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ display: 'flex', backgroundColor: '#c9c5c563', padding: '3%', width: '78%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Phase 3
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                Website Development
                </Typography>
                <p>
                Actual website coding will start upon complete content submission and design approval.
                </p>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="assets/images/software.png"
              style={{ width: '20%', height: '20%' }}
              alt="Live from space album cover"
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ display: 'flex', backgroundColor: '#c9c5c563', padding: '3%', width: '78%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Phase 4
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                Developmental Site Publication
                </Typography>
                <p>
                The live website will be published on the Technogaze developmental server which can be accessed via
                </p>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="assets/images/publication.png"
              style={{ width: '20%', height: '20%' }}
              alt="Live from space album cover"
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ display: 'flex', backgroundColor: '#c9c5c563', padding: '3%', width: '78%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Phase 5
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                User Acceptance Testing and Content Revision
                </Typography>
                <p>
                You will have 5 working days to explore the website and send us feedback and content revisions
                </p>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="assets/images/checklist.png"
              style={{ width: '20%', height: '20%' }}
              alt="Live from space album cover"
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ display: 'flex', backgroundColor: '#c9c5c563', padding: '3%', width: '78%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Phase 6
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                Website Publication
                </Typography>
                <p>
                You will give us the approval for final website publication on its own domain.
                </p>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="assets/images/public-relations.png"
              style={{ width: '20%', height: '20%' }}
              alt="Live from space album cover"
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ display: 'flex', backgroundColor: 'oldlace', padding: '3%', width: '78%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Phase 7
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                Post-Quality Assurance (QA) and Debugging
                </Typography>
                <p>
                After live site publication, the website is subject to our Post QA.
                </p>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="assets/images/post.png"
              style={{ width: '20%', height: '20%' }}
              alt="Live from space album cover"
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ display: 'flex', backgroundColor: 'oldlace', padding: '3%', width: '78%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Phase8
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                In-house Training
                </Typography>
                <p>
                We will provide you a free comprehensive WordPress training for up to four representatives.
                </p>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="assets/images/online-learning.png"
              style={{ width: '20%', height: '20%' }}
              alt="Live from space album cover"
            />
          </Card>
        </SwiperSlide>

      </Swiper>
    </>
  )
}
export default ProjectProcess
