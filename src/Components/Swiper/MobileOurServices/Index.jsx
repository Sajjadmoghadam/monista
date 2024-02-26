import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { Pagination } from 'swiper/modules';
import { Stack , Box ,Typography } from '@mui/material';

export default function MobileOurServices() {
  return (
    <>
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="Mobile-our-service"
      >
        <SwiperSlide>
        <Stack p={'34px'} sx={{backdropFilter:'blur(10px)',  background:" linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)" , borderRadius:'24px' ,}} >
            <Stack>
              <Typography variant='h3' fontFamily={'moraba'} fontSize={{ lg: '42px', md: '3vw', sm: '3vw', xs: '4vw' }} paddingBottom={'58px'}>طراحی سایت  فروشگاهی</Typography>
            </Stack>
            <Stack direction={'row'} gap={'28px'} alignItems={'start'} >
              <Box><Typography fontSize={{ lg: '18px', md: '2vw', sm: '2vw', xs: '3vw' }} sx={{textAlign:'justify' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography></Box>
              <Box><img className='services-img' src="assets/image/web.png" alt="" /></Box>
            </Stack>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
        <Stack p={'34px'} sx={{backdropFilter:'blur(10px)',  background:" linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)" , borderRadius:'24px' ,}} >
            <Stack>
              <Typography variant='h3' fontFamily={'moraba'} fontSize={{ lg: '42px', md: '3vw', sm: '3vw', xs: '4vw' }} paddingBottom={'58px'}>طراحی سایت  فروشگاهی</Typography>
            </Stack>
            <Stack direction={'row'} gap={'28px'} alignItems={'start'} >
              <Box><Typography fontSize={{ lg: '18px', md: '1.5vw', sm: '2vw', xs: '3vw' }} sx={{textAlign:'justify' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography></Box>
              <Box><img className='services-img' src="assets/image/web.png" alt="" /></Box>
            </Stack>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
        <Stack p={'34px'} sx={{backdropFilter:'blur(10px)',  background:" linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)" , borderRadius:'24px' ,}} >
            <Stack>
              <Typography variant='h3' fontFamily={'moraba'} fontSize={{ lg: '42px', md: '3vw', sm: '3vw', xs: '4vw' }} paddingBottom={'58px'}>طراحی سایت  فروشگاهی</Typography>
            </Stack>
            <Stack direction={'row'} gap={'28px'} alignItems={'start'} >
              <Box><Typography fontSize={{ lg: '18px', md: '2vw', sm: '2vw', xs: '3vw' }} sx={{textAlign:'justify' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography></Box>
              <Box><img className='services-img' src="assets/image/web.png" alt="" /></Box>
            </Stack>
          </Stack>
        </SwiperSlide>
        
      </Swiper>
    
    </>
  )
}
