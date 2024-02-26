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
  const ourServices=useRef()
  const portfolio=useRef()
  const faq =useRef()
  const price =useRef()
  const contactUs= useRef()
  console.log(contactUs);
 

  return (

    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={MoeinstaTheme} >
          <CssBaseline />
          <Box className='firstdiv'>
            <Header ourService portfolio faq price contactUs scroll />
            <Stack mx={'auto'} sx={{ width: { lg: '1018px', md: '80%', sm: '80%', xs: '90%' } }}>
              <Stack  direction={'column'} alignItems={'center'} justifyContent={'center'} sx={{ height: { lg: '80vh', md: '60vh', sm: '60vh', xs: '50vh' }, }}>
                <Typography textAlign={'center'} fontFamily={'moraba'} fontSize={{ lg: '72px', md: '6vw', sm: '6vw', xs: '6vw' }} > بهترین ها را از مونیستا بخواهید!<br /> ما تفاوت ها را رقم میزیم </Typography>
                <Typography fontSize={{ lg: '24px', md: '2vw', sm: '2vw', xs: '3vw' }} textAlign={'center'} marginBottom={'24px'} marginTop={'64px'} sx={{ width: '100%' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography>
                <Button onClick={scroll} size='large' endIcon={<WestIcon />} sx={{ border: '2px solid #A274FF', borderRadius: '16px', color: 'white.main' }}> تماس با ما </Button>
              </Stack>
              <Stack ref={ourServices} sx={{ textAlign: 'center' }}>
                <Typography variant='h2' fontFamily={'moraba'} fontSize={{ lg: '42px', md: '3vw', sm: '3vw', xs: '4vw' }}>گروه ما چه خدماتی ارائه میدهد؟</Typography>
                <Typography textAlign={'center'} fontSize={{ lg: '24px', md: '2vw', sm: '2vw', xs: '3vw' }} sx={{ marginBottom: '57px', marginTop: '57px' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography>
              </Stack>
              <Stack display={{lg:'none',md:'flex',sm:'flex',xs:'flex'}}>
              <MobileOurServices/>
            </Stack>
            </Stack>
            <Stack display={{ lg: 'flex', md: 'none', sm: 'none', xs: 'none' }} >
              <OurServices />
              <Box className='services-circle' sx={{ translate: '-10% 100%' }}></Box>
              <Box className='services-circle' sx={{ translate: '-550% -25%' }}></Box>
              <Box className='services-circle' sx={{ translate: '-750% 150%' }}></Box>
            </Stack>
            <Stack mx={'auto'}  sx={{ width: { lg: '1018px', md: '80%', sm: '80%', xs: '90%' }, borderRadius: '16px' }}>
              <Stack ref={portfolio} direction={{lg:'row', md:'row', sm:'column', xs:'column'}} gap={{md:0,xs:3}} p={'48px'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} height={{ md :'430px' , xs:'auto'}} my={'118px'} sx={{ backgroundImage: 'linear-gradient(81deg, #CC74FF 0%, #6F39BD 29%, #3D007C 100%)', borderRadius: '16px', zIndex: 10 }}>
                <Box width={{md:'60%',xs:'90%'}}>
                  <Box width={{md:'80%',xs:'100%'}} textAlign={{md:'unset',xs:'center'}}>
                    <Typography variant='h3' fontFamily={'moraba'} fontSize={'28px'} paddingBottom={'36px'}>نمونه کارهای ما </Typography>
                    <Typography textAlign={'justify'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</Typography>
                  </Box>
                </Box>
                <Stack width={{md:'40%',xs:'90%'}} justifyContent={'center'} sx={{ translate: {md:'0px -15px',xs:'0px'} }}><Portfolio /></Stack>
              </Stack>
              <Stack ref={faq} direction={'column'} alignItems={'center'} justifyContent={'center'} width={'80%'} mx={'auto'}>
                <Typography variant='h2' fontFamily={'moraba'} fontSize={{ lg: '42px', md: '3vw', sm: '4vw', xs: '5vw' }}>سوالات متداول</Typography>
                <Typography textAlign={'center'} fontSize={{ lg: '24px', md: '2vw', sm: '2vw', xs: '3vw' }} padding={'54px 0 27px 0px'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography>
                <Stack  >
                  <Accordion className='faq' expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", marginBlock: '8px' }} >
                    <AccordionSummary expandIcon={<ArrowDownwardIcon size={'large'} sx={{ color: 'white.main' }} />}>
                      <Typography sx={{}} fontSize={{ lg: '24px', md: '2vw', sm: '2vw', xs: '3vw' }}>بعد از سفارش سایت مدت زمان طراحی سایت چقدر است؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography textAlign={'justify'} fontSize={{ lg: '18px', md: '2vw', sm: '2vw', xs: '3vw' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className='faq' expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", marginBlock: '8px' }} >
                    <AccordionSummary expandIcon={<ArrowDownwardIcon size={'large'} sx={{ color: 'white.main' }} />}>
                      <Typography sx={{}} fontSize={{ lg: '24px', md: '2vw', sm: '2vw', xs: '3vw' }}>بعد از سفارش سایت مدت زمان طراحی سایت چقدر است؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography textAlign={'justify'} fontSize={{ lg: '18px', md: '2vw', sm: '2vw', xs: '3vw' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className='faq' expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", marginBlock: '8px' }} >
                    <AccordionSummary expandIcon={<ArrowDownwardIcon size={'large'} sx={{ color: 'white.main' }} />}>
                      <Typography sx={{}} fontSize={{ lg: '24px', md: '2vw', sm: '2vw', xs: '3vw' }}>بعد از سفارش سایت مدت زمان طراحی سایت چقدر است؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography textAlign={'justify'} fontSize={{ lg: '18px', md: '2vw', sm: '2vw', xs: '3vw' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</Typography>
                    </AccordionDetails>
                  </Accordion>
              
                </Stack>
              </Stack>
            </Stack>
            <Box width={"100%"} height={'1000px'} sx={{ translate: '0% -75%', backgroundImage: 'radial-gradient(  30% 40% at -10% 50%, rgba(162, 116, 255, 0.80) 0%, rgb(25,23,27,0) 100%)', position: 'fixed' }}></Box>
            <Box width={"100%"} height={'1000px'} sx={{ translate: '0% -90%', backgroundImage: 'radial-gradient(  30% 40% at 105% 40%, rgba(162, 116, 255, 0.80) 0%, rgb(25,23,27,0) 100%)', position: 'fixed' }}></Box>
            <Stack ref={price} mx={'auto'} sx={{ width: { lg: '1018px', md: '80%', sm: '80%', xs: '90%' } }}>
              <Stack my={'100px'}>
                <Box><Typography textAlign={'center'} variant='h2' fontFamily={'moraba'} fontSize={{ lg: '42px', md: '3vw', sm: '4vw', xs: '5vw' }}>تعرفه طراحی سایت</Typography></Box>
                <Stack direction={{md:'row', xs:'column'}} my={'64px'} gap={1} justifyContent={'center'} alignItems={'center'}>
                  <Stack gap={4} height={{md:'460px',sm:'500px',xs:'550px'}} width={{md:'326px',sm:'450px' ,xs:"80%"}} alignItems={'center'} justifyContent={'center'} sx={{ backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", borderRadius: '20px' }}>
                    <Stack justifyContent={'center'} alignItems={'center'} width={'115px'} height={"40px"} sx={{ borderRadius: '20px', border: '2px solid ' }}><Typography>پلن حرفه ای</Typography></Stack>
                    <Typography fontSize={{lg:'32px',md:'3vw'}}>24.800.00 سالیانه</Typography>
                    <Stack alignItems={'center'} gap={1}>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>دامنه بین المللی</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>اخذ ساماندهی</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>سئو  برندینگ</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>طراحی بنر متحرک</Typography>
                    </Stack>
                    <Button variant='contained' fontFamily={'moraba'} sx={{ backgroundColor: 'white.main', color: '#000', fontFamily: 'moraba', fontSize: '12px', borderRadius: '30px', width: '164px' }} >همین الان شروع کنید</Button>
                  </Stack>
                  <Stack gap={7} height={{md:'600px',sm:'650px',xs:'700px'}} width={{md:'326px',sm:'450px' ,xs:"80%"}} alignItems={'center'} justifyContent={'center'} sx={{ backgroundColor: 'secondary.main', borderRadius: '20px' }}>
                    <Stack justifyContent={'center'} alignItems={'center'} width={'115px'} height={"40px"} sx={{ borderRadius: '20px', border: '2px solid ' }}><Typography>پلن حرفه ای</Typography></Stack>
                    <Typography fontSize={{lg:'32px',md:'3vw'}}>24.800.00 سالیانه</Typography>
                    <Stack alignItems={'center'} gap={1}>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>دامنه بین المللی</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>اخذ ساماندهی</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>سئو  برندینگ</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>طراحی بنر متحرک</Typography>
                    </Stack>
                    <Button variant='contained' fontFamily={'moraba'} sx={{ backgroundColor: 'white.main', color: '#000', fontFamily: 'moraba', fontSize: '12px', borderRadius: '30px', width: '164px' }} >همین الان شروع کنید</Button>

                  </Stack>
                  <Stack gap={4} height={{md:'460px',sm:'500px',xs:'550px'}} width={{md:'326px',sm:'450px' ,xs:"80%"}} alignItems={'center'} justifyContent={'center'} sx={{ backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", borderRadius: '20px' }}>
                    <Stack justifyContent={'center'} alignItems={'center'} width={'115px'} height={"40px"} sx={{ borderRadius: '20px', border: '2px solid ' }}><Typography>پلن حرفه ای</Typography></Stack>
                    <Typography fontSize={{lg:'32px',md:'3vw'}}>24.800.00 سالیانه</Typography>
                    <Stack alignItems={'center'} gap={1}>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>دامنه بین المللی</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>اخذ ساماندهی</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>سئو  برندینگ</Typography>
                      <Typography fontFamily={'moraba'} fontSize={'24px'}>طراحی بنر متحرک</Typography>
                    </Stack>
                    <Button variant='contained' fontFamily={'moraba'} sx={{ backgroundColor: 'white.main', color: '#000', fontFamily: 'moraba', fontSize: '12px', borderRadius: '30px', width: '164px' }} >همین الان شروع کنید</Button>
                  </Stack>
                </Stack>
              </Stack>
              <Stack ref={contactUs} marginBottom={'100px'} width={'100%'} py={'20px'} height={{ sm:'500px', xs:'auto'}} justifyContent={'center'} alignItems={'center'} bgcolor={'secondary.main'} sx={{ borderRadius: '10px' }}>
                <Stack width={'60%'} mx={'auto'} gap={4}>
                  <Stack gap={4}>
                    <Typography textAlign={'center'} variant='h2' fontFamily={'moraba'} fontSize={{ lg: '42px', md: '3vw', sm: '32px', xs: '32px' }}>خب منتظر چی هستی؟</Typography>
                    <Typography textAlign={'center'} fontSize={{ lg: '24px', md: '2vw', sm: '24px', xs: '24px' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography>
                  </Stack>
                  <Stack direction={{md:'row',xs:'column'}} justifyContent={'center'} gap={1}>
                    <Button variant='contained' sx={{ backgroundColor: 'primary.main', color: 'white.main', fontSize: {lg:'32px',md:'24px',sm:'32px' , xs:'24px'}, fontFamily: 'moraba', borderRadius: '20px', padding: '0px 40px', '&:hover': { backgroundColor: 'primary.main' } }}>09123456789</Button>
                    <Button variant='contained' sx={{ backgroundColor: 'white.main', color: 'secondary.main', fontSize: {lg:'32px',md:'24px',sm:'32px',xs:'24px'}, fontFamily: 'moraba', borderRadius: '20px', padding: '0px 40px', '&:hover': { backgroundColor: 'white.main' } }}>تماس با ما</Button>

                  </Stack>
                </Stack>

              </Stack>
              <Footer />
            </Stack>
          </Box>

        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
