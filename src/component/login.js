import React from 'react'
import { Box } from '@mui/system'
import SMbutton from './button'
import SMtextfield from './textfield'


export default function SMlogin() {
  return (
    <Box mt={10} marginLeft={55} 
     
    sx={{
        width: 600,
        height: 600,
        border: '4px solid #2a3eb1',
        backgroundColor: '#2a3eb1',
        borderRadius: '10px',
    
        
      }}
    >
      <SMtextfield 
      id="outlined-select-currency" 
      label = "First Name"
      />
      <SMtextfield label = "Last Name"/>
      <SMtextfield label = "Email" type="Email"/>

      <SMbutton label="Login"/>
      

      


    </Box>
  )
}
