import React from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
import fb from '../../assets/Images/fb.png'
import x from '../../assets/Images/x.png'
import insta from '../../assets/Images/insta.png'


function Footer() {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=> {
          
          gsap.fromTo(
            '.foot-thing',
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power3.out',
              stagger: 0.2, // stagger animation for sequential effect
              scrollTrigger: {
                trigger: '.foot-thing',
                start: 'top 100%', // start the animation when heading enters viewport
                toggleActions: 'play none none reverse', // allows reverse on scroll up
                // markers: true,
              },
            }
          );

          gsap.timeline({
            scrollTrigger: {
              trigger: '.media',         
              start: 'top 80%',          
              end: 'bottom 20%',         
              toggleActions: 'play none none reverse',
            }
          }).fromTo('.media', 
              { scale: 0 },             
              { scale: 1, duration: 1 } 
            ).to('.media', {
              scale: 1.1,
              yoyo: true,               
              repeat: -1,               
              duration: 1,              
              ease: 'power1.inOut'      
          });

          gsap.fromTo(
            '.footText',
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power3.out',
              stagger: 0.2, // stagger animation for sequential effect
              scrollTrigger: {
                trigger: '.footMain',
                start: 'top 20%', // start the animation when heading enters viewport
                toggleActions: 'play none none reverse', // allows reverse on scroll up
              },
            }
          );

          

    })

  return (
    <>
        <section className=' footMain flex flex-col justify-center items-center mt-12 mb-6'>       

          <div className=' footCard '>

            <div>
              <div className='  text-6xl flex flex-col font-black font-orbitronBold max-sm:text-3xl max-md:text-5xl max-lg:text-4xl '>
                <div className='flex justify-center gap-6 max-lg:gap-x-3 '>
                  <p className='footText'>Follow</p> 
                  <p className='footText'>us</p> 
                </div>
                  <div className='flex justify-center gap-6 max-lg:gap-x-3 ' >
                    <p className='footText'>on</p> 
                    <p className='footText'>social</p>
                    <p className='footText'>media</p> 
                  </div> 
              </div>
            </div>

            <div className='mt-32 flex gap-20 max-sm:flex-col max-sm:items-center max-sm:mt-16 max-lg:mt-12 max-xl:mt-16  '>

              <div className=' media w-56 h-[28rem] max-sm:space-y-32 max-sm:w-48 max-sm:h-[24rem] max-md:w-44 max-md:h-96 max-lg:w-40 max-lg:h-80 bg-blue-600/80 hover:bg-blue-800 rounded-2xl  '>
                <div className='text-white mt-6 flex justify-center  '>
                  <img src={fb} alt="" className='w-20  max-sm:w-16 max-md:w-16 max-lg:w-16 ' />
                </div>
                <p className=' -rotate-90  text-center text-4xl font-black tracking-widest mt-32 max-lg:mt-20 max-lg:text-2xl max-sm:text-3xl max-md:text-3xl '>FACEBOOK</p>
              </div>

              <div className=' media w-56 h-[28rem] max-sm:space-y-32 max-sm:w-48 max-sm:h-[24rem] max-md:w-44 max-md:h-96 max-lg:w-40 max-lg:h-80 bg-[#c0c0c0] rounded-2xl bg-gradient-to-br from-gray-800 to-black hover:from-black hover:to-gray-900 '>
                <div className='text-white mt-6 flex justify-center  '>
                  <img src={x} alt="" className='w-20 max-sm:w-14 max-md:w-16 max-lg:w-16 ' />
                </div>
                <p className=' -rotate-90  text-center text-4xl font-black tracking-widest mt-32 max-sm:text-3xl max-md:text-3xl max-lg:text-2xl max-lg:mt-20 '>TWITTER</p>
              </div>

              <div className=' media w-56 h-[28rem] max-sm:space-y-32 max-sm:w-48 max-sm:h-[24rem] max-md:w-44 max-md:h-96 max-lg:w-40 max-lg:h-80 bg-[#c0c0c0] rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500 hover:from-pink-600 hover:via-purple-600 hover:to-yellow-600  '>
                <div className='text-white mt-3 flex justify-center  '>
                  <img src={insta} alt="" className='w-28 max-sm:w-20 max-md:w-20 max-lg:w-20' />
                </div>
                <p className=' -rotate-90  text-center text-4xl font-black tracking-widest mt-32 max-sm:text-3xl max-md:text-3xl max-lg:text-2xl max-lg:mt-20 '>INSTAGRAM</p>
              </div>

            </div>

          </div>

          <div className='container flex justify-around mt-52 text-lg font-medium max-sm:text-[10px] max-sm:mt-20 max-lg:mt-32 max-lg:text-sm  '>
               <p>User agreement</p>
               <p>© 2004-2024</p>
               <p>Privacy policy and cookie</p>
          </div>

        </section>

    </>
  )
}

export default Footer