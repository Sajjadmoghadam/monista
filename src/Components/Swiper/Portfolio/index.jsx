import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './style.css';
import { EffectCards } from 'swiper/modules';
import { Button, Link, Typography } from '@mui/material';

export default function Portfolio() {
  return (
    <>

      <Swiper
        effect={'cards'}
        grabCursor={false}
        loop={true}
        pagination={true}
        modules={[EffectCards]}
        className="portfolio"
      >
        <SwiperSlide className='portfolio-item'>
          
            <img src='assets/image/portfolio/23gallery.jpg' />
            <Button fullWidth href='https://23gallery.ir/' variant='contained' color={'secondary'}  sx={{fontSize:{sm:'18px' , xs:'14px'} ,fontFamily:'iransans-b',borderRadius:'10px'}}> سایت 23 گالری</Button>
        </SwiperSlide>
        <SwiperSlide className='portfolio-item'>
            <img src='assets/image/portfolio/itsilver.jpg' />
            <Button fullWidth href='https://itsilver.ir/' variant='contained' color={'secondary'}  sx={{fontSize:{sm:'18px' , xs:'14px'}  ,fontFamily:'iransans-b',borderRadius:'10px'}}> سایت ایت سیلور</Button>
        </SwiperSlide>
        <SwiperSlide className='portfolio-item'>
            <img src='assets/image/portfolio/jamin.jpg' />
            <Button fullWidth href='https://jamincarpet.ir/' variant='contained' color={'secondary'} sx={{fontSize:{sm:'18px' , xs:'14px'}  ,fontFamily:'iransans-b',borderRadius:'10px'}} > سایت جامین کارپت</Button>
        </SwiperSlide>
        <SwiperSlide className='portfolio-item'>
            <img src='assets/image/portfolio/armanasa.jpg' />
            <Button fullWidth href='https://armanasa.ir/' variant='contained' color={'secondary'} sx={{fontSize:{sm:'18px' , xs:'14px'} ,fontFamily:'iransans-b',borderRadius:'10px'}} > سایت آرمان آسا</Button>
        </SwiperSlide>
        <SwiperSlide className='portfolio-item'>
            <img src='assets/image/portfolio/javan.jpg' />
            <Button fullWidth href='https://javanelectric.com/' variant='contained' color={'secondary'} sx={{fontSize:{sm:'18px' , xs:'14px'}  ,fontFamily:'iransans-b',borderRadius:'10px'}} > سایت جوان الکتریک</Button>
        </SwiperSlide>
        <SwiperSlide className='portfolio-item'>
            <img src='assets/image/portfolio/sky.jpg' />
            <Button fullWidth href='https://skysound-co.com/' variant='contained' color={'secondary'} sx={{fontSize:{sm:'18px' , xs:'14px'}  ,fontFamily:'iransans-b',borderRadius:'10px'}}> سایت ندای آسمان</Button>
        </SwiperSlide>
        <SwiperSlide className='portfolio-item'>
            <img src='assets/image/portfolio/tavana.jpg' />
            <Button fullWidth href='https://tavanaacompany.com/' variant='contained' color={'secondary'} sx={{fontSize:{sm:'18px' , xs:'14px'} ,fontFamily:'iransans-b',borderRadius:'10px'}} > سایت اسپاد تجارت</Button>
        </SwiperSlide>
        
        <SwiperSlide className='portfolio-item'>
            <img src='assets/image/portfolio/victoria.jpg' />
            <Button fullWidth href='https://victorygallery.ir/' variant='contained' color={'secondary'} sx={{fontSize:{sm:'18px' , xs:'14px'}  ,fontFamily:'iransans-b',borderRadius:'10px'}} >سایت ویکتوری گالری</Button>
        </SwiperSlide>
        
       

      </Swiper>

    </>
  )
}
