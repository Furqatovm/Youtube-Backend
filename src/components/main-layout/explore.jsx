import React from 'react'
import Lampa from "./lampa.png"

const Explore = () => {
  return (
    <div className='grid grid-cols-5'>
        <div className='col-span-5 h-[40vh]'>
        <img src={Lampa} className='w-full h-full object-cover' alt="" />
        </div>

        <div className='grid-cols-full'>
                <div>
                    
                </div>
        </div>
    </div>
  )
}

export default Explore