import React, { useState, useEffect } from 'react';
import { Box, Container, Grid } from '@mui/material';
import OneGridCard from './OneGridCard';
import CardContents from './CardContent';

interface GridCardsProps {
  contents: CardContents[];
}

const GridCards: React.FC<GridCardsProps> = ({ contents }) => {

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} style={{ rowGap: '40px' }}>
        {contents.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <OneGridCard 
              contents={card} 
              onCardClick={() => window.location.href = card.clickUrl}
            />
          </Grid>
        ))}
      </Grid>
      {contents.length === 0 && (
        <Box style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center' 
        }}>
          <p style={{ marginRight: '10px' }}>마지막 페이지 입니다</p>
          <p style={{ color: 'blue' }}
            onClick={() => window.scrollTo(0, 0)}
          >
            처음으로
          </p>
        </Box>
      )}
    </Container>
  );
};

export default GridCards;
