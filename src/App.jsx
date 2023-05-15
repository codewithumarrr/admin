import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Card, CardHeader, Container, Divider, IconButton, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';

function App() {
  const array = Array(5).fill(0);
  const containerObjectCss = {  width: '95vw', marginTop: '25vh', display: 'flex' }
  const stylebar = {width: '20%'}
  return (
    <>
    <div style={containerObjectCss}>
        <div className='sidebar' style={stylebar}></div>
        <Card sx={{
          boxShadow: '1px 1px 10px 0px rgba(0,0,0, .15)',
          bgColor: 'rgba(0,0,0,.40)',
          
        }} >
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '10vh',
            width: '100%',
            bgColor: '#fff'
            

          }}>
            <Typography variant='h5'>Vaccine Table</Typography>
            <Box component="span" sx={{mt:2}}>
              <IconButton>
                <AddIcon/>
              </IconButton>
            </Box>
          </Box>
          <Divider/>
          {array.map((i, index) => (
            <Card sx={{
              width:'1050px',
              height: '30vh',
              bgColor: '#fff',
              my: '25px',
              boxShadow: '1px 1px 3px rgba(0,0,0,.25),-1px -1px 3px rgba(0,0,0,.25)',
               }} >
              
              <Box sx={{display: 'flex', gap: '5px', alignItems: 'center', m: '9px 15px 0px'}}>
              <VaccinesOutlinedIcon sx={{fontSize : '50px'}}/>
                <Typography variant='h5'>
                  Vaccine Name
                </Typography>
              </Box>
              <Divider/>
              
               </Card>
          ))}
           
        </Card>
    </div>
    </>
  )
}

export default App
