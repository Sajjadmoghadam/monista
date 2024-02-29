import './App.css';
import Header from './Components/Header/Index';
import Footer from './Components/Footer/Index';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, createTheme, CssBaseline, Stack, ThemeProvider, Typography } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import WestIcon from '@mui/icons-material/West';
import OurServices from './Components/Swiper/OurServices';
import Portfolio from './Components/Swiper/Portfolio';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useRef, useState } from 'react';
import MobileOurServices from './Components/Swiper/MobileOurServices/Index';
import { TypeAnimation } from 'react-type-animation';


function App() {
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const MoeinstaTheme = createTheme({

    palette: {
      primary: { main: '#A274FF' },
      secondary: { main: '#3D007C' },
      white: {
        main: '#F1F5F9 '
      },
      background: {
        default: '#171717',
      },
      text: {
        primary: '#F1F5F9'
      }

    },
    typography: {
      fontFamily: 'iransans , moraba'

    }
  }

  )
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const ourServices = useRef()
  const portfolio = useRef()
  const faq = useRef()
  const price = useRef()
  const contactUs = useRef()

  const handleClick = () => {

    contactUs.current?.scrollIntoView({ behavior: 'smooth' });

  };


  return (

    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={MoeinstaTheme} >
          <CssBaseline />
          <Box className='firstdiv'>
            <Header ourServices={ourServices} portfolio={portfolio} faq={faq} price={price} contactUs={contactUs} handleClick={handleClick} />
            <Stack mx={'auto'} sx={{ width: { lg: '1018px', md: '80%', sm: '80%', xs: '90%' } }}>
              <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} sx={{ height: { lg: '80vh', md: '70vh', sm: '60vh', xs: '90vh' }, }}>
                <Typography textAlign={'center'} fontFamily={'moraba'} fontSize={{ lg: '72px', md: '6vw', sm: '6vw', xs: '6vw' }} >
                  <TypeAnimation sequence={[
                    'بهترین ها را از مونیستا بخواهید! \n ما تفاوت ها را رقم میزنیم ',
                    1000,
                  ]}
                    style={{ whiteSpace: 'pre-line' }} />
                </Typography>
                <Typography fontSize={{ lg: '24px', md: '2vw', sm: '2vw', xs: '4vw' }} textAlign={'center'} marginBottom={'24px'} marginTop={'64px'} sx={{ width: '100%' }}>می‌دونی که این روزا همه چیز تو دنیای وب می‌گذره، درسته؟ وب‌سایت تو اولین جاییه که مشتریاتون با کسب‌وکارت آشنا می‌شن. حالا فکر کن یه وب‌سایت داشته باشی که نه تنها خفن باشه، بلکه دقیقا همون چیزی باشه که هر کی نگاه می‌کنه بگه واو! دوست داری با هم یه کاری بکنیم که همه توش بمونن؟ فقط یه زنگ به ما بزن. منتظر شنیدن صدای گرمت هستیم!</Typography>
                <Button onClick={handleClick} endIcon={<WestIcon />} sx={{ border: '2px solid #A274FF', borderRadius: '16px', color: 'white.main', fontSize: { sm: 'large', xs: '12px' }, '&:hover': { backgroundColor: 'secondary.main', border: '2px solid #3D007C' } }}> تماس با ما </Button>
              </Stack>
              <Stack ref={ourServices} sx={{ textAlign: 'center' }}>
                <Typography variant='h2' fontFamily={'moraba'} fontSize={{ lg: '42px', md: '3vw', sm: '3vw', xs: '6vw' }}>گروه ما چه خدماتی ارائه میدهد؟</Typography>
                <Typography textAlign={'center'} fontSize={{ lg: '24px', md: '2vw', sm: '2vw', xs: '3.5vw' }} sx={{ marginBottom: '57px', marginTop: '57px' }}>
                  ما خدمات تخصصی طراحی وبسایت، ساخت اپلیکیشن موبایل و بهینه‌سازی SEO ارائه می‌دهیم تا کسب‌وکار شما در دنیای دیجیتال بدرخشد.</Typography>
              </Stack>
              <Stack display={{ lg: 'none', md: 'flex', sm: 'flex', xs: 'flex' }}>
                <MobileOurServices />
              </Stack>
            </Stack>
            <Stack display={{ lg: 'flex', md: 'none', sm: 'none', xs: 'none' }} >
              <OurServices />
              <Box className='services-circle' sx={{ translate: '-150% 100%' }}></Box>
              <Box className='services-circle' sx={{ translate: '-700% -25%' }}></Box>
              <Box className='services-circle' sx={{ translate: '-1000% 150%' }}></Box>
            </Stack>
            <Stack mx={'auto'} sx={{ width: { lg: '1018px', md: '80%', sm: '80%', xs: '90%' }, borderRadius: '16px' }}>
              <Stack ref={portfolio} direction={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }} gap={{ md: 0, xs: 3 }} p={'48px'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} height={{ md: '430px', xs: 'auto' }} my={'118px'} sx={{ backgroundImage: 'linear-gradient(81deg, #CC74FF 0%, #6F39BD 29%, #3D007C 100%)', borderRadius: '16px', zIndex: 10 }}>
                <Box width={{ md: '60%', xs: '90%' }}>
                  <Box width={{ md: '80%', xs: '100%' }} textAlign={{ md: 'unset', xs: 'center' }}>
                    <Typography variant='h3' fontFamily={'moraba'} fontSize={'28px'} paddingBottom={'36px'}>نمونه کارهای ما </Typography>
                    <Typography textAlign={'justify'} >نمونه کار طراحی سایت های فروشگاهی، آموزشی، شرکتی، خبری و… را که مشاهده می کنید همه پروژه های اجرا شده کسب و کارهای آنلاینی هست که درحال کار هستند. همه این نمونه کارهای طراحی سایت با سورسی بهینه و طبق استاندارهای گوگل طراحی شده است. این ادعا به پشتوانه طراحی بی نظیر و پیاده سازی قوی و باکیفیت سایت های بسیاری برای برندها و استارتاپ های معتبر ایران می باشد.</Typography>
                  </Box>
                </Box>
                <Stack width={{ md: '40%', xs: '90%' }} justifyContent={'center'} alignItems={'center'} sx={{ translate: { md: '0px -15px', xs: '0px' } }}><Portfolio /></Stack>
              </Stack>
              <Stack ref={faq} direction={'column'} alignItems={'center'} justifyContent={'center'} width={'100%'} mx={'auto'}>
                <Typography variant='h2' fontFamily={'moraba'} fontSize={{ lg: '42px', md: '3vw', sm: '6vw', xs: '5vw' }}>سوالات متداول</Typography>
                <Typography textAlign={'center'} fontSize={{ lg: '24px', md: '2vw', sm: '3vw', xs: '3.5vw' }} padding={'54px 0 27px 0px'}>پاسخ سوالات شما پیرامون خدمات طراحی سایت معینستا</Typography>
                <Stack zIndex={10} height={'500px'} >
                  <Accordion className='faq' expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ paddingInline: { md: '20px', xs: '0px' }, backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", marginBlock: '8px' }} >
                    <AccordionSummary expandIcon={<ArrowDownwardIcon size={'large'} sx={{ color: 'white.main' }} />}>
                      <Typography sx={{}} fontSize={{ lg: '24px', md: '2vw', sm: '2vw', xs: '3vw' }}>بعد از سفارش سایت مدت زمان طراحی سایت چقدر است؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography textAlign={'justify'} fontSize={{ lg: '18px', md: '1.5vw', sm: '2vw', xs: '3vw' }}>مهمه که بدونیم پروژه ای که شما مدنظرتون هست در چه مقیاسی انجام میشه. بذارید راحت تر توضیح بدم، مهم ترین مسئله برای ساخت وبسایت اون کسب و کاریست که شما در حال حاضر فعالیت میکنید و مطابق با اون زمان پروژه طبق یک تایم مشخصی انجام خواهد شد. معمولا برای طراحی سایت چیزی حدود 10 الی 14 روز زمان تحویل پروژه خواهد بود.</Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className='faq' expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ paddingInline: { md: '20px', xs: '0px' }, backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", marginBlock: '8px' }} >
                    <AccordionSummary expandIcon={<ArrowDownwardIcon size={'large'} sx={{ color: 'white.main' }} />}>
                      <Typography sx={{}} fontSize={{ lg: '24px', md: '2vw', sm: '2vw', xs: '3vw' }}>آیا بعد از طراحی سایت خدمات پشتیبانی نیز ارائه میکنید؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography textAlign={'justify'} fontSize={{ lg: '18px', md: '1.5vw', sm: '2vw', xs: '3vw' }}>قطعا بله، گروه طراحی سایت معینستا بعد از طراحی سایت شما با تعهدی که داره تا 1 سال خدمات پشتیبانی رو برای سایت شما بصورت کاملا رایگان انجام خواهد داد و نیاز به هیچ هزینه اضافی از سمت شما نخواهد داشت. همچنین اگر برای اضافه کردن یا بررسی موردی خاص در وبسایتتون نیاز به راهنمایی ما داشتید، ما در خدمت شما عزیزان خواهیم بود.</Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className='faq' expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ paddingInline: { md: '20px', xs: '0px' }, backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", marginBlock: '8px' }} >
                    <AccordionSummary expandIcon={<ArrowDownwardIcon size={'large'} sx={{ color: 'white.main' }} />}>
                      <Typography sx={{}} fontSize={{ lg: '24px', md: '2vw', sm: '2vw', xs: '3vw' }}>آیا سایت های طراحی  شده توسط معینستا مناسب و سازگار با سئو هستند؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography textAlign={'justify'} fontSize={{ lg: '18px', md: '1.5vw', sm: '2vw', xs: '3vw' }}>بله بطور کامل. تیم طراحی و توسعه معینستا خدمات طراحی سایت را با استفاده از آخرین تکنولوژی کدنویسی و کاملا سئو محور انجام می‌دهند و البته برای دریافت رتبه های بالای گوگل نیاز به دریافت خدمات سئو خواهید داشت.</Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className='faq' expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ paddingInline: { md: '20px', xs: '0px' }, backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", marginBlock: '8px' }} >
                    <AccordionSummary expandIcon={<ArrowDownwardIcon size={'large'} sx={{ color: 'white.main' }} />}>
                      <Typography sx={{}} fontSize={{ lg: '24px', md: '2vw', sm: '2vw', xs: '3vw' }}>چه کسب و کارهایی به سایت احتیاج دارند؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography textAlign={'justify'} fontSize={{ lg: '18px', md: '1.5vw', sm: '2vw', xs: '3vw' }}>میتوان گفت که بیشتر کسب و کارهایی که در حال حاضر در ایران فعال هستند به سایت نیاز دارن، و خب این مورد رو هم باید بدونید طیف گسترده ای از مخاطبان و کاربران در فضای وب هستند و این فرصتی را برای شما بوجود خواهد آورد که از این فضا برای معرفی خود و محصولات یا خدمات خود استفاده کنید. این را هم باید بدانید که وبسایت شما ویترین یا همان مغازه یا دفتر شما در فضای وب به حساب میاد و با حضور در آن شما میتونین کاربران بسیار زیادی رو به سمت خود جذب کنید.</Typography>
                    </AccordionDetails>
                  </Accordion>


                </Stack>
              </Stack>
            </Stack>
            <Box width={"100%"} height={'1000px'} sx={{ translate: '0% -75%', backgroundImage: 'radial-gradient(  30% 40% at -10% 50%, #3D007C 0%, rgb(25,23,27,0) 100%)', position: 'absolute' }}></Box>
            <Box width={"100%"} display={{ md: 'block', xs: 'none' }} height={'1000px'} sx={{ translate: '0% -90%', backgroundImage: 'radial-gradient(  30% 40% at 105% 40%, #3D007C 0%, rgb(25,23,27,0) 100%)', position: 'absolute' }}></Box>
            <Stack ref={price} mx={'auto'} sx={{ width: { lg: '1018px', md: '80%', sm: '80%', xs: '90%' } }}>
              <Stack my={'100px'}>
                <Box><Typography textAlign={'center'} variant='h2' fontFamily={'moraba'} fontSize={{ lg: '42px', md: '3vw', sm: '4vw', xs: '6vw' }}>تعرفه طراحی سایت</Typography></Box>
                <Stack direction={{ md: 'row', xs: 'column' }} my={'64px'} gap={3} justifyContent={'center'} alignItems={'center'}>
                  <Stack gap={4} height={{ md: '460px', sm: '500px', xs: '500px' }} width={{ md: '326px', sm: '450px', xs: "80%" }} alignItems={'center'} justifyContent={'center'} sx={{ backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", borderRadius: '20px' }}>
                    <Stack justifyContent={'center'} alignItems={'center'} width={'115px'} height={"40px"} sx={{ borderRadius: '20px', border: '2px solid ' }}><Typography>پلن برنزی</Typography></Stack>
                    <Typography fontSize={{ lg: '32px', md: '3vw', xs: '32px' }}>14.800.000 تومان</Typography>
                    <Stack alignItems={'center'} gap={1}>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>دامنه ir</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>اخذ ساماندهی</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>سئو  برندینگ</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>پشتیبانی یک ساله</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>آموزش رایگان</Typography>

                    </Stack>
                    <Button href='tel:09982259628' variant='contained' fontFamily={'moraba'} sx={{ backgroundColor: 'white.main', color: '#000', fontFamily: 'moraba', fontSize: '12px', borderRadius: '30px', width: '164px', '&:hover': { color: '#fff' } }} >همین الان شروع کنید</Button>
                  </Stack>
                  <Stack gap={7} height={{ md: '600px', sm: '650px', xs: '650px' }} width={{ md: '326px', sm: '450px', xs: "80%" }} alignItems={'center'} justifyContent={'center'} sx={{ backgroundColor: 'secondary.main', borderRadius: '20px' }}>
                    <Stack justifyContent={'center'} alignItems={'center'} width={'115px'} height={"40px"} sx={{ borderRadius: '20px', border: '2px solid ' }}><Typography>پلن طلایی</Typography></Stack>
                    <Typography fontSize={{ lg: '32px', md: '3vw', xs: '32px' }}>24.800.000 تومان</Typography>
                    <Stack alignItems={'center'} gap={1}>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>دامنه com</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>اخذ ساماندهی</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>دریافت اینماد</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>سئو  برندینگ</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>پشتیبانی یک ساله</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>آموزش رایگان</Typography>

                    </Stack>
                    <Button href='tel:09982259628' variant='contained' fontFamily={'moraba'} sx={{ backgroundColor: 'white.main', color: '#000', fontFamily: 'moraba', fontSize: '12px', borderRadius: '30px', width: '164px', '&:hover': { color: '#fff' } }} >همین الان شروع کنید</Button>

                  </Stack>
                  <Stack gap={4} height={{ md: '460px', sm: '500px', xs: '500px' }} width={{ md: '326px', sm: '450px', xs: "80%" }} alignItems={'center'} justifyContent={'center'} sx={{ backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", borderRadius: '20px' }}>
                    <Stack justifyContent={'center'} alignItems={'center'} width={'115px'} height={"40px"} sx={{ borderRadius: '20px', border: '2px solid ' }}><Typography>پلن نقره ای</Typography></Stack>
                    <Typography fontSize={{ lg: '32px', md: '3vw', xs: '32px' }}>19.800.000 تومان</Typography>
                    <Stack alignItems={'center'} gap={1}>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>دامنه com</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>اخذ ساماندهی</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>سئو  برندینگ</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>پشتیبانی یک ساله</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>آموزش رایگان</Typography>

                    </Stack>
                    <Button href='tel:09982259628' variant='contained' fontFamily={'moraba'} sx={{ backgroundColor: 'white.main', color: '#000', fontFamily: 'moraba', fontSize: '12px', borderRadius: '30px', width: '164px', '&:hover': { color: '#fff' } }} >همین الان شروع کنید</Button>
                  </Stack>
                </Stack>
              </Stack>
              <Stack ref={contactUs} marginBottom={'100px'} width={'100%'} py={'20px'} height={{ md: '500px', xs: 'auto' }} justifyContent={'center'} alignItems={'center'} bgcolor={'secondary.main'} sx={{ borderRadius: '10px' }}>
                <Stack width={'60%'} mx={'auto'} gap={4}>
                  <Stack gap={4}>
                    <Typography textAlign={'center'} variant='h2' fontFamily={'moraba'} fontSize={{ lg: '42px', md: '3vw', sm: '32px', xs: '22px' }}>خب منتظر چی هستی؟</Typography>
                  </Stack>
                  <Stack direction={{ md: 'row', xs: 'column' }} justifyContent={'center'} gap={1}>
                    <Button href='tel:09982259628' variant='contained' sx={{ backgroundColor: 'primary.main', color: 'white.main', fontSize: { lg: '32px', md: '24px', sm: '26px', xs: '24px' }, borderRadius: '20px', padding: '0px 40px', '&:hover': { backgroundColor: 'primary.main' } }}>09982259628</Button>
                    <Button href='tel:09982259628' variant='contained' sx={{ backgroundColor: 'white.main', color: 'secondary.main', fontSize: { lg: '32px', md: '24px', sm: '26px', xs: '24px' }, fontFamily: 'moraba', borderRadius: '20px', padding: '0px 40px', '&:hover': { backgroundColor: 'white.main' } }}>تماس با ما</Button>

                  </Stack>
                </Stack>

              </Stack>
              <Footer />
            </Stack>
          </Box>
          {/* <Box>
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{ position: 'absolute', bottom: 16, right: 16 }}
              icon={<SpeedDialIcon />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          </Box> */}

        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
