import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { Pagination } from 'swiper/modules';
import { Stack, Box, Typography } from '@mui/material';

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
          <Stack p={'34px'} sx={{ backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", borderRadius: '24px', }} >
            <Stack>
              <Typography variant='h3' fontFamily={'moraba'} fontSize={{ lg: '42px', md: '3vw', sm: '3vw', xs: '6vw' }} paddingBottom={'58px'}>خدمات طراحی و گرافیک</Typography>
            </Stack>
            <Stack direction={'column-reverse'} justifyContent={'center'} gap={'28px'} alignItems={'center'} >
              <Box><Typography fontSize={{ lg: '18px', md: '1.5vw', sm: '2vw', xs: '3.5vw' }} sx={{ textAlign: 'justify' }}>خدمات طراحی گرافیک در واقع انجام تمام خدماتی هست که زیرمجموعه طراحی گرافیکی محسوب میشود و باعث خلق اثر گرافیکی جدید می‌شود.این خدمات شامل طراحی لوگو، طراحی سربرگ اداری، طراحی کارت ویزیت، طراحی محتوای پست اینستاگرام، طراحی استوری اینستاگرام، طراحی اسلاید پاورپوینت، طراحی استند اداری، طراحی پوستر تبلیغاتی و تمامی خدماتی که در این دسته‌بندی قرار میگیرند.</Typography></Box>
              <Box><img className='services-img' src="assets/image/edit.png" alt="" /></Box>
            </Stack>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack p={'34px'} sx={{ backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", borderRadius: '24px', }} >
            <Stack>
              <Typography variant='h3' fontFamily={'moraba'} fontSize={{ lg: '42px', md: '3vw', sm: '3vw', xs: '6vw' }} paddingBottom={'58px'}>طراحی اپلیکیشن</Typography>
            </Stack>
            <Stack direction={'column-reverse'} justifyContent={'center'} gap={'28px'} alignItems={'center'} >
              <Box><Typography fontSize={{ lg: '18px', md: '1.5vw', sm: '2vw', xs: '3.5vw' }} sx={{ textAlign: 'justify' }}>داشتن و طراحی اپلیکیشن برای رونق کسب و کار و افزایش مشتریان یک راه حل بسیار موثر است. همانطور که آگاه هستید میزان استفاده از تلفن های همراه به شکل قابل توجهی افزایش یافته و افراد به صورت روزانه با اپلیکیشن های متفاوت و مختلفی درگیر هستند. در هر حوزه ای که فعال هستید و یا به فکر ایجاد شغل جدید هستید، طراحی اپلیکیشن می تواند مسیر شما را هموارتر کند.</Typography></Box>
              <Box><img className='services-img' src="assets/image/apk.png" alt="" /></Box>
            </Stack>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack p={'34px'} sx={{ backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", borderRadius: '24px', }} >
            <Stack>
              <Typography variant='h3' fontFamily={'moraba'} fontSize={{ lg: '42px', md: '3vw', sm: '3vw', xs: '6vw' }} paddingBottom={'58px'}>طراحی سایت  فروشگاهی</Typography>
            </Stack>
            <Stack direction={'column-reverse'} justifyContent={'center'} gap={'28px'} alignItems={'center'} >
              <Box><Typography fontSize={{ lg: '18px', md: '1.5vw', sm: '2vw', xs: '3.5vw' }} sx={{ textAlign: 'justify' }}>آگاهی گروه معینستا از متدهای طراحی یک وبسایت فروشگاهی این مجموعه را به انتخابی استراتژیک و بی‌مثال در طراحی فروشگاه اینترنتی تبدیل کرده است. ما در معینستا به پشتوانه تجربه چند ساله طراحی وبسایت‌های حرفه‌ای فروشگاهی و تحلیل کارشناسانه رفتار خریداران آنلاین، شما را در صعودی کردن نمودار فروش و کسب موفقیت در این زمینه همراهی می‌کنیم.</Typography></Box>
              <Box><img className='services-img' src="assets/image/web.png" alt="" /></Box>
            </Stack>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack p={'34px'} sx={{ backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", borderRadius: '24px', }} >
            <Stack>
              <Typography variant='h3' fontFamily={'moraba'} fontSize={{ lg: '42px', md: '3vw', sm: '3vw', xs: '6vw' }} paddingBottom={'58px'}>بهینه سازی موتور های جستجو</Typography>
            </Stack>
            <Stack direction={'column-reverse'} justifyContent={'center'} gap={'28px'} alignItems={'center'} >
              <Box><Typography fontSize={{ lg: '18px', md: '1.5vw', sm: '2vw', xs: '3.5vw' }} sx={{ textAlign: 'justify' }}>سئو را می‌توان پیچیده‌ترین و در عین حال ساده‌ترین مفهوم موجود در ذهن کسب و کارهای اینترنتی دانست. خدمات سئو، تولید محتوا، آموزش و مشاوره معینستا، با توجه به هر بودجه‌ای به شما کمک می‌کند پیچیدگی‌های مسیر را به راحتی طی کرده و به سرعت پیشرفت کنید. زمان در دنیای رقابت از طلا ارزشمندتر است.</Typography></Box>
              <Box><img className='services-img' src="assets/image/seo.png" alt="" /></Box>
            </Stack>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack p={'34px'} sx={{ backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", borderRadius: '24px', }} >
            <Stack>
              <Typography variant='h3' fontFamily={'moraba'} fontSize={{ lg: '42px', md: '3vw', sm: '3vw', xs: '6vw' }} paddingBottom={'58px'}>تبلیغات و مدیریت پیج اینست</Typography>
            </Stack>
            <Stack direction={'column-reverse'} justifyContent={'center'} gap={'28px'} alignItems={'center'} >
              <Box><Typography fontSize={{ lg: '18px', md: '1.5vw', sm: '2vw', xs: '3.5vw' }} sx={{ textAlign: 'justify' }}>تبلیغات در اینستاگرام یکی از بهترین‌ راه‌ها برای دسترسی به مخاطبان هدف است، چرا که این روزها افراد زیادی در اینستاگرام فعالیت دارند. اگر مخاطب محصول شما، کسی است که از اینستاگرام به‌صورت روزمره استفاده می‌کند، این فرصت را از دست ندهید.</Typography></Box>
              <Box><img className='services-img' src="assets/image/instagram.png" alt="" /></Box>
            </Stack>
          </Stack>
        </SwiperSlide>

      </Swiper>

    </>
  )
}
