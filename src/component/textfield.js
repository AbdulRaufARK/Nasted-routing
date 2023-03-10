import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SMtextfield(props) {
    const value = props;
  return (
    <Box
    component="f"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField 
    id="outlined-textarea" 
    label= {value.label}
    variant="outlined"
    type={value.type}/>
  </Box>
  )
}
