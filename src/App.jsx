import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './App.css';

const characters = [
  { name: 'Hello Kitty', img: 'https://i.pinimg.com/origins/hello-kitty.png', color: '#ffb3c1' },
  { name: 'My Melody', img: 'https://i.pinimg.com/origins/my-melody.png', color: '#ffc6ff' },
  { name: 'Kuromi', img: 'https://i.pinimg.com/origins/kuromi.png', color: '#e7c6ff' },
  { name: 'Cinnamonroll', img: 'https://i.pinimg.com/origins/cinnamoroll.png', color: '#bdb2ff' },
  { name: 'Pompompurin', img: 'https://i.pinimg.com/origins/pompompurin.png', color: '#fffffc' }
];

export default function App() {
  return (
    <div className="meadow-bg">
      <h1 className="title">Hello Kitty & Friends</h1>
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        style={{ width: '100%', padding: '50px 0' }}
      >
        {characters.map((char, idx) => (
          <SwiperSlide key={idx} style={{ width: '260px' }}>
            <div className="sanrio-card">
              <img src={char.img} alt={char.name} />
              <h3 style={{ color: '#ff477e', marginTop: '12px' }}>{char.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}