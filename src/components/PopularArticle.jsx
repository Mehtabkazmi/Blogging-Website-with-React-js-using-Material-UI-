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
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {Post && Post.map((item) => (
    <div>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={item.image} />
        </ListItemAvatar>
        <ListItemText
          primary={item.title}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',width:'10px' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {item.subheader}
              </Typography>
            </>
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