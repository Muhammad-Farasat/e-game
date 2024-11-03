import React from 'react'
import './News.css'
import shape from '../../assets/Images/Polygon 2.png'
import Cards from '../Cards/Cards'
import dota from '../../assets/Images/dota2.png'
import lol from '../../assets/Images/lol.jpg'
import minecraft from '../../assets/Images/minecraft.png'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'




function News() {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=> {

        gsap.set('.card', {
            x: -200, // Slide from the left
            y: 100,
            scale: 0.8, // Start smaller
            rotation: 32, // Start with a tilt
            opacity: 0,
          });
      
          gsap.to('.card', {
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.5,
            scrollTrigger: {
              trigger: '.card ',
              start: 'top 50%', // Animation starts when the card reaches 80% of the viewport height
              end: 'top 50%',
              toggleActions: 'play none none reverse ', // Reset animation if you scroll back up
              // markers: true,
            },
          });

          
          gsap.fromTo(
            '.word',
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power3.out',
              stagger: 0.2, // stagger animation for sequential effect
              scrollTrigger: {
                trigger: '.word',
                start: 'top 50%', // start the animation when heading enters viewport
                toggleActions: 'play none none reverse', // allows reverse on scroll up
                // markers: true,
              },
            }
          );

    })

  return (
    <>
        <section className=' w-full h-max py-8 relative'>
            <div className="element_circle -z-50">
                <div className='glowing-ellipse absolute top-64 left-[-8px] w-[40px] h-[40px] '></div>
                <div className='glowing-ellipse absolute top-2/3 right-[-8px] w-[40px] h-[40px] '></div>
            </div>

            <div className="flex justify-center">
                <div className=" container ">

                    <div className='flex justify-center'>
                        <div className='heading flex gap-5'>
                            <div className='word mt-12 font-orbitronBlack tracking-[1.5px] text-[40px] '>
                                Latest
                            </div>
                            <div className='word mt-12 font-orbitronBlack tracking-[1.5px] text-[40px] '>
                                 Gaming
                            </div>
                            <div className='word mt-12 font-orbitronBlack text-Gblue tracking-[1.5px] text-[40px] '>
                                  News
                            </div>
                        </div>
                        <div className='bg-img absolute top-6 '>
                            <img src={shape} alt="" />
                        </div>
                    </div>

                    <div className='main-card mt-20 relative z-50 flex justify-between '>
                        <Cards className='card' game={dota} 
                        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} heading={'Dota 2'} />
                        <Cards className='card' game={lol} 
                        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                        heading={'League of Leagends'}/>
                        <Cards className='card' game={minecraft} 
                        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                        heading={'MineCraft'} />
                    </div>

                </div>
            </div>
            

        </section>
    </>
  )
}

export default News