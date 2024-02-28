import { Box, ButtonGroup, IconButton, Typography ,Stack } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

import React from 'react'

export default function Footer
() {
  return (
    <>
    <Stack direction={{md:'row', xs:'column'}} alignItems={'center'} px={'20px'} justifyContent={{md:'space-between',xs:'center'}} height={'100px'} sx={{backgroundImage: 'linear-gradient(271deg, #3D007C 0%, #A274FF 100%)' , borderRadius:'30px 30px 0px 0px'}}>

      <Box><Typography fontFamily={'moraba'} fontSize={{sm:'36px',xs:'24px'}}>معینستا لذت خدمات حرفه ای!</Typography></Box>
      
        <Box >
          <IconButton className='mamad' sx={{color:{md:'#000',xs:'#fff'}}} href='#'><InstagramIcon/></IconButton>
          <IconButton sx={{color:{md:'#000',xs:'#fff'}}} href='#'><WhatsAppIcon/></IconButton>
          <IconButton sx={{color:{md:'#000',xs:'#fff'}}} href='#'><TelegramIcon/></IconButton>
        </Box>
      


    </Stack>
    
    </>
  )
}
