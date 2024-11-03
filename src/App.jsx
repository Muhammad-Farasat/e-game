import './App.css'
import gsap from 'gsap';
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import './App.css'
import Hero from './components/HeroSection/Hero';
import News from './components/News/News';
import divider from './assets/Images/divider_enhanced.png'
import Rating from './components/Rating/Rating';
import Footer from './components/Footer/Footer.jsx';
import Preloader from './components/PreLoader/Preloader.jsx';
import Design from './components/Design/Design.jsx';
import TrendingGame from './components/TrendingGame/TrendingGame.jsx';

function App() {
  // useGSAP(() => {
  //   gsap.from(".shape", {
  //     x: -200,
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power2.out"
  //   });
  //   document.addEventListener("mousemove", (e) => {
  //     gsap.to(".shape", {
  //       x: e.clientX / 10,
  //       y: e.clientY / 10
  //     });
  //   });
  //   gsap.to("body", {
  //     background: "linear-gradient(to right, #ff1744, #00cfff, #a445ff)",
  //     duration: 5,
  //     repeat: -1,
  //     yoyo: true
  //   });
  //   gsap.to(".hud-element", {
  //     x: "random(-20, 20)",
  //     y: "random(-20, 20)",
  //     duration: 2,
  //     ease: "none",
  //     repeat: -1,
  //     yoyo: true
  //   });
  //   gsap.to(".particle", {
  //     x: "random(-100, 100)",
  //     y: "random(-100, 100)",
  //     opacity: "random(0.5, 1)",
  //     duration: 3,
  //     repeat: 1,
  //     yoyo: true
  //   });
    
    
    
  // })

  const symbols = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚬ','ᚱ','ᚴ', 'þ']

    const symbolRefs = useRef([])
    const radius = 100;

    useGSAP(()=>{

 // Position symbols in a circular layout
 symbolRefs.current.forEach((symbol, index) => {
    const angle = (index / symbols.length) * Math.PI * 2; 
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    gsap.set(symbol, { x, y, opacity: 0, scale: 0.8 }); 
  });

  const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power3.out" } });

  // Animate each symbol into view one by one
  tl.to(symbolRefs.current, {
    opacity: 1,
    scale: 1.2,
    stagger: 0.8,
    onComplete: () => {
        gsap.to(symbolRefs.current, {
            rotation: 360,
        })
    }
  });

  // Scatter effect after delay
  tl.to(symbolRefs.current, {
    x: () => Math.random() * 200 - 100,
    y: () => Math.random() * 200 - 100,
    opacity: 0,
    scale: 0.5,
    stagger: 0.2,
    delay: 1.5,
    onComplete: () =>{
      document.querySelectorAll('.main').style.display = 'none';
    }
  });


    })

  return (
    <>
      {/* <div className='main'>
            {symbols.map((symbol, index) => (
            <div
            key={index}
            className={`symbol-circle symbol-${index + 1}`}
            ref={(el) => (symbolRefs.current[index] = el)}
            style={{ opacity: 0, transform: `scale(0.8)` }}
            >
            <div className="symbol">{symbol}</div>
            </div>
        ))}
      </div> */}
      <Hero />
      <News />
      <TrendingGame />
      <Rating />
      {/* <div className='flex justify-center mt-20 '>
        <img src={divider} className='w-96' alt="" />
      </div> */}
      
      <Footer />
    </>
  )
}

export default App
