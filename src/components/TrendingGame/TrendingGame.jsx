import React from 'react'
import { useRef } from 'react'
import Design from '../Design/Design'
import trendingGame from '../../assets/Images/trendingGame1.jpg'
import './TrendingGame.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import trailer from '../../assets/Video/trailer.mp4'

function TrendingGame() {

    // const btn = useRef(null)
    const videoRef = useRef(null)
    const cylinderEffect = useRef(null)

    useGSAP(() =>{


        // gsap.from(btn.current, {
        //     y: -100,
        //     backgroundColor: '#00ccff',
        //     duration: 0.8,
        //     ease: 'power3.out'
        // })

        gsap.fromTo(
            videoRef.current,
            { scale: 0.5, },
            {
              scale: 1,
              duration: 2,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: videoRef.current,
                start: 'top 80%', 
                // end: 'bottom 10%',
                onEnter: () => {
                    videoRef.current.play();
                },
                toggleActions: 'play reverse play reverse', 
                // markers: true, 
              },
            }
        );

        gsap.fromTo(cylinderEffect.current.children,
            {
                x: "-50%",
                opacity: 0,
                rotateY: -90,
              },
              {
                x: "0%",
                opacity: 1,
                rotateY: 0,
                // stagger: 0.1, 
                duration: 1.5,
                // ease: "power3.out",
                scrollTrigger: {
                    trigger: '.mainScroll',
                    start: 'top 90%',
                    end: 'bottom 90%',
                    // markers: true,
                }
              })

    })

  return (
    <>
        <section className='w-full h-max py-6 '>
            <Design />

            <div className='flex justify-center mainScroll '>
                <div className='container flex justify-between max-sm:flex-col max-sm:items-center max-md:flex-col max-lg:gap-x-6  '  >

                    <div className=' w-3/12 max-sm:w-72 max-sm:flex max-lg:h-[100%] max-lg:w-[100%]  '>
                        <img src={trendingGame} className=' h-full ' alt="" />
                    </div>

                    <div className=' mt-4 w-3/5 ' ref={cylinderEffect} >

                        <div>
                            <h1 className='text-5xl font-bold font-ModernWarfare max-sm:text-4xl max-sm:mx-2 max-lg:text-4xl '>DEAD ESTATE</h1>
                        </div>

                        <div className='flex gap-3 mt-4 text-xs max-sm:text-[10px] max-sm:mx-2 '>
                            <button className=' btn border rounded-full px-3 py-1 max-sm:px-2 max-sm:py-0.5 '  >Action</button>
                            <button className=' btn border rounded-full px-3 py-1 max-sm:px-2 max-sm:py-0.5 '>Horror</button>
                            <button className=' btn border rounded-full px-3 py-1 max-sm:px-2 max-sm:py-0.5 '>Fantasy</button>
                            <button className=' btn border rounded-full px-3 py-1 max-sm:px-2 max-sm:py-0.5 '>Adventure</button>
                        </div>

                        <div className='mt-10 space-y-4 max-sm:space-y-3 max-sm:mt-6 max-sm:mx-2 max-lg:text-sm '>
                            
                            <p className='max-sm:text-sm'><span className='text-lg font-bold text-Gblue max-sm:text-sm max-lg:text-sm'>Storyline:</span> Dead Estate is a gory, fast-paced, challenging, roguelike shooter, with a heavy emphasis on Halloween and other horror influences. Ascend the floors of a monster-filled mansion with 8 unique characters and collect loads of items and weapons, tackle grueling challenges, and discover many secrets and unlockables along the way</p>

                            <p className='max-sm:text-sm'><span className=' text-Gblue font-bold '>Release:</span> October 19, 2021 </p>

                            <p  className='max-sm:text-sm'><span className=' text-Gblue font-bold '>Rating:</span> 7.3 / 10 </p>
                        </div>

                    </div>

                </div>
            </div>

            <h3  className=' mt-8 text-6xl text-center font-orbitronBlack tracking-wider mb-8 max-sm:text-2xl max-sm:mt-8 max-sm:mb-3 max-md:text-5xl max-md:mt-12 max-lg:text-4xl max-lg:mt-16 '>Trailer</h3>

            <div className=' mainVideo flex justify-center h-full ' >
                <div className=' w-full h-full ' >
                    <video ref={videoRef} src={trailer} className=' video rounded-xl w-full h-full ' controls muted  ></video>
                </div>
            </div>

        </section>
    </>
  )
}

export default TrendingGame