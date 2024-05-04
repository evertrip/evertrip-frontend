import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import OneCard, { CardContent } from './OneCard';
import { Container } from '@mui/material';



// 슬라이드 카드 컴포넌트의 프로퍼티는 없지만, 필요한 경우 추가 가능
interface SlideCardsProps {}

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
  }
];


const SlideCards: React.FC = () => {
  return (
    <Container sx={{
      width: '1024px',
      height: '300px'
    }}>
      <Swiper 
        modules={[Navigation, Pagination]} 
        spaceBetween={10}  // 모든 화면 크기에서 카드 사이 간격을 10px로 고정
        slidesPerView={5}  // 초기 슬라이드 뷰 5개 설정
        navigation
        pagination={{ clickable: true }}
        style={{ position: 'relative', paddingTop: '50px', paddingBottom: '50px' }}
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
