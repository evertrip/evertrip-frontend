import {Box, Container, TextField } from "@mui/material";
import React, { useState, useRef, useEffect } from 'react';
import SlideCards from "../components/SlideCards";
import GridCards from "../components/GridCards";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CardContents from '../components/CardContent'

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SearchTypeBox from "../seachComponent/SearchTypeBox";
import SearchBoxForTag from "../seachComponent/SearchBoxForTag";



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
  },
  {
    title: "Mountain Adventure",
    date: "2024-04-18",
    description: "Explore the heights with this thrilling mountain adventure.",
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

const Main: React.FC = () => {
  const [value, setValue] = useState<string>('best');
  const [searchTags, setSearchTags] = useState<string[]>([]);
  const [searchContent, setSearchContent] = useState<string>('');
  const searchRef = useRef<HTMLDivElement>(null);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log(JSON.stringify({
        searchContent,
        searchTags
      }));
    }
  };

  return (
    <Container sx={{ marginTop: { xs: '30px', md: '60px' } }}>
      <Box sx={{ width: '100%', overflow: 'hidden', paddingBottom: '50px' }}>
        <img src="/images/banner.jpg" alt="Main Banner" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
        <Box
          ref={searchRef}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '800px',
            padding: '10px',
            borderRadius: '4px',
            margin: '0 auto',
            marginTop: '-200px',
            gap : "10px"
          }}
        >
          <TextField
            sx={{
              backgroundColor : "white",
              width : '100%'
            }}
            variant="outlined"
            placeholder="검색"
            fullWidth
            InputLabelProps={{
              shrink: false // 레이블이 올라가는 효과를 비활성화
            }}
            value={searchContent}
            onChange={(e) => setSearchContent(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <SearchBoxForTag 
          setTags={setSearchTags}
          handleEnterKeyPress={handleKeyPress}          />
        </Box>
      </Box>

      <Box sx={{ width: '100%', borderBottom: 1, borderTop: 1, borderColor: 'divider', marginBottom: '30px' }}>
        <Tabs value={value} onChange={(event: React.SyntheticEvent, newValue: string) => setValue(newValue)} textColor="primary" indicatorColor="primary" aria-label="primary tabs example">
          <Tab value="best" label="BEST 30" style={{ fontSize: '18px' }} />
          <Tab value="view" label="VIEW 30" style={{ fontSize: '18px' }} />
        </Tabs>
        {value === 'best' && <SlideCards contents={best30} />}
        {value === 'view' && <SlideCards contents={view30} />}
      </Box>

      <Box>
        <h1>NEW 게시글</h1>
        <GridCards contents={allContents} />
      </Box>
    </Container>
  );
};

export default Main;