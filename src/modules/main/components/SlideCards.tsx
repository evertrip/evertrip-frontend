import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import OneCard from './OneSlideCard';
import { Container } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import CardContents from './CardContent'


interface SlideCardProps {
  contents: CardContents[];
}

const SlideCards: React.FC<SlideCardProps> = ({ contents }) => {
  
  const showNavigation = contents.length > 4; // 네비게이션 버튼을 보일지 말지 결정하는 조건
 
  return (
    <Container sx={{
      width: '1050px',
      display: 'flex',
      justifyContent: 'space-between', 
      position: 'relative',
      paddingTop: "10px 10px 20px",

    }}>
      <button className="custom-swiper-button-prev" style={{
        cursor: 'pointer',
        border: 'none',
        color: 'black',
        backgroundColor: 'none',
        padding: '10px',
      }}><ArrowBackIosIcon /></button>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={4}
        slidesPerGroup={4}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        pagination={{ clickable: true}}
        style={{ position: 'relative', paddingTop: '0px', paddingBottom: '30px' }}
      >
        {contents.map((content, index) => (
          <SwiperSlide key={index}>
            <OneCard
              contents={content}
              onCardClick={() => window.location.href = content.clickUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="custom-swiper-button-next" style={{
        cursor: 'pointer',
        border: 'none',
        color: '#3e3e3e',
        padding: '10px',
        marginLeft: '10px'

      }}><ArrowForwardIosIcon /></button>
    </Container>
  );
}

export default SlideCards;
