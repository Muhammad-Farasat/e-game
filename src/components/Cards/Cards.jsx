import React from 'react'
import Button from '../Button/Button'


function Cards({game, heading, description}) {
  return (
    <>
        <div 
        className="card w-96 h-[34rem] bg-white bg-opacity-45 rounded-tl-[3rem] rounded-tr-md rounded-br-[3rem] rounded-bl-md max-2xl:w-72 max-2xl:h-[30rem] ">

          <div className='w-full h-72 rounded-tl-[3rem] rounded-tr-md max-2xl:h-52  '
          style={{
            backgroundImage: `url(${game})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
          </div>

          <div className="text mt-6 ml-2 mr-3 space-y-2 ">

            <h1 className=' text-2xl font-orbitronBold  ' >{heading}</h1>
            <p className='text-[12px] '>{description}</p>

            <div className='flex justify-end'>
              <Button btnName={'Read more...'} />
            </div>

          </div>


        </div>
    </>
  )
}

export default Cards