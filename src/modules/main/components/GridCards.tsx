import React, { useState, useEffect } from 'react';
import { Container, Grid, Button } from '@mui/material';
import OneGridCard, { CardContent } from './OneGridCard';

const cardsContents: CardContent[] = [
    {
        title: "Mountain Adventure",
        date: "2024-04-18",
        description: "Explore the heights with this thrilling mountain adventure.",
        imageUrl: "/images/snowMountain.jpg",
        clickUrl: "/"
      },
      {
        title: "Desert Expedition",
        date: "2024-04-19",
        description: "Feel the sun and sand in an exciting desert rally.",
        imageUrl: "/images/desert.jpg",
        clickUrl: "/"
      },
      {
        title: "Swimming Competition",
        date: "2024-04-20",
        description: "Dive into the action in this thrilling swimming event.",
        imageUrl: "/images/swimmingGirl.jpg",
        clickUrl: "/"
      },  {
        title: "Mountain Adventure",
        date: "2024-04-18",
        description: "Explore the heights with this thrilling mountain adventure.",
        imageUrl: "/images/snowMountain.jpg",
        clickUrl: "/"
      },
      {
        title: "Desert Expedition",
        date: "2024-04-19",
        description: "Feel the sun and sand in an exciting desert rally.",
        imageUrl: "/images/desert.jpg",
        clickUrl: "/"
      },
      {
        title: "Swimming Competition",
        date: "2024-04-20",
        description: "Dive into the action in this thrilling swimming event.",
        imageUrl: "/images/swimmingGirl.jpg",
        clickUrl: "/"
      },  {
        title: "Mountain Adventure",
        date: "2024-04-18",
        description: "Explore the heights with this thrilling mountain adventure.",
        imageUrl: "/images/snowMountain.jpg",
        clickUrl: "/"
      },
      {
        title: "Desert Expedition",
        date: "2024-04-19",
        description: "Feel the sun and sand in an exciting desert rally.",
        imageUrl: "/images/desert.jpg",
        clickUrl: "/"
      },
      {
        title: "Swimming Competition",
        date: "2024-04-20",
        description: "Dive into the action in this thrilling swimming event.",
        imageUrl: "/images/swimmingGirl.jpg",
        clickUrl: "/"
      },  {
        title: "Mountain Adventure",
        date: "2024-04-18",
        description: "Explore the heights with this thrilling mountain adventure.",
        imageUrl: "/images/snowMountain.jpg",
        clickUrl: "/"
      },
      {
        title: "Desert Expedition",
        date: "2024-04-19",
        description: "Feel the sun and sand in an exciting desert rally.",
        imageUrl: "/images/desert.jpg",
        clickUrl: "/"
      },
      {
        title: "Swimming Competition",
        date: "2024-04-20",
        description: "Dive into the action in this thrilling swimming event.",
        imageUrl: "/images/swimmingGirl.jpg",
        clickUrl: "/"
      },  {
        title: "Mountain Adventure",
        date: "2024-04-18",
        description: "Explore the heights with this thrilling mountain adventure.",
        imageUrl: "/images/snowMountain.jpg",
        clickUrl: "/"
      },
      {
        title: "Desert Expedition",
        date: "2024-04-19",
        description: "Feel the sun and sand in an exciting desert rally.",
        imageUrl: "/images/desert.jpg",
        clickUrl: "/"
      },
      {
        title: "Swimming Competition",
        date: "2024-04-20",
        description: "Dive into the action in this thrilling swimming event.",
        imageUrl: "/images/swimmingGirl.jpg",
        clickUrl: "/"
      },  {
        title: "Mountain Adventure",
        date: "2024-04-18",
        description: "Explore the heights with this thrilling mountain adventure.",
        imageUrl: "/images/snowMountain.jpg",
        clickUrl: "/"
      },
      {
        title: "Desert Expedition",
        date: "2024-04-19",
        description: "Feel the sun and sand in an exciting desert rally.",
        imageUrl: "/images/desert.jpg",
        clickUrl: "/"
      },
      {
        title: "Swimming Competition",
        date: "2024-04-20",
        description: "Dive into the action in this thrilling swimming event.",
        imageUrl: "/images/swimmingGirl.jpg",
        clickUrl: "/"
      },  {
        title: "Mountain Adventure",
        date: "2024-04-18",
        description: "Explore the heights with this thrilling mountain adventure.",
        imageUrl: "/images/snowMountain.jpg",
        clickUrl: "/"
      },
      {
        title: "Desert Expedition",
        date: "2024-04-19",
        description: "Feel the sun and sand in an exciting desert rally.",
        imageUrl: "/images/desert.jpg",
        clickUrl: "/"
      },
      {
        title: "Swimming Competition",
        date: "2024-04-20",
        description: "Dive into the action in this thrilling swimming event.",
        imageUrl: "/images/swimmingGirl.jpg",
        clickUrl: "/"
      },  {
        title: "Mountain Adventure",
        date: "2024-04-18",
        description: "Explore the heights with this thrilling mountain adventure.",
        imageUrl: "/images/snowMountain.jpg",
        clickUrl: "/"
      },
      {
        title: "Desert Expedition",
        date: "2024-04-19",
        description: "Feel the sun and sand in an exciting desert rally.",
        imageUrl: "/images/desert.jpg",
        clickUrl: "/"
      },
      {
        title: "Swimming Competition",
        date: "2024-04-20",
        description: "Dive into the action in this thrilling swimming event.",
        imageUrl: "/images/swimmingGirl.jpg",
        clickUrl: "/"
      },  
];

const CardsGrid: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<CardContent[]>([]);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    // 초기 카드 로드
    loadMoreCards();
  }, []);

  const loadMoreCards = () => {
    const nextCards = cardsContents.slice(visibleCards.length, visibleCards.length + (visibleCards.length === 0 ? 12 : 8));
    setVisibleCards(prevCards => [...prevCards, ...nextCards]);
    if (visibleCards.length + nextCards.length === cardsContents.length) {
      setAllLoaded(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.offsetHeight && !allLoaded) {
        loadMoreCards();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCards, allLoaded]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} style={{ rowGap: '40px' }}>
        {visibleCards.map((content, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <OneGridCard 
              content={content} 
              onCardClick={() => window.location.href = content.clickUrl}
            />
          </Grid>
        ))}
      </Grid>
      {allLoaded && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>마지막입니다.</p>
          <Button variant="contained" color="primary" onClick={() => window.scrollTo(0, 0)}>
            위로가기
          </Button>
        </div>
      )}
    </Container>
  );
}

export default CardsGrid;
