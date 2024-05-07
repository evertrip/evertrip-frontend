import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CardContents from './CardContent';


interface CardProps {
    contents: CardContents;
    onCardClick: () => void;
  }


  const OneGridCard: React.FC<CardProps> = ({ contents, onCardClick }) => {
    return (
    <Card onClick={onCardClick}  sx={{ maxWidth: 345}}>
      <CardHeader
        title={<Typography variant="h6" overflow='hidden' whiteSpace='nowrap'>{contents.title}</Typography>}
        subheader={<Typography variant="subtitle1" color="text.secondary" >{contents.date}</Typography>}
        />
      <CardMedia
        component="img"
        height="150px"
        image={contents.imageUrl}
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
        {contents.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default OneGridCard;