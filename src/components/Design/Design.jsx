import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import style from './Design.module.css'

function Design() {
  

  useGSAP(() => {

    // gsap.set('.trendDesigns', {
    //   transform: 'translateX(-100%)'
    // })
    gsap.to('.textNews',{
      x: '+=200%',
      duration: 10,
      ease: 'none',
      repeat: -1,
      yoyo: true,
    });

  });

  


  return (


    <>
        <section className=' trendDesigns w-full py-4 mt-14 mb-14 translate-x-[-100%] flex gap-6  '>
            <p className='flex flex-shrink-0 textNews'><span className={style.textStroke}>TRENDING GAMES</span></p>
            <p className='flex flex-shrink-0 textNews'><span className={style.textStroke}>TRENDING GAMES</span></p>
            <p className='flex flex-shrink-0 textNews'><span className={style.textStroke}>TRENDING GAMES</span></p>
            <p className='flex flex-shrink-0 textNews'><span className={style.textStroke}>TRENDING GAMES</span></p>
            <p className='flex flex-shrink-0 textNews'><span className={style.textStroke}>TRENDING GAMES</span></p>
            <p className='flex flex-shrink-0 textNews'><span className={style.textStroke}>TRENDING GAMES</span></p>
        </section>
    </>
  )
}

export default Design