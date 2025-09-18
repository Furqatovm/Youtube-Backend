import React from 'react'

const Card = ({image, title, description, like, name, time, duration}) => {
  return (
    <div>
        <div className='relative'>
        <img src={image} alt="" />
        <span className='bg-[#000000] p-[4px] text-[10px] text-[#FFFFFF] absolute bottom-1 right-1'>{duration}</span>
        </div>
        <div className='flex  justify-around  items-start  w-full mt-3'>
            <div className='max-w-[36px] w-full flex items-center justify-center'>
            <img src="https://tse2.mm.bing.net/th/id/OIP.AQtvP5FcfiEMQpu14ueJCgHaGU?rs=1&pid=ImgDetMain&o=7&rm=3" className='w-full rounded-full' alt="" />
            </div>
            <div>
                <h1 className='text-[12px] text-white font-[700] leading-[100%]'>{title}</h1>
                <span className='text-[#AAAAAA] text-[12px]  leading-[100%] block'>{name}</span>
                <span className='text-[#AAAAAA] text-[12px]  leading-[100%]'>{like}K Views {time} week ago</span>
            </div>
        </div>
    </div>
  )
}

export default Card