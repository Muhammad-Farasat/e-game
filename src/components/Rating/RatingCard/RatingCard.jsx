import React from 'react'
import Button from '../../Button/Button'


function RatingCard({cardImg, date, rating, heading}) {
  return (
    <>
      
        {/* <div 
        className=" rating-card w-96 h-[34rem] bg-white bg-opacity-45 overflow-x-hidden max-2xl:w-72 max-2xl:h-[30rem] max-sm:w-72 max-sm:h-[28rem] max-md:w-52 max-md:h-[26rem] max-lg:w-60 max-lg:h-[28rem] " 
        > */}

        <div className='rating-card'>
          <div className=' w-96 max-lg:w-56 max-xl:w-72  relative group'>
            <div className='w-full h-full group-hover:bg-[#000000ad]  absolute top-0 '></div>
            <img src={cardImg} className='rounded-lg' alt="" />
            <div className="text mt-6 ml-2 mr-3 space-y-2  absolute bottom-16 hidden group-hover:block   ">

              <h1 className=' text-2xl font-orbitronBold max-sm:text-xl max-md:text-lg max-lg:text-xl ' >{heading}</h1>
              
              <p className='max-md:text-sm'><b>Release:</b> {date}</p>
              <p className='flex items-center gap-2 max-md:text-sm'><b>Rating:</b> {rating} </p>
              <div  >
                <Button btnName={'Rate now'} />
              </div>
            </div>
          </div>
          {/* <div className=' mt-4'>
                <Button btnName={'Rate now'} /> 
                <button className='w-full bg-gradient-to-r from-Gblue to-[#0169be] hover:from-[#0169be] hover:to-Gblue py-1 text-xl rounded-md font-bold ' >Rate</button>
          </div> */}

        </div>


        {/* -----------------Button--------------- */}


          {/* <div className='bg-cardFrame absolute bg-contain '></div> */}

            {/* <div className='w-full h-72 max-2xl:h-52 max-sm:h-52 max-md:h-44 '
            style={{
              backgroundImage: `url(${cardImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
            </div> */}


      {/* </div> */}
    </>
  )
}

export default RatingCard