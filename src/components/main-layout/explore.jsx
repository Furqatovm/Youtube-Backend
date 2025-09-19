import React from 'react'
import Lampa from "./lampa.png"
import yagir from "./yagir.jpg"
import Youtube from "./youtube.png"


const Explore = () => {
  return (
    <div className='grid grid-cols-5'>
        <div className='col-span-5 h-[35vh]'>
        <img src={Lampa} className='w-full h-full object-cover' alt="" />
        </div>
        <div className='col-span-full'>
            <div>

            </div>
        </div>

        <div className='col-span-full px-[3rem] pt-[1rem] flex justify-between items-center w-full'>
                <div className='flex gap-[1.5rem] items-center'>
                    <img src={yagir} className='max-w-[80px] rounded-full w-full' alt="" />
                    <div>
                      <h3 className='text-white text-[1.5rem] leading-[100%]'>Marcus Levin</h3>
                      <span className='text-[14px] text-[#AAAAAA]'>1.2M subscribers</span>
                    </div>
                </div>
                  <button className='text-white text-[14px] uppercase font-bold py-[10px] px-[1rem] block bg-[#CC0000] rounded-[2px]'>Subscribes</button>
        </div>

        <div className='col-span-full flex justify-between items-center px-[1rem]'>
        <div className='flex items-center'>
        <button className='text-[14px] uppercase text-white font-bold py-[1rem] px-[2rem]'>home</button>
          <button className='text-[14px] uppercase text-white font-bold py-[1rem] px-[2rem]'>videos</button>
          <button className='text-[14px] uppercase text-white font-bold py-[1rem] px-[2rem]'>playlists</button>
          <button className='text-[14px] uppercase text-white font-bold py-[1rem] px-[2rem]'>Community</button>
          <button className='text-[14px] uppercase text-white font-bold py-[1rem] px-[2rem]'>channels</button>
          <button className='text-[14px] uppercase text-white font-bold py-[1rem] px-[2rem]'>about</button>
        </div>
        <div className='flex py-[1rem] px-[2rem] justify-between w-[30%]'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.87 20.17L15.28 14.58C16.35 13.35 17 11.75 17 10C17 6.13 13.87 3 10 3C6.13 3 3 6.13 3 10C3 13.87 6.13 17 10 17C11.75 17 13.35 16.35 14.58 15.29L20.17 20.88L20.87 20.17ZM10 16C6.69 16 4 13.31 4 10C4 6.69 6.69 4 10 4C13.31 4 16 6.69 16 10C16 13.31 13.31 16 10 16Z" fill="#AAAAAA"/>
          </svg>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.45508 18.975L14.4301 12L7.45508 5.025L8.52008 3.96L16.5451 12L8.52008 20.025L7.45508 18.975Z" fill="#AAAAAA"/>
            </svg>
        </div>
        </div>


      <section className='flex col-span-full bg-[#000000] py-[1.5rem] px-[3rem]'>
          <div className='w-[45%]'>
            <img src={Youtube} alt="" />
          </div>
          <div className='55%'>
              <h3 className='text-white font-bold text-[14px]'>Blind Woodturner: Turning passion into fine art</h3>
          </div>
      </section>



    </div>
  )
}

export default Explore