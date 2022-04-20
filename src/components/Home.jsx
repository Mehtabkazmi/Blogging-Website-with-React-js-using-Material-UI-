import React from 'react'
import { Box} from '@mui/material';
import LeftSidebar from './LeftSidebar'; 
import RightSidebar from './RightSidebar';
import BlogList from './BlogList'; 
import './style.css'; 

const Home = () => {
 
  return (
    <>
      <Box sx={{ display: { xs:"none",sm: 'flex' },justifyContent:'space-between'}}>
        <LeftSidebar />
          <BlogList />
          <RightSidebar/>
    </Box>
    
      </>
  )
}


  export default Home