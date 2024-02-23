import './App.css';
import Header from './Components/Header/Index';
import Footer from './Components/Footer/Index';
import { createTheme, CssBaseline, Stack, ThemeProvider, Typography } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';


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
      <Header />
      




      <Footer />
    </ThemeProvider>
    </CacheProvider>
  </>
);
}

export default App;
