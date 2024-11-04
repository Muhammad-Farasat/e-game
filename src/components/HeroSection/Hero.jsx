import React from 'react'
import './Hero.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Navbar from '../Navbar/Navbar'
import hero from '../../assets/Images/main.png'
import thunder from '../../assets/Images/electric.png'
import dice from '../../assets/Images/crystal.png'
import hexagon from '../../assets/Images/Polygon.png'

function Hero() {

  const diceRef = useRef([]);
  // const  = useRef(null);

  // const rotateHandle = (index) =>{
  //   gsap.set(diceRef.current, {rotationY: 0});
    
  //   gsap.to(diceRef.current[index],{
  //     rotation: "+=180",
  //     duration: 0.5,
  //     ease: "power2.inOut"
  //   })
  // }

  useGSAP(()=>{

    var timeline = gsap.timeline()
    

    timeline.fromTo('.dice', { scale: 0, y: 100, rotate: 90, opacity: 0 },
      { scale: 1, y: 0, rotate: 0, opacity: 1, stagger: 0.4, duration: 0.6, ease: 'back.out(1.7)', onComplete: () => {
        gsap.to(".dice", {
              x: "random(-30, 30)",
              y: "random(-30, 30)",
              opacity: "random(0.2, 1)",
              duration: 3,
              repeat: -1,
              yoyo: true
            });
      } });

    // gsap.set(diceRef.current, {
    //   x: 0,
    //   y: 0,
    //   opacity: 0,
    // })

    // gsap.to(diceRef.current, {
    //   x: 0,
    //   y:0,
    //   scale: 1.2,
    //   delay: 1,
    //   duration: 4,
    //   opacity: 1,
    //   rotation: 360,
    // })

    gsap.fromTo(".hero-spark", {scale: 0, opacity: 0, rotate: 180},
      {
      scale: 1,
      duration: 2,
      opacity: 1,
      rotate: 0,
      onComplete: () => {
        gsap.to('.hero-spark', {
            duration: 0.05,
            opacity: 0.75,
            repeat: -1,
            yoyo: true,
            stagger: 0.1,
          })
    }
    });

    gsap.fromTo(
      '.mainWords',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.5,
        // onComplete: () => {
        //   gsap.to('.mainWords', {
        //     scale: 1.1,
        //     duration: 3,
        //     repeat: -1,
        //     yoyo: true
        //   })
        // }
      }
    );
  


    
  })

  return (
    <>
      <section className='hero h-[100vh] w-full overflow-y-hidden  '>
        <Navbar />

        <div className="hero_img flex justify-center"> 

            <div className='container '>

              {/*  */}

              <div className='flex justify-center '>

                  <div className=' hero-spark w-[50%] absolute max-sm:inset-x-0 bottom-0 flex items-end max-sm:w-[100%] max-2xl:w-[60%] '>
                    <img src={thunder} className='thunder-aura' alt="" />
                  </div>
                  
                  <div className='z-50 absolute h-[100%] bottom-0   max-sm:h-auto '>
                    <img src={hero} className='h-full ' id='character' alt="" />
                  </div>
              </div>

              {/*  */}

              <div className=' flex justify-center h-[100%] '>
                <div className="hexagon absolute bottom-0 h-[100%]  max-sm:w-80 max-sm:h-80 ">
                  <img src={hexagon} className=' w-[60rem] h-[100%]  max-2xl:w-[100%] ' alt="" />
                </div>
              </div>

              <div className="design_element   ">

                <div className='dice absolute top-20 left-80 w-10 z-50 max-sm:w-6 max-sm:left-4 max-2xl:left-52 ' >
                  <img src={dice} alt="" />
                </div>

                <div className='circles flex flex-col gap-y-1 absolute top-[48%] left-12 max-sm:hidden '>
                  <div className='flex gap-1 '>
                    <div className='shape w-1.5 h-1.5 bg-slate-200 rounded-full '></div>
                    <div className='shape w-1.5 h-1.5 bg-slate-200 rounded-full '></div>
                  </div>
                  <div className='flex gap-1'>
                    <div className='shape w-1.5 h-1.5 bg-slate-200 rounded-full '></div>
                    <div className='shape w-1.5 h-1.5 bg-slate-200 rounded-full '></div>
                  </div>
                </div>

                <div className='dice absolute top-48 left-40 w-20 z-50 max-sm:w-5 max-sm:left-12 max-sm:top-52 max-2xl:left-20 max-2xl:w-16  '
                ref={(el) => (diceRef.current[1]=el)} onMouseEnter={() => rotateHandle(1)}>
                  <img src={dice} alt="" />
                </div>

                <div className='dice absolute bottom-72 left-24 w-8 z-50 max-sm:w-8 max-sm:left-16 max-sm:top-80 max-2xl:bottom-52   ' 
                ref={(el) => (diceRef.current[2]=el)} onMouseEnter={() => rotateHandle(2)}>
                  <img src={dice} alt="" />
                </div>

                <div className='dice absolute bottom-12 left-56 w-14 rotate-180 max-sm:w-8   '
                ref={(el) => (diceRef.current[3]=el)}  onMouseEnter={() => rotateHandle(3)}>
                  <img src={dice} alt="" />
                </div>



                <div className='dice absolute bottom-48 right-56 w-24 z-[60] max-sm:w-8 max-sm:top-72  max-2xl:right-20 max-2xl:w-16 ' 
                ref={(el) => (diceRef.current[4]=el)} onMouseEnter={() => rotateHandle(4)}>
                  <img src={dice} alt="" />
                </div>

                <div className='circles flex flex-col gap-y-1 absolute top-[48%] right-28 max-sm:hidden '>
                  <div className='flex gap-1 '>
                    <div className='shape w-1.5 h-1.5 bg-slate-200 rounded-full '></div>
                    <div className='shape w-1.5 h-1.5 bg-slate-200 rounded-full '></div>
                    <div className='shape w-1.5 h-1.5 bg-slate-200 rounded-full '></div>
                  </div>
                  <div className='flex gap-1'>
                    <div className='shape w-1.5 h-1.5 bg-slate-200 rounded-full '></div>
                    <div className='shape w-1.5 h-1.5 bg-slate-200 rounded-full '></div>
                    <div className='shape w-1.5 h-1.5 bg-slate-200 rounded-full '></div>
                  </div>
                </div>

                <div className='dice absolute top-48 right-56 w-20 rotate-90 z-[60] max-sm:w-8 max-sm:top-56 max-sm:right-6 max-2xl:w-16 ' 
                ref={(el) => (diceRef.current[5]=el)} onMouseEnter={() => rotateHandle(5)}>
                  <img src={dice} alt="" />
                </div>

                <div className='dice absolute top-24 right-[30%] w-8 rotate-180 z-[60] max-sm:w-5 max-2xl:right-12 ' 
                ref={(el) => (diceRef.current[6]=el)} onMouseEnter={() => rotateHandle(6)}>
                  <img src={dice} alt="" />
                </div>

                <div className='dice absolute bottom-20 right-12 w-14 rotate-45 z-[60] max-sm:w-10 max-sm:left-12 max-2xl:right-32 max-2xl:w-10 ' 
                ref={(el) => (diceRef.current[7]=el)} onMouseEnter={() => rotateHandle(7)}>
                  <img src={dice} alt="" />
                </div>

              </div>

              <div className='flex justify-center  '>
                <div className=' container absolute bottom-32 tracking-wider text-7xl z-50 font-BruceForever cursor-pointer max-sm:text-xl max-2xl:text-5xl max-sm:top-32 max-sm:flex max-sm:flex-col max-sm:items-center '>

                  <div className="up flex space-x-5 max-sm:space-x-2 ">
                    <div className='mainWords'>WELCOME </div>
                    <div className='mainWords'>TO </div>
                    <div className='mainWords'>THE</div>
                  </div>

                  <div className="bottom flex space-x-5 max-sm:space-x-2">
                    <div className='mainWords'>WORLD</div>
                    <div className='mainWords'>OF</div>
                    <div className='game mainWords'>GAMING</div>
                  </div>

                </div>
              </div>

            </div>



        </div>
            

      </section>





    </>
  )
}

export default Hero