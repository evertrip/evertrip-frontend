import {Box, Container } from "@mui/material";
import React, { useState } from "react";
import SlideCards from "../components/SlideCards";
import GridCards from "../components/GridCards";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CardContents from '../components/CardContent'


const best30: CardContents[] = [
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
    imageUrl: "/images/snowMountain.jpg",
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
    imageUrl: "/images/snowMountain.jpg",
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
    imageUrl: "/images/snowMountain.jpg",
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
    imageUrl: "/images/snowMountain.jpg",
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
    imageUrl: "/images/snowMountain.jpg",
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
    imageUrl: "/images/snowMountain.jpg",
    clickUrl: "/"
  },
];


const view30: CardContents[] = [
  {
    title: "Desert Expedition",
    date: "2024-04-19",
    description: "Feel the sun and sand in an exciting desert rally.",
    imageUrl: "/images/desert.jpg",
    clickUrl: "/"
  },  {
    title: "Mountain Adventure",
    date: "2024-04-18",
    description: "Explore the heights with this thrilling mountain adventure.",
    imageUrl: "/images/desert.jpg",
    clickUrl: "/"
  },
  {
    title: "Desert Expedition",
    date: "2024-04-19",
    description: "Feel the sun and sand in an exciting desert rally.",
    imageUrl: "/images/desert.jpg",
    clickUrl: "/"
  },  {
    title: "Mountain Adventure",
    date: "2024-04-18",
    description: "Explore the heights with this thrilling mountain adventure.",
    imageUrl: "/images/desert.jpg",
    clickUrl: "/"
  },
  {
    title: "Desert Expedition",
    date: "2024-04-19",
    description: "Feel the sun and sand in an exciting desert rally.",
    imageUrl: "/images/desert.jpg",
    clickUrl: "/"
  },  {
    title: "Mountain Adventure",
    date: "2024-04-18",
    description: "Explore the heights with this thrilling mountain adventure.",
    imageUrl: "/images/desert.jpg",
    clickUrl: "/"
  },
  {
    title: "Desert Expedition",
    date: "2024-04-19",
    description: "Feel the sun and sand in an exciting desert rally.",
    imageUrl: "/images/desert.jpg",
    clickUrl: "/"
  },  {
    title: "Mountain Adventure",
    date: "2024-04-18",
    description: "Explore the heights with this thrilling mountain adventure.",
    imageUrl: "/images/desert.jpg",
    clickUrl: "/"
  },
  {
    title: "Desert Expedition",
    date: "2024-04-19",
    description: "Feel the sun and sand in an exciting desert rally.",
    imageUrl: "/images/desert.jpg",
    clickUrl: "/"
  },  {
    title: "Mountain Adventure",
    date: "2024-04-18",
    description: "Explore the heights with this thrilling mountain adventure.",
    imageUrl: "/images/desert.jpg",
    clickUrl: "/"
  },

];

const allContents: CardContents[] = [
  {
    title: "1Mountain Adventure",
    date: "2024-04-18",
    description: "Explore the heights with this thrilling mountain adventure.",
    imageUrl: "/images/fireFlower.jpg",
    clickUrl: "/"
  },
  {
    title: "2Desert Expedition",
    date: "2024-04-19",
    description: "Feel the sun and sand in an exciting desert rally.",
    imageUrl: "/images/fireFlower.jpg",
    clickUrl: "/"
  },
  {
    title: "3Mountain Adventure",
    date: "2024-04-18",
    description: "Explore the heights with this thrilling mountain adventure.",
    imageUrl: "/images/fireFlower.jpg",
    clickUrl: "/"
  },
  {
    title: "4Desert Expedition",
    date: "2024-04-19",
    description: "Feel the sun and sand in an exciting desert rally.",
    imageUrl: "/images/fireFlower.jpg",
    clickUrl: "/"
  },
  {
    title: "5Mountain Adventure",
    date: "2024-04-18",
    description: "Explore the heights with this thrilling mountain adventure.",
    imageUrl: "/images/fireFlower.jpg",
    clickUrl: "/"
  },
  {
    title: "6Desert Expedition",
    date: "2024-04-19",
    description: "Feel the sun and sand in an exciting desert rally.",
    imageUrl: "/images/fireFlower.jpg",
    clickUrl: "/"
  },

];

const Main = () => {
  const [value, setValue] = useState('best');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container  sx={{ marginTop: { xs: '30px', md: '60px' } }}>
      <Box sx={{ width: '100%', height: '400px', overflow: 'hidden', paddingBottom: '50px' }}>
        <img src="/images/banner.jpg" alt="Main Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
      
      <Box sx={{ width: '100%', borderBottom: 1, borderTop: 1, borderColor: 'divider', marginBottom: '30px' }}>
        <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary" aria-label="primary tabs example">
          <Tab value="best" label="BEST 30" style={{fontSize:'18px'}}/>
          <Tab value="view" label="VIEW 30" style={{fontSize:'18px'}}/>
        </Tabs>
        <SlideCards contents={value === 'best' ? best30 : view30} />
      </Box>

      <Box>
        <h1>NEW 게시글</h1>
        <GridCards contents={allContents} />
      </Box>
    </Container>
  );
}

export default Main;