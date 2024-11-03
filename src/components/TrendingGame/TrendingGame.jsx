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
                <div className='container flex '  >

                    <div className='w-full h-3/4 '>
                        <img src={trendingGame} className=' h-full ' alt="" />
                    </div>

                    <div className=' mt-4 ' ref={cylinderEffect} >

                        <div >
                            <h1 className='text-5xl font-bold font-ModernWarfare '  >DEAD ESTATE</h1>
                        </div>

                        <div className='flex gap-3 mt-4 text-xs  '>
                            <button className=' btn border rounded-full px-3 py-1 '  >Action</button>
                            <button className=' btn border rounded-full px-3 py-1 '>Horror</button>
                            <button className=' btn border rounded-full px-3 py-1 '>Fantasy</button>
                            <button className=' btn border rounded-full px-3 py-1 '>Adventure</button>
                        </div>

                        <div className='mt-10 space-y-4 '>
                            
                                <p ><span className='text-lg font-bold text-Gblue '>Storyline:</span> Dead Estate is a gory, fast-paced, challenging, roguelike shooter, with a heavy emphasis on Halloween and other horror influences. Ascend the floors of a monster-filled mansion with 8 unique characters and collect loads of items and weapons, tackle grueling challenges, and discover many secrets and unlockables along the way</p>

                                <p><span className=' text-Gblue font-bold '>Release:</span> October 19, 2021 </p>

                                <p ><span className=' text-Gblue font-bold '>Rating:</span> 7.3 / 10 </p>
                        </div>

                    </div>

                </div>
            </div>

            <h3  className='  text-6xl text-center font-BruceForever mb-8 '>Trailer</h3>

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