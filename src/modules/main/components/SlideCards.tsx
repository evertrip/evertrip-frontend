import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import OneCard, { CardContent } from './OneCard';
import { Container } from '@mui/material';

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
    clickUrl: "/swimming"
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
  }
];

const SlideCards: React.FC = () => {
  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination]} // 모듈 활성화
        spaceBetween={50}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        // breakpoints={{
        //     768: {
        //       slidesPerView: 3,  // 슬라이드 2개 보이기
        //       spaceBetween: 30   // 간격 30px
        //     },
        //     // 화면 너비가 1024px 이하일 경우
        //     1024: {
        //       slidesPerView: 3,  // 슬라이드 3개 보이기
        //       spaceBetween: 40   // 간격 40px
        //     },
        //   }}
        >
        {cardsContents.map((content, index) => (
          <SwiperSlide key={index}>
            <OneCard 
              content={content} 
              onCardClick={() => window.location.href = content.clickUrl} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default SlideCards;
