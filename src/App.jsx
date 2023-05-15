import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Card, CardHeader, Container, Divider, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

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
            <Box component="p">
              {'Vaccine Table'}
            </Box>
            <Box component="span">
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
              
              {index}
              
               </Card>
          ))}
           
        </Card>
    </div>
    </>
  )
}

export default App
