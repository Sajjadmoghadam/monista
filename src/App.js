import './App.css';
import Header from './Components/Header/Index';
import Footer from './Components/Footer/Index';
import { Box, Button, createTheme, CssBaseline, Stack, ThemeProvider, Typography } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import WestIcon from '@mui/icons-material/West';
import OurServices from './Components/Swiper/OurServices';



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
      text:{
        primary:'#F1F5F9'
      }
      
    },
    typography:{
      fontFamily: 'iransans , moraba'
  
    }
  }
  
  )

return (

  <>
  <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={MoeinstaTheme} >
      <CssBaseline />
      <Box className='firstdiv'>
      <Header />
      <Stack className='mamad' mx={'auto'}  sx={{width:'1018px'}}>
      <Stack  direction={'column'} alignItems={'center'} justifyContent={'center'} sx={{height:'80vh' ,}}>
      <Typography textAlign={'center'} fontFamily={'moraba'} fontSize={'72px'} > بهترین ها را از مونیستا بخواهید!<br/> ما تفاوت ها را رقم میزیم </Typography>
      <Typography fontSize={'24px'} textAlign={'center'} marginBottom={'24px'} marginTop={'64px'} sx={{width:'825px'}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography>
      <Button size='large' endIcon={<WestIcon/>} sx={{border:'2px solid #A274FF' ,borderRadius:'16px' , color:'white.main'}}> تماس با ما </Button>
      </Stack>
      <Stack sx={{ textAlign:'center'}}>
        <Typography variant='h2' fontFamily={'moraba'} fontSize={'42px'}>گروه ما چه خدماتی ارائه میدهد؟</Typography>
        <Typography  textAlign={'center'} fontSize={'24px'} sx={{marginBottom:'57px', marginTop:'57px'}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Typography> 
      </Stack>
      </Stack>
      <Stack >
      <OurServices/>
      </Stack>
      </Box>
      <Footer />
    </ThemeProvider>
    </CacheProvider>
  </>
);
}

export default App;
