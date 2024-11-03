import React from 'react'
import logo from '../../assets/Images/logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { useGSAP } from '@gsap/react'
import Design from '../Design/Design';
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

          gsap.to('.media', {
            scale: 1.1,
            y: 50,
            duration: 1,
            repeat: -1,
            yoyo: true,  
            stagger: 0.5

          });

    })

  return (
    <>
        <section className='flex flex-col justify-center items-center mt-12 mb-6'>       

          <div className=''>

            <div>
              <p className='text-6xl text-center font-black font-orbitronBold '>Follow us <br /> on social media </p>
            </div>

            <div className='mt-32 flex gap-20 '>

              <div className=' media w-56 h-[28rem] bg-blue-600/80 hover:bg-blue-800 rounded-2xl  '>
                <div className='text-white mt-6 flex justify-center  '>
                  <img src={fb} alt="" className='w-20  ' />
                </div>
                <p className=' -rotate-90  text-center text-4xl font-black tracking-widest mt-32  '>FACEBOOK</p>
              </div>

              <div className=' media w-56 h-[28rem] bg-[#c0c0c0] rounded-2xl bg-gradient-to-br from-gray-800 to-black hover:from-black hover:to-gray-900 '>
                <div className='text-white mt-6 flex justify-center  '>
                  <img src={x} alt="" className='w-20' />
                </div>
                <p className=' -rotate-90  text-center text-4xl font-black tracking-widest mt-32  '>TWITTER</p>
              </div>

              <div className=' media w-56 h-[28rem] bg-[#c0c0c0] rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500 hover:from-pink-600 hover:via-purple-600 hover:to-yellow-600  '>
                <div className='text-white mt-3 flex justify-center  '>
                  <img src={insta} alt="" className='w-28' />
                </div>
                <p className=' -rotate-90  text-center text-4xl font-black tracking-widest mt-32  '>INSTAGRAM</p>
              </div>

            </div>

          </div>

          <div className='container flex justify-around mt-52 text-lg font-medium '>
               <p>User agreement</p>
               <p>© 2004-2024</p>
               <p>Privacy policy and cookie</p>
          </div>

        </section>

    </>
  )
}

export default Footer