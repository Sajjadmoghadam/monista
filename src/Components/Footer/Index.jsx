import { Box, ButtonGroup, IconButton, Typography ,Stack } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

import React from 'react'

export default function Footer
() {
  return (
    <>
    <Stack direction={{md:'row', xs:'column'}} alignItems={'center'} px={'20px'} justifyContent={'space-between'} height={'100px'} sx={{backgroundImage: 'linear-gradient(271deg, #3D007C 0%, #A274FF 100%)' , borderRadius:'30px 30px 0px 0px'}}>

      <Box><Typography fontSize={'36px'}>با مونیستا معین بمانید!</Typography></Box>
      
        <Box>
          <IconButton className='mamad' sx={{color:'#000'}} href='#'><InstagramIcon/></IconButton>
          <IconButton sx={{color:'#000'}} href='#'><WhatsAppIcon/></IconButton>
          <IconButton sx={{color:'#000'}} href='#'><TelegramIcon/></IconButton>
        </Box>
      


    </Stack>
    
    </>
  )
}
