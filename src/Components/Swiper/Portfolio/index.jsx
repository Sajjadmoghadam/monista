import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './style.css';
import { EffectCards } from 'swiper/modules';
import { Typography } from '@mui/material';

export default function Portfolio() {
  return (
    <>
    
    <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="portfolio"
      >
        <SwiperSlide className='portfolio-item'>
            <img src='assets/image/Rectangle.png'/>
            <Typography color={'secondary'} fontWeight={'bold'}  fontSize={'24px'} > سایت 23 گالری</Typography>
        </SwiperSlide>
        <SwiperSlide className='portfolio-item'>
            <img src='assets/image/Rectangle.png'/>
            <Typography color={'secondary'} fontWeight={'bold'}  fontSize={'24px'} > سایت 23 گالری</Typography>
        </SwiperSlide>
        <SwiperSlide className='portfolio-item'>
            <img src='assets/image/Rectangle.png'/>
            <Typography color={'secondary'} fontWeight={'bold'}  fontSize={'24px'} > سایت 23 گالری</Typography>
        </SwiperSlide>
        <SwiperSlide className='portfolio-item'>
            <img src='assets/image/Rectangle.png'/>
            <Typography color={'secondary'} fontWeight={'bold'}  fontSize={'24px'} > سایت 23 گالری</Typography>
        </SwiperSlide>
        
      </Swiper>
    
    </>
  )
}
