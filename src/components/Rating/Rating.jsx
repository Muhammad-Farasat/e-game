import React from 'react'
import { FaStarHalfAlt, FaRegStar, FaStar } from "react-icons/fa";
import cod from '../../assets/Images/cod.jpg'
import gta from '../../assets/Images/gtav.jpg'
import tekken from '../../assets/Images/tekken8.jpg'
import RatingCard from './RatingCard/RatingCard'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'

function Rating() {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=> {

      gsap.set('.rating-card', {
          x: -200, // Slide from the left
          // y: 100000,
          scale: 0.8, // Start smaller
          rotation: 32, // Start with a tilt
          opacity: 0,
        });
    
        gsap.to('.rating-card', {
          x: 0,
          // y: 0,
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.5,
          scrollTrigger: {
            trigger: '.mainRateContainer',
            start: 'top 30%', // Animation starts when the card reaches 80% of the viewport height
            end: 'top 30%',
            toggleActions: 'play none none reverse ', // Reset animation if you scroll back up
            // markers: true,
          },
        });

        
        gsap.fromTo(
          '.rateWord',
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.2, // stagger animation for sequential effect
            scrollTrigger: {
              trigger: '.mainRateContainer',
              start: 'top 20%', // start the animation when heading enters viewport
              toggleActions: 'play none none reverse', // allows reverse on scroll up
            },
          }
        );

  })



  return (
    <>
        <section className='w-full h-[100vh] flex justify-center relative max-sm:h-auto'>

            <div className="element_circle -z-50">
                <div className='glowing-ellipse absolute bottom-20 left-[-8px] h-52 '></div>
                <div className='glowing-ellipse absolute top-44 right-[-4px] h-32 '></div>
            </div>
          <div className="container ">

            <div className=' mainRateContainer  mt-8 flex justify-center'>
              <h1 className='font-orbitronBold tracking-wide text-[40px] flex gap-4 max-sm:text-[26px] max-sm:gap-2 '>
                <div className='rateWord'>Top</div>
                <div className='rateWord'>Game</div>
                <span className='text-Gblue rateWord'>Reviews</span>
              </h1>
            </div>

            <div className=" rateGame mt-20 flex justify-between max-sm:flex-col max-sm:space-y-12 max-sm:items-center ">

              <RatingCard className='rating-card' date={'October 29, 2003'} 
                rating={<div className=' flex gap-2 text-Gold'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
              </div>}  cardImg={cod} heading={'Call Of Duty'} />

              <RatingCard className='rating-card' date={'October 29, 2003'} 
                rating={<div className=' flex gap-2 text-Gold'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>} 
                cardImg={gta} heading={'Grand Theif Auto: V'} />

              <RatingCard className='rating-card' date={'October 29, 2003'} 
                rating={<div className=' flex gap-2 text-Gold'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>}  cardImg={tekken} heading={'Tekken: 8'} />



            </div>

          </div>

        </section>
    </>
  )
}

export default Rating