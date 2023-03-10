import React from 'react'
import Box from '@mui/material/Box';
import SMtextfield from './textfield';
import SMmenuitem from './menuitem';
import SMbutton from './button';

export default function SMsignup() {
  return (
    <Box mt={10} marginLeft={55} 
     
    sx={{
        width: 600,
        height: 600,
        border: '4px solid #2a3eb1',
        backgroundColor: 'primary.dark',
        borderRadius: '10px',
    
        
      }}
    >
      <SMtextfield 
      id="outlined-select-currency" 
      label = "First Name"
      />
      <SMtextfield label = "Last Name"/>
      <SMtextfield label = "Father Name"/>
      <SMtextfield label = "Age"/>
      <SMtextfield label = "Email" type="Email"/>
      <SMmenuitem/>
      <SMbutton label="Signup"/>
      

      


    </Box>
  )
}
