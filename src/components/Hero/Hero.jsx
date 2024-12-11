import React, { useEffect } from 'react'
import './Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  useEffect(() => {
    AOS.init({
        duration: 1000, 
    });
}, []);
  return (
    <section className='Hero'>
      <div className='Hero_Part1'>
        <p>NEW RELEASE</p>
        <h1 data-aos="fade-up">AURORA DIAMOND RING</h1>
      </div>
      <button>SHOP NOW FOR 20% OFF!</button>
    </section>
  )
}

