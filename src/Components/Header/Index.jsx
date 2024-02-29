import { Button, Stack, Box, IconButton, Drawer } from '@mui/material'
import WestIcon from '@mui/icons-material/West';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import style from './style.css'

export default function Header({ ourServices, portfolio, faq, price, contactUs }) {

  const toOurServices = () => {
    ourServices.current?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false)
  }
  const toOPortfolio = () => {
    portfolio.current?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false)
  }
  const toFaq = () => {
    faq.current?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false)
  }
  const toPrice = () => {
    price.current?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false)
  }
  const toContact = () => {
    contactUs.current?.scrollIntoView({ behavior: 'smooth' });
     setOpen(false)
  }
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (

    <>
      <Stack className='headercontainer ' zIndex={20} direction={{ md: 'row', sm: 'row-reverse', xs: 'row-reverse' }} justifyContent={'space-between'} alignItems={'center'} px={'20px'} py={'16px'}  sx={{position:'sticky', top:0, right:0 ,backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)'}}>

        <img className='mainlogo' src='./assets/image/logo.png' />
        <Stack display={{ md: 'flex', sm: 'none', xs: 'none' }} direction={'row'}>

          <Button sx={{ color: 'white.main', fontSize: { lg: '20px', md: '16px' }, marginRight: { lg: '52px', md: '20px' } }} onClick={toOurServices}>خدمات ما </Button>
          <Button sx={{ color: 'white.main', fontSize: { lg: '20px', md: '16px' }, marginRight: { lg: '52px', md: '20px' } }} onClick={toOPortfolio}>نمونه کار های ما  </Button>
          <Button sx={{ color: 'white.main', fontSize: { lg: '20px', md: '16px' }, marginRight: { lg: '52px', md: '20px' } }} onClick={toFaq}>سوالات متداول</Button>
          <Button sx={{ color: 'white.main', fontSize: { lg: '20px', md: '16px' } }} onClick={toPrice}>تعرفه ها</Button>

        </Stack>
        <Box display={{ md: 'block', sm: 'none', xs: 'none' }}><Button size='large' onClick={toContact} sx={{ borderRadius: '16px', border: '2px solid #A274FF', color: 'white.main', '&:hover': { backgroundColor: 'secondary.main', border: '2px solid #3D007C' } }} endIcon={<WestIcon />}> تماس با ما </Button></Box>
        <Box display={{ md: 'none', sm: 'block' }}>
          <IconButton onClick={toggleDrawer(true)} size={'large'} color='white.main' ><MenuIcon sx={{ color: 'white.main', fontSize: '40px' }} />
          </IconButton>
        </Box>

      </Stack>
      <Stack className={open ? 'openMenu' : 'closeMenu'} zIndex={20} width={'250px'} sx={{ backgroundColor: '#fff', color: '#000' , position:'fixed',top:0,left:0, height:'100vh'}}>
        <Stack direction={'row-reverse'}><IconButton onClick={toggleDrawer(false)} > <CloseIcon /> </IconButton></Stack>
        <Button sx={{ color: '#000', fontSize:'18px'  }} onClick={toOurServices}>خدمات ما </Button>
          <Button sx={{ color: '#000', fontSize:'18px'  }} onClick={toOPortfolio}>نمونه کار های ما  </Button>
          <Button sx={{ color: '#000', fontSize:'18px'  }} onClick={toFaq}>سوالات متداول</Button>
          <Button sx={{ color: '#000', fontSize:'18px'  }} onClick={toPrice}>تعرفه ها</Button>
      </Stack>



    </>
  )
}
