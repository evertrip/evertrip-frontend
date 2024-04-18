import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Box, Container } from '@mui/material';

interface CardProps {
  content: CardContent;
  onCardClick: () => void;
}

export interface CardContent {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  clickUrl: string;
}

const OneCard: React.FC<CardProps> = ({ content, onCardClick }) => {
  return(
    <Container sx={{
      padding: 0,
      margin: 2,
      width: "200px",
      maxWidth: "200px",
      position: 'relative'
    }}>
      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings" size="small" sx={{ color: 'white' }}>
              <MoreVertIcon />
            </IconButton>
          }
          title={<Typography variant="subtitle2">{content.title}</Typography>}
          subheader={<Typography variant="caption" color="text.secondary" sx={{ fontSize: "10px" }}>{content.date}</Typography>}
          sx={{ paddingBottom: 0 }}
        />
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="100px" 
            image={content.imageUrl}
          />
          <CardContent sx={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              opacity: 0, transition: 'opacity 0.3s',
              '&:hover': {
                opacity: 1
              }
            }}>
            <Typography variant="body2" noWrap>
              {content.description}
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ position: 'absolute', bottom: 0, right: 25, display: 'flex' }}>
          <IconButton aria-label="add to favorites" size='small' sx={{ color: 'white' }}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" size='small' sx={{ color: 'white' }}>
            <ShareIcon />
          </IconButton>
        </Box>
      </Card>
    </Container>
   );
  }
  
export default OneCard;
