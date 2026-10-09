import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './App.css';

// Importación de imágenes locales desde src/characters/
import helloKittyImg from "./assets/characters/hello-kitty.webp";
import myMelodyImg from "./assets/characters/my-melody.png";
import kuromiImg from "./assets/characters/kuromi.webp";
import cinnamorollImg from "./assets/characters/cinnamoroll.webp";
import pompompurinImg from "./assets/characters/pompompurin.png";
import keropiImg from "./assets/characters/keropi.png";
import chocoCatImg from "./assets/characters/choco-cat.png";

const characters = [
  { name: 'Hello Kitty', img: helloKittyImg, color: '#ffb3c1' },
  { name: 'My Melody', img: myMelodyImg, color: '#f4b2ea' },
  { name: 'Kuromi', img: kuromiImg, color: '#e7c6ff' },
  { name: 'Cinnamonroll', img: cinnamorollImg, color: '#b2edff' },
  { name: 'Pompompurin', img: pompompurinImg, color: '#f5dab3' },
  { name: 'Keropi', img: keropiImg, color: '#daa872' },
  { name: 'Choco cat', img: chocoCatImg, color: '#f9c74f' }
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
          rotate: 35,       // Ángulo de inclinación 3D de las tarjetas laterales
          stretch: 0,       // Espaciado entre diapositivas
          depth: 250,       // Profundidad para alejar/acercar las tarjetas laterales
          modifier: 1,      // Multiplicador del efecto
          slideShadows: true // Sombra 3D en los costados de las tarjetas
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        style={{ width: '100%', padding: '50px 0' }}
      >
        {characters.map((char, idx) => (
          <SwiperSlide key={idx} style={{ width: '280px' }}>
            <div className="sanrio-card" style={{ borderColor: char.color }}>
              <img src={char.img} alt={char.name} />
              <h3 style={{ color: '#ff477e', marginTop: '12px' }}>{char.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}