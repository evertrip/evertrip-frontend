import {Box, Container } from "@mui/material";
import React, { useState, useRef, useEffect } from 'react';
import SlideCards from "../components/SlideCards";
import GridCards from "../components/GridCards";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CardContents from '../components/CardContent'

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';



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

const Main = () => {
  const [value, setValue] = useState('best');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [clicked, setClicked] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null); // 검색창의 ref 생성, HTMLDivElement를 명시

  // 외부 클릭 감지 함수
  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setClicked(false); // 검색창 외부 클릭 시 상태를 false로 설정
    }
  };

  useEffect(() => {
    // 전역 클릭 이벤트 리스너 추가
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container  sx={{ marginTop: { xs: '30px', md: '60px' } }}>
        <Box sx={{ width: '100%', height: '400px', overflow: 'hidden', paddingBottom: '50px' }}>
        <img src="/images/banner.jpg" alt="Main Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Box
          ref={searchRef} 
          sx={{ 
            position: 'absolute',
            left: '50%',
            top: '40%',
            transform: 'translate(-50%, -50%)', 
            display: 'flex',
            alignItems: 'center',
            width: '50%',
            maxWidth: '800px',
            minWidth: '500px',
            bgcolor: clicked ? 'white' : 'rgba(255, 255, 255, 0.5)', // 클릭 상태에 따라 배경색 조정
            padding: '10px',
            borderRadius: '4px',
        }}
        onClick={() => setClicked(true)} // 검색창 클릭 시 상태를 true로 설정
        > 
        <SearchIcon style={{paddingRight: '10px'}}/>
        <InputBase
          style={{width : '100%'}}
          placeholder="검색"
          inputProps={{ 'aria-label': 'search' }}
        /></Box>
      </Box>
      
      <Box sx={{ width: '100%', borderBottom: 1, borderTop: 1, borderColor: 'divider', marginBottom: '30px' }}>
        <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary" aria-label="primary tabs example">
          <Tab value="best" label="BEST 30" style={{fontSize:'18px'}}/>
          <Tab value="view" label="VIEW 30" style={{fontSize:'18px'}}/>
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
}

export default Main;