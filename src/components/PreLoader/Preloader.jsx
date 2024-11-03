import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap';
import './Preloader.css'; 




function Preloader() {

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
  });
    })

  return (
    <>
        <div className='main'>
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
      </div>
    </>
  )
}

export default Preloader