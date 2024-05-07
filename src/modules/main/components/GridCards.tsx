import React, { useState, useEffect } from 'react';
import { Box, Container, Grid } from '@mui/material';
import OneGridCard from './OneGridCard';
import CardContents from './CardContent';

interface CardsGridProps {
  contents: CardContents[];
}

const GridCards: React.FC<CardsGridProps> = ({ contents }) => {
  const [visibleCards, setVisibleCards] = useState<CardContents[]>([]);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    loadMoreCards(); 
  }, []);

  const loadMoreCards = () => {
    setVisibleCards(prevCards => {
      const nextCards = contents.slice(prevCards.length, prevCards.length + 8);
      if (prevCards.length + nextCards.length === contents.length) {
        setAllLoaded(true);
      }
      return [...prevCards, ...nextCards];
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.offsetHeight && !allLoaded) {
        loadMoreCards();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }); 

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} style={{ rowGap: '40px' }}>
        {visibleCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <OneGridCard 
              contents={card} 
              onCardClick={() => window.location.href = card.clickUrl}
            />
          </Grid>
        ))}
      </Grid>
      {allLoaded && (
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
}

export default GridCards;
