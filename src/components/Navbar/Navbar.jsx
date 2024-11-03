import React from 'react'

function Navbar() {
  return (
    <>
        <section className='flex  justify-center bg-transparent '>
            <div className='container py-4 '>
              {/* logo side */}
                <div className="logo cursor-pointer ">
                    <p className=' font-orbitronBlack text-white text-2xl max-sm:text-xl '>E <span className='w-full h-full p-1.5 text-[20px] bg-Gblue rounded-tl-xl rounded-tr-sm rounded-br-xl rounded-bl-sm max-sm:p-1 max-sm: text-sm '>Game</span></p>
                </div>


                {/* <div className="list">
                  <ul className='flex gap-6 font-orbitronExtrabold tracking-wider text-lg '>
                    <li ><a href="">News</a></li>
                    <li><a href="">Rating</a></li>
                    <li><a href="">About</a></li>
                  </ul>
                </div> */}

                {/* <div></div> */}

            </div>
        </section>
    </>
  )
}

export default Navbar