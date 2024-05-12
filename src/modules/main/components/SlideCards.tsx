import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import OneCard from './OneSlideCard';
import { Box, Container } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import CardContents from './CardContent'

interface SlideCardProps {
  contents: CardContents[];
}

const SlideCards: React.FC<SlideCardProps> = ({ contents }) => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [maxCardCount, setMaxCardCount] = useState(4);

  const emptySlidesCount = slidesPerView - contents.length > 0 ? slidesPerView - contents.length : 0;
  const emptySlides = Array.from({ length: emptySlidesCount }, (_, index) => (
    <SwiperSlide key={`empty-${index}`}>
      <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      </Box>
    </SwiperSlide>
  ));

  const updateSlidesPerView = () => {
    if (window.innerWidth >= 1024) {
      setMaxCardCount(4);
      setSlidesPerView(4);
    } else if (window.innerWidth >= 768) {
      setMaxCardCount(3);
      setSlidesPerView(3);
    } else {
      setMaxCardCount(2);
      setSlidesPerView(2);
    }
  };

  useEffect(() => {
    updateSlidesPerView(); // 초기 로드 시 실행
    window.addEventListener('resize', updateSlidesPerView); // 창 크기 조절 시 실행

    return () => {
      window.removeEventListener('resize', updateSlidesPerView); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    };
  }, []);

  return (
    <Container 
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        paddingTop: '20px',
        paddingBottom: '10px'
      }}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={maxCardCount}
        slidesPerGroup={maxCardCount}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        pagination={{ clickable: contents.length > maxCardCount }}
        style={{ 
          position: 'relative', 
          marginBottom: '0px', 
          paddingBottom: '50px',
          alignItems: 'center',
          justifyContent: 'center'  
        }}
      >
        {contents.map((content, index) => (
          <SwiperSlide key={index}>
            <OneCard
              contents={content}
              onCardClick={() => window.location.href = content.clickUrl}
            />
          </SwiperSlide>
        ))}
        {emptySlides}
      </Swiper>
      <button
        className="custom-swiper-button-prev"
        style={{
          cursor: 'pointer',
          border: 'none',
          color: 'black',
          backgroundColor: 'white',
          padding: '4px',
          width: '30px',
          height: '30px',
          position: 'absolute',
          top: '50%',
          left: '-15px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ArrowBackIosIcon fontSize="small" />
      </button>
      <button
        className="custom-swiper-button-next"
        style={{
          cursor: 'pointer',
          border: 'none',
          color: 'black',
          backgroundColor: 'white',
          padding: '4px',
          width: '30px',
          height: '30px',
          position: 'absolute',
          top: '50%',
          right: '-15px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </button>
    </Container>
  );
}

export default SlideCards;
