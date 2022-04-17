import React from 'react'
import { Box,styled,Card,CardHeader, CardMedia,CardContent,CardActions,Collapse, Avatar, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Post } from '../data';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const BlogList = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ flex: 2.5 }}>
      {Post && Post.map((item) => (
      <Card key={item.id} sx={{ maxWidth: '90%',backgroundColor:'#192b3b' ,margin:'20px 5% 0 5%' }}>
      <CardHeader sx={{color:'white'}}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"> {item.avatar} </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt="Paella dish"
      />
      <CardContent>
            <Typography variant="body2" color="gray">{ item.cartContent }</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon  sx={{ color: 'white' }}  />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon  sx={{ color: 'white' }} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ color: 'white' }}/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
              <Typography paragraph sx={{color:'gray'}}>{ item.content}</Typography>
        </CardContent>
      </Collapse>
    </Card>
      ))}
    </Box>
  )
}

export default BlogList