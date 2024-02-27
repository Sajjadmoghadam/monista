import {  Button, Stack, Box, IconButton } from '@mui/material'
import WestIcon from '@mui/icons-material/West';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect } from 'react'
import style from './style.css'

export default function Header(props) {
  useEffect(()=>{
    console.log(props);
  },[])
  return (
    <>
      <Stack className='headercontainer' direction={{md:'row',sm:'row-reverse',xs:'row-reverse'}} justifyContent={'space-between'} alignItems={'center'} px={'20px'} py={'16px'}> 
        
          <img className='mainlogo'  src='./assets/image/logo.png' />
          <Stack display={{md:'flex' , sm:'none',xs:'none'}} direction={'row'}>

          <Button sx={{color:'white.main', fontSize:{lg:'20px',md:'16px'}, marginRight:{lg:'52px',md:'20px'}}}>خدمات ما </Button>
          <Button sx={{color:'white.main', fontSize:{lg:'20px',md:'16px'},marginRight:{lg:'52px',md:'20px'}}}>نمونه کار های ما  </Button>
          <Button sx={{color:'white.main', fontSize:{lg:'20px',md:'16px'},marginRight:{lg:'52px',md:'20px'}}}>سوالات متداول</Button>
          <Button sx={{color:'white.main', fontSize:{lg:'20px',md:'16px'}}}>تعرفه ها</Button>

          </Stack>
          <Box display={{md:'block',sm:'none', xs:'none'}}><Button size='large'   sx={{borderRadius:'16px',border:'2px solid #A274FF',color:'white.main','&:hover':{backgroundColor:'secondary.main',border: '2px solid #3D007C'}}} endIcon={<WestIcon/>}> تماس با ما </Button></Box>
          <Box display={{md:'none',sm:'block'}}><IconButton  size= {'large'} color='white.main' ><MenuIcon sx={{color:'white.main',fontSize:'40px'}} /></IconButton></Box>
          
      </Stack>



    </>
  )
}
