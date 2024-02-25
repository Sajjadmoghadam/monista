import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Box, Stack, Typography } from '@mui/material';
import './style.css'



const OurServices = () => {
    return (
        <>
         <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        
        coverflowEffect={{
          rotate: 50,
          stretch:0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="service-swiper-container"
      >
        <SwiperSlide className='service-swiper-item'>
          <Stack p={'34px'} sx={{backdropFilter:'blur(10px)',  background:" linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)" , borderRadius:'24px' ,}} >
            <Stack>
              <Typography variant='h3' fontFamily={'moraba'} fontSize={'28px'} paddingBottom={'58px'}>طراحی سایت  فروشگاهی</Typography>
            </Stack>
            <Stack direction={'row'} gap={'28px'} alignItems={'start'} >
              <Box><Typography fontSize={'12px'} sx={{textAlign:'justify' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography></Box>
              <Box><img className='services-img' src="assets/image/web.png" alt="" /></Box>
            </Stack>
          </Stack>
        </SwiperSlide>
        <SwiperSlide className='service-swiper-item'>
          <Stack p={'34px'} sx={{backdropFilter:'blur(10px)',  background:" linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)" , borderRadius:'24px' ,}} >
            <Stack>
              <Typography variant='h3' fontFamily={'moraba'} fontSize={'28px'} paddingBottom={'58px'}>طراحی سایت  فروشگاهی</Typography>
            </Stack>
            <Stack direction={'row'} gap={'28px'} alignItems={'start'} >
              <Box><Typography  fontSize={'12px'} sx={{textAlign:'justify' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography></Box>
              <Box><img className='services-img' src="assets/image/web.png" alt="" /></Box>
            </Stack>
          </Stack>
        </SwiperSlide>
        <SwiperSlide className='service-swiper-item'>
          <Stack p={'34px'} sx={{backdropFilter:'blur(10px)',  background:" linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)" , borderRadius:'24px' ,}} >
            <Stack>
              <Typography variant='h3' fontFamily={'moraba'} fontSize={'28px'} paddingBottom={'58px'}>طراحی سایت  فروشگاهی</Typography>
            </Stack>
            <Stack direction={'row'} gap={'28px'} alignItems={'start'} >
              <Box><Typography  fontSize={'12px'} sx={{textAlign:'justify' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography></Box>
              <Box><img className='services-img' src="assets/image/web.png" alt="" /></Box>
            </Stack>
          </Stack>
        </SwiperSlide>
      
        
      </Swiper>
        
        
        
        </>
    );
}

export default OurServices;
