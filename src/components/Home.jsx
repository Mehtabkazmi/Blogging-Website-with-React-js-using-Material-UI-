import React from 'react'
import { Box } from '@mui/material';
import LeftSidebar from './LeftSidebar'; 
import BlogList from './BlogList'; 
import RightSidebar from './RightSidebar';
import './style.css'; 
const Home=()=> {
  return (
      <Box sx={{display:'flex',justifyContent:'space-between'}}>
          <LeftSidebar />
          <BlogList />
          <RightSidebar/>
    </Box>
  )
}

export default Home