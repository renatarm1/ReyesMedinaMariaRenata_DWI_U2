import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './App.css';

// Asegúrate de que las extensiones (.webp / .png) y nombres coincidan exacto:
import helloKittyImg from './assets/characters/hello-kitty.webp';
import myMelodyImg from './assets/characters/my-melody.webp';
import kuromiImg from './assets/characters/kuromi.webp';
import cinnamorollImg from './assets/characters/cinnamoroll.webp';
import pompompurinImg from './assets/characters/pompompurin.png';
import keroppiImg from './assets/characters/keroppi.webp';
import chococatImg from './assets/characters/chococat.png'; // <- Sin guion y extensión .png

const characters = [
  { name: 'Hello Kitty', img: helloKittyImg, color: '#ffb3c1' },
  { name: 'My Melody', img: myMelodyImg, color: '#ffc6ff' },
  { name: 'Kuromi', img: kuromiImg, color: '#e7c6ff' },
  { name: 'Cinnamoroll', img: cinnamorollImg, color: '#bdb2ff' },
  { name: 'Pompompurin', img: pompompurinImg, color: '#fffffc' },
  { name: 'Keroppi', img: keroppiImg, color: '#90be6d' },
  { name: 'Chococat', img: chococatImg, color: '#f9c74f' }
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
          rotate: 35,
          stretch: 0,
          depth: 250,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        style={{ width: '100%', padding: '50px 0' }}
      >
        {characters.map((char, idx) => (
          <SwiperSlide key={idx} style={{ width: '280px' }}>
            <div className="sanrio-card" style={{ borderColor: char.color }}>
              <img src={char.img} alt={char.name} />
              <h3 style={{ color: '#000000', marginTop: '12px' }}>{char.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}