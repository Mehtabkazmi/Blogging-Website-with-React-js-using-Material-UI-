import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Post } from '../data';
const PopularArticle=()=> {
  return (
    <List sx={{ mt:5,width: '90%', bgcolor: '#121212', borderRadius: 3, marginLeft: '5%' }}>
      <Typography variant='h6' component="p" sx={{margin:'10px'}}>Popular Posts</Typography>
          {Post && Post.map((item) => (
    <div>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={item.image} />
        </ListItemAvatar>
        <ListItemText
          primary={
                    <div style={{color:'white'}}>{item.title}</div>
                    }
                  secondary={
                    <div style={{color:'gray'}}>{item.subheader}</div>
                    }
        />
      </ListItem>
    <Divider variant="inset" component="li" />
    </div>
      ))}
    </List>
  );
}


export default PopularArticle