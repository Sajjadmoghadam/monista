import './App.css';
import Header from './Components/Header/Index';
import Footer from './Components/Footer/Index';
import { createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material';


function App() {
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
    <ThemeProvider theme={MoeinstaTheme} >
      <CssBaseline />
      <Header />

      <Typography sx={{ color: 'white.main',  }}> سلام</Typography>



      <Footer />
    </ThemeProvider>
  </>
);
}

export default App;
