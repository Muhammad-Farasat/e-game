import React from 'react'
import Button from '../../Button/Button'

function RatingCard({cardImg, date, rating, heading}) {
  return (
    <>
      
        <div 
        className=" rating-card w-96 h-[34rem] bg-white bg-opacity-45 overflow-x-hidden max-2xl:w-72 max-2xl:h-[30rem] " 
        >

          {/* <div className='bg-cardFrame absolute bg-contain '></div> */}

            <div className='w-full h-72 max-2xl:h-52 '
            style={{
              backgroundImage: `url(${cardImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
            </div>

            <div className="text mt-6 ml-2 mr-3 space-y-2 ">

              <h1 className=' text-2xl font-orbitronBold  ' >{heading}</h1>
              
              <p><b>Release:</b> {date}</p>
              <p className='flex items-center gap-2'><b>Rating:</b> {rating} </p>

              <div className='flex justify-end'>
                <Button btnName={'Rate now'} /> 
              </div>

            </div>

      </div>
    </>
  )
}

export default RatingCard