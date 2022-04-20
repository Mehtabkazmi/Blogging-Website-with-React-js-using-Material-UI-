import React from 'react'
import { Box,List,ListItemButton ,ListItemIcon,ListItemText,Typography,FormControl,InputLabel,Input,InputAdornment,IconButton  } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DiamondIcon from '@mui/icons-material/Diamond';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MailIcon from '@mui/icons-material/Mail';
import './style.css';

const RightSidebar = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Box sx={{ flex: 1, borderRight: '1px solid gray', marginTop: '8%' }}>
      <Box position="fixed">
      <List sx={{ width: '90%', bgcolor:'#121212',borderRadius:3,marginLeft:'5%'}} component="nav">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}>
          <ListItemIcon sx={{ color: 'gray' }}
          >
            <HomeIcon />
            <ListItemText primary="Home" />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
        selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
          <ListItemIcon sx={{color:'gray'}}>
            <DiamondIcon />
            <ListItemText primary="Fashion" />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
        selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>
          <ListItemIcon sx={{color:'gray'}}>
            <ElectricCarIcon />
            <ListItemText primary="Travel" />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
        selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}>
          <ListItemIcon sx={{color:'gray'}}>
            <InfoIcon />
            <ListItemText primary="About" />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
        selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}>
          <ListItemIcon sx={{color:'gray'}}>
            <ContactPageIcon />
            <ListItemText primary="Contact" />
          </ListItemIcon>
        </ListItemButton>
      </List>
      <Typography component='p' sx={{ color: 'white', textAlign: 'center', marginTop: '10px' }}>Subscribe for newsletter</Typography>
      <FormControl sx={{ ml: 2, width: '30ch' }} variant="filled">
          <InputLabel sx={{color:'gray'}}>Email</InputLabel>
          <Input
            type='email'
            endAdornment={
              <InputAdornment position="end">
                <IconButton  sx={{color:'gray'}}><MailIcon/></IconButton>
              </InputAdornment>
            }
          />
      </FormControl>
        <Typography sx={{ p: 2 }}>Copyright ©{getCurrentYear()} All rights reserved | This is made with  by Mehtab kazmi</Typography>
        </Box>
    </Box>
  )
}

export default RightSidebar
