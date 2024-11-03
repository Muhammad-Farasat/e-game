import React from 'react'
import Button from '../../Button/Button'
import './RatingCard.css'

function RatingCard({cardImg, date, rating, heading}) {
  return (
    <>
      
        <div 
        className=" rating-card w-96 h-[34rem] bg-white bg-opacity-45 overflow-x-hidden max-2xl:w-72 max-2xl:h-[30rem] max-sm:w-72 max-sm:h-[28rem] max-md:w-52 max-md:h-[26rem] max-lg:w-60 max-lg:h-[28rem] " 
        >

          {/* <div className='bg-cardFrame absolute bg-contain '></div> */}

            <div className='w-full h-72 max-2xl:h-52 max-sm:h-52 max-md:h-44 '
            style={{
              backgroundImage: `url(${cardImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
            </div>

            <div className="text mt-6 ml-2 mr-3 space-y-2  ">

              <h1 className=' text-2xl font-orbitronBold max-sm:text-xl max-md:text-lg max-lg:text-xl ' >{heading}</h1>
              
              <p className='max-md:text-sm'><b>Release:</b> {date}</p>
              <p className='flex items-center gap-2 max-md:text-sm'><b>Rating:</b> {rating} </p>

              <div className='flex justify-end '>
                <Button btnName={'Rate now'} /> 
              </div>

            </div>

      </div>
    </>
  )
}

export default RatingCard