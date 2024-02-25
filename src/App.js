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
import { useState } from 'react';


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

  return (

    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={MoeinstaTheme} >
          <CssBaseline />
          <Box className='firstdiv'>
            <Header />
            <Stack mx={'auto'} sx={{ width: '1018px' }}>
              <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} sx={{ height: '80vh', }}>
                <Typography textAlign={'center'} fontFamily={'moraba'} fontSize={'72px'} > بهترین ها را از مونیستا بخواهید!<br /> ما تفاوت ها را رقم میزیم </Typography>
                <Typography fontSize={'24px'} textAlign={'center'} marginBottom={'24px'} marginTop={'64px'} sx={{ width: '825px' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography>
                <Button size='large' endIcon={<WestIcon />} sx={{ border: '2px solid #A274FF', borderRadius: '16px', color: 'white.main' }}> تماس با ما </Button>
              </Stack>
              <Stack sx={{ textAlign: 'center' }}>
                <Typography variant='h2' fontFamily={'moraba'} fontSize={'42px'}>گروه ما چه خدماتی ارائه میدهد؟</Typography>
                <Typography textAlign={'center'} fontSize={'24px'} sx={{ marginBottom: '57px', marginTop: '57px' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography>
              </Stack>
            </Stack>
            <Stack >
              <OurServices />
              <Box className='services-circle' sx={{ translate: '-10% 100%' }}></Box>
              <Box className='services-circle' sx={{ translate: '-550% -25%' }}></Box>
              <Box className='services-circle' sx={{ translate: '-750% 150%' }}></Box>
            </Stack>
            <Stack mx={'auto'} sx={{ width: '1018px', borderRadius: '16px' }}>
              <Stack direction={'row'} p={'48px'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} height={'430px'} my={'118px'} sx={{ backgroundImage: 'linear-gradient(81deg, #CC74FF 0%, #6F39BD 29%, #3D007C 100%)', borderRadius: '16px', zIndex: 10 }}>
                <Box width={'60%'}>
                  <Box width={'80%'}>
                    <Typography variant='h3' fontFamily={'moraba'} fontSize={'28px'} paddingBottom={'36px'}>نمونه کارهای ما </Typography>
                    <Typography textAlign={'justify'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</Typography>
                  </Box>
                </Box>
                <Stack width={'40%'} sx={{ translate: '0px -15px' }}><Portfolio /></Stack>
              </Stack>
              <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} width={'80%'} mx={'auto'}>
                <Typography variant='h2' fontFamily={'moraba'} fontSize={'42px'}>سوالات متداول</Typography>
                <Typography textAlign={'center'} fontSize={'24px'} padding={'54px 0 27px 0px'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography>
                <Stack  >
                  <Accordion className='faq' expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", marginBlock: '8px' }} >
                    <AccordionSummary expandIcon={<ArrowDownwardIcon size={'large'} sx={{ color: 'white.main' }} />}>
                      <Typography sx={{}} fontSize={'24px'}>بعد از سفارش سایت مدت زمان طراحی سایت چقدر است؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography textAlign={'justify'} fontSize={'18px'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className='faq' expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", marginBlock: '8px' }} >
                    <AccordionSummary expandIcon={<ArrowDownwardIcon size={'large'} sx={{ color: 'white.main' }} />}>
                      <Typography sx={{}} fontSize={'24px'}>بعد از سفارش سایت مدت زمان طراحی سایت چقدر است؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography textAlign={'justify'} fontSize={'18px'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className='faq' expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", marginBlock: '8px' }} >
                    <AccordionSummary expandIcon={<ArrowDownwardIcon size={'large'} sx={{ color: 'white.main' }} />}>
                      <Typography sx={{}} fontSize={'24px'}>بعد از سفارش سایت مدت زمان طراحی سایت چقدر است؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography textAlign={'justify'} fontSize={'18px'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Stack>
              </Stack>
            </Stack>
            <Box width={"100%"} height={'1000px'} sx={{ translate: '0% -75%', backgroundImage: 'radial-gradient(  30% 40% at -10% 50%, rgba(162, 116, 255, 0.80) 0%, rgb(25,23,27,0) 100%)', position: 'fixed' }}></Box>
            <Box width={"100%"} height={'1000px'} sx={{ translate: '0% -90%', backgroundImage: 'radial-gradient(  30% 40% at 105% 40%, rgba(162, 116, 255, 0.80) 0%, rgb(25,23,27,0) 100%)', position: 'fixed' }}></Box>
            <Stack mx={'auto'}  sx={{ width: '1018px' }}>
             <Stack my={'100px'}>
             <Box><Typography textAlign={'center'} variant='h2' fontFamily={'moraba'} fontSize={'42px'}>تعرفه طراحی سایت</Typography></Box>
              <Stack direction={'row'} my={'64px'} gap={3} justifyContent={'center'} alignItems={'center'}>
                <Stack gap={4} height={'460px'} width={'326px'} alignItems={'center'} justifyContent={'center'} sx={{ backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", borderRadius: '20px' }}>
                  <Stack justifyContent={'center'} alignItems={'center'} width={'115px'} height={"40px"} sx={{ borderRadius: '20px', border: '2px solid ' }}><Typography>پلن حرفه ای</Typography></Stack>
                  <Typography fontSize={'32px'}>24.800.00 سالیانه</Typography>
                  <Stack alignItems={'center'} gap={1}>
                    <Typography fontFamily={'moraba'} fontSize={'24px'}>دامنه بین المللی</Typography>
                    <Typography fontFamily={'moraba'} fontSize={'24px'}>اخذ ساماندهی</Typography>
                    <Typography fontFamily={'moraba'} fontSize={'24px'}>سئو  برندینگ</Typography>
                    <Typography fontFamily={'moraba'} fontSize={'24px'}>طراحی بنر متحرک</Typography>
                  </Stack>
                  <Button variant='contained' fontFamily={'moraba'} sx={{ backgroundColor: 'white.main', color: '#000', fontFamily: 'moraba', fontSize: '12px', borderRadius: '30px', width: '164px' }} >همین الان شروع کنید</Button>
                </Stack>
                <Stack gap={7} height={'600px'} width={'326px'} alignItems={'center'} justifyContent={'center'} sx={{ backgroundColor: 'secondary.main', borderRadius: '20px' }}>
                <Stack justifyContent={'center'} alignItems={'center'} width={'115px'} height={"40px"} sx={{ borderRadius: '20px', border: '2px solid ' }}><Typography>پلن حرفه ای</Typography></Stack>
                  <Typography fontSize={'32px'}>24.800.00 سالیانه</Typography>
                  <Stack alignItems={'center'} gap={1}>
                    <Typography fontFamily={'moraba'} fontSize={'24px'}>دامنه بین المللی</Typography>
                    <Typography fontFamily={'moraba'} fontSize={'24px'}>اخذ ساماندهی</Typography>
                    <Typography fontFamily={'moraba'} fontSize={'24px'}>سئو  برندینگ</Typography>
                    <Typography fontFamily={'moraba'} fontSize={'24px'}>طراحی بنر متحرک</Typography>
                  </Stack>
                  <Button variant='contained' fontFamily={'moraba'} sx={{ backgroundColor: 'white.main', color: '#000', fontFamily: 'moraba', fontSize: '12px', borderRadius: '30px', width: '164px' }} >همین الان شروع کنید</Button>

                </Stack>
                <Stack gap={4} height={'460px'} width={'326px'} alignItems={'center'} justifyContent={'center'} sx={{ backdropFilter: 'blur(10px)', background: " linear-gradient(180deg, rgba(241, 245, 249, 0.20) 0%, rgba(241, 245, 249, 0.10) 100%)", borderRadius: '20px' }}>
                  <Stack justifyContent={'center'} alignItems={'center'} width={'115px'} height={"40px"} sx={{ borderRadius: '20px', border: '2px solid ' }}><Typography>پلن حرفه ای</Typography></Stack>
                  <Typography fontSize={'32px'}>24.800.00 سالیانه</Typography>
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
             <Stack marginBottom={'100px'} width={'100%'} height={'500px'} justifyContent={'center'} alignItems={'center'} bgcolor={'secondary.main'} sx={{borderRadius:'10px'}}>
              <Stack width={'60%'} mx={'auto'} gap={4}>
              <Stack gap={4}>
                <Typography textAlign={'center'} variant='h2' fontFamily={'moraba'} fontSize={'42px'}>خب منتظر چی هستی؟</Typography>
                <Typography textAlign={'center'} fontSize={'24px'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography>
              </Stack>
              <Stack direction={'row'} justifyContent={'center'} gap={1}>
                <Button variant='contained'sx={{backgroundColor:'primary.main',color:'white.main' ,fontSize:'32px', fontFamily:'moraba', borderRadius:'20px', padding:'0px 40px','&:hover':{backgroundColor:'primary.main'}}}>09123456789</Button> 
                <Button variant='contained'sx={{backgroundColor:'white.main',color:'secondary.main' ,fontSize:'32px', fontFamily:'moraba', borderRadius:'20px',padding:'0px 40px','&:hover':{backgroundColor:'white.main'}}}>تماس با ما</Button> 

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
