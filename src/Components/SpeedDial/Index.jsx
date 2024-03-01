import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import './style.css'
import { Button } from '@mui/material';



export default function BasicSpeedDial() {
  return (
    
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, left: 16 ,}}
        icon={<img className='speedDial' src='assets/image/fave-icon-light.png'/>}
      >
          <SpeedDialAction
            key={'eitaa'}
            icon={<Button href='https://eitaa.ir/moeinsta'><img className='speedDialIteme' src="assets/image/eitaa.png" alt="" /></Button>}
            />
          <SpeedDialAction
            key={'rubika'}
            icon={<Button href='https://rubika.ir/moeinsta'><img className='speedDialIteme' src="assets/image/rubika.png" alt="" /></Button>}
            />
          <SpeedDialAction
            key={'bale'}
            icon={<Button><img className='speedDialIteme' src="assets/image/bale.png" alt="" /></Button>}
            />
          <SpeedDialAction
            key={'telegram'}
            icon={<Button href='https://t.me/moeinsta0'><img className='speedDialIteme' src="assets/image/telegram.png" alt="" /></Button>}
            />
          <SpeedDialAction
            key={'whatsapp'}
            icon={<Button href='https://wa.me/09982259628' ><img className='speedDialIteme' src="assets/image/whatsapp.png" alt="" /></Button>}
            />
      </SpeedDial>
   
  );
}
