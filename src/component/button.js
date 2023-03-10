import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function SMbutton(props) {
    const value = props;
  return (
    <Stack spacing={2}  direction="row">
   
    <Button variant="contained" color="success" size='large'>{value.label}</Button>
    
  </Stack>
  )
}
