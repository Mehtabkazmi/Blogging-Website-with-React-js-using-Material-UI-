import React from 'react'
import { Box ,BottomNavigation,BottomNavigationAction} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import CategoryIcon from '@mui/icons-material/Category';
import Paper from '@mui/material/Paper';
const Navbarbottom = () => {
    const [value, setValue] = React.useState('/home');
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
   <Box sx={{ pb: 7,display: { xs: "block", sm: "none" },backgroundColor:'#0a1929'  }}>
      {/* <BlogList /> */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
              <BottomNavigation
          showLabels={false}
          value={value}
                  onChange={handleChange}
                  sx={{backgroundColor:'#192b3b'}}
        >
          <BottomNavigationAction label="home" value="/home" icon={<HomeIcon className='bottomIcon'/>} component={Link} to='/home'/>
          <BottomNavigationAction label="Menu" value="/rightsidebar" icon={<ListIcon className='bottomIcon'/> } component={Link} to='/rightsidebar'/>                
          <BottomNavigationAction label="Category" value="/leftsidebar" icon={<CategoryIcon className='bottomIcon'/>}  component={Link} to='/leftsidebar'/>
        </BottomNavigation>
      </Paper>
    </Box>
  )
}

export default Navbarbottom