import React from 'react'
import { Box,List ,ListItemText,FormControl,InputLabel,Input,InputAdornment,IconButton, Typography,Divider,MenuItem} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Post } from '../data';
import PopularArticle from './PopularArticle';
const LeftSidebar = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ flex: 1, borderRight: '1px solid gray', marginTop: '8%' }}>
      {/* search  */}
      <FormControl sx={{ ml: 2,mb:5, width: '30ch' }} variant="filled">
          <InputLabel sx={{color:'gray'}}>Password</InputLabel>
          <Input
            type='text'
            endAdornment={
              <InputAdornment position="end">
                <IconButton  sx={{color:'gray'}}><SearchIcon/></IconButton>
              </InputAdornment>
            }
          />
      </FormControl>
      {/* category */}
      <List sx={{ width: '90%', bgcolor: '#121212', borderRadius: 3, marginLeft: '5%' }} component="nav">
        {Post && Post.map((item,index)=>(
          <div key={item.id}>
        <MenuItem
          selected={selectedIndex === index}
          onClick={(event) => handleListItemClick(event, index)}>
            <ListItemText primary={item.category} />
          <Typography variant="body2" color="gray">(2)</Typography>
        </MenuItem>
        <Divider color="gray"/>
          </div>
        ))}
      </List>
      <Box>
        <PopularArticle/>
      </Box>
      <Box sx={{ margin: '5%'}}>
        <Typography variant='h5' component="p" sx={{fontStyle:'italic',marginBottom:'10px'}}>Paragraph</Typography>
        <Typography component="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut.</Typography>
      </Box>
    </Box>
  )
}

export default LeftSidebar