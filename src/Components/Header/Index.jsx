import {  Button, Stack } from '@mui/material'
import WestIcon from '@mui/icons-material/West';
import React from 'react'
import style from './style.css'

export default function Header() {
  return (
    <>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mx={'20px'} my={'16px'}> 
        
          <img className='mainlogo'  src='./assets/image/logo.png' />
          <Stack direction={'row'}>

          <Button sx={{color:'white.main', fontSize:'20px', marginRight:'52px'}}>خدمات ما </Button>
          <Button sx={{color:'white.main', fontSize:'20px',marginRight:'52px'}}>نمونه کار های ما  </Button>
          <Button sx={{color:'white.main', fontSize:'20px',marginRight:'52px'}}>سوالات متداول</Button>
          <Button sx={{color:'white.main', fontSize:'20px'}}>تعرفه ها</Button>

          </Stack>
          
            <Button   sx={{borderRadius:'16px',border:'2px solid'}} endIcon={<WestIcon/>}> تماس با ما </Button>
        

        
        
      </Stack>



    </>
  )
}
