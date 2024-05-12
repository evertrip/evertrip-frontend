import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CardContent from '@mui/material/CardContent';

import { Box, Container } from '@mui/material';
import CardContents from './CardContent'

interface CardProps {
  contents: CardContents;
  onCardClick: () => void;
}


const OneCard: React.FC<CardProps> = ({ contents, onCardClick }) => {
   return(
    <Container sx={{
      padding: '0px',
      position: 'relative'
    }}>
      <Card onClick={onCardClick} sx={{ cursor: 'pointer', height :'250px', width : '200px', margin: '10px'}}>
        <Box sx={{ position: 'relative' }}>
          <Box sx={{
            position: 'absolute',
            top: 10, 
            right: 10,
            zIndex: 9999,
            pointerEvents: 'auto',
            display: 'flex'}}>
            <IconButton 
              aria-label="add to favorites" size='small' sx={{ color: 'white' }}
              onClick={(event) => {
                event.stopPropagation();
                console.log("Favorite clicked");  
              }}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton 
            aria-label="share" size='small' 
            sx={{ color: 'white' }}
            onClick={(event) => {
              event.stopPropagation();  
              console.log("Share clicked");  
            }}>
              <ShareIcon />
            </IconButton>
          </Box>
          <Box>
            <CardMedia
              component="img"
              height="150px" 
              image={contents.imageUrl}
            />
            <CardContent sx={{
                width : '100%',
                height : '100%',
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                padding: '0',
                backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: 0, transition: 'opacity 0.3s',
                '&:hover': {
                  opacity: 1
                }
              }}>
              <Typography variant="body2" sx={{
                margin: '10px',

                wordBreak: 'break-all',
                overflow: 'auto', 
                textOverflow: 'ellipsis', 
                whiteSpace: 'normal'
              }}>
                {contents.description}
              </Typography>
            </CardContent>
            <CardHeader
              style={{
                height: '100px',
                marginBottom : '10px',
                }}
              title={<Typography 
                variant="h6"
                fontSize='18px' 
                sx={{
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,  // 텍스트를 2줄로 제한
                  whiteSpace: 'auto',
                }}
              >{contents.title}</Typography>}
              subheader={<Typography variant="subtitle1"
              sx={{
                fontSize: '14px', 
              }}
              color="text.secondary" >{contents.date}</Typography>}
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 0 }}
            />
          </Box>
        </Box>
      </Card>
    </Container>
   );
  }
  
export default OneCard;
